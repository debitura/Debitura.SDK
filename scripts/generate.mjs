#!/usr/bin/env node
/**
 * Generates the Debitura Customer API client SDKs (TypeScript + Python)
 * from spec/customer-api.json using @openapitools/openapi-generator-cli.
 *
 * The package version TRACKS the spec's `info.version`. A `vN` style version
 * (e.g. "v1") is normalised to semver "N.0.0" so a no-op spec change does not
 * churn a publish. If `info.version` is already semver it is used verbatim.
 *
 * Requirements: Node 18+, Java 11+ (openapi-generator-cli downloads its own jar).
 * Usage:
 *   node scripts/generate.mjs            # generate both languages
 *   node scripts/generate.mjs typescript # generate one language
 *   node scripts/generate.mjs python
 */
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SPEC = resolve(ROOT, "spec/customer-api.json");

/** Convert an OpenAPI info.version to a semver string. */
export function toSemver(raw) {
  if (!raw) return "0.0.0";
  const v = String(raw).trim();
  // already semver-ish (1.2.3 / 1.2.3-rc1)
  if (/^\d+\.\d+\.\d+/.test(v)) return v;
  // "v1" / "1" -> major only
  const m = v.match(/^v?(\d+)$/i);
  if (m) return `${m[1]}.0.0`;
  // "v1.2" -> "1.2.0"
  const m2 = v.match(/^v?(\d+)\.(\d+)$/i);
  if (m2) return `${m2[1]}.${m2[2]}.0`;
  return "0.0.0";
}

const spec = JSON.parse(readFileSync(SPEC, "utf8"));
const SPEC_VERSION = spec.info?.version ?? "v1";
const PKG_VERSION = toSemver(SPEC_VERSION);
console.log(`Spec info.version = ${SPEC_VERSION}  ->  package version = ${PKG_VERSION}`);

function ogc(args) {
  // Uses the locally installed @openapitools/openapi-generator-cli wrapper.
  execFileSync("npx", ["--yes", "@openapitools/openapi-generator-cli", ...args], {
    stdio: "inherit",
    cwd: ROOT,
  });
}

function generateTypeScript() {
  console.log("\n=== Generating TypeScript (typescript-axios) ===");
  ogc([
    "generate",
    "-i", SPEC,
    "-g", "typescript-axios",
    "-o", resolve(ROOT, "typescript"),
    "-c", resolve(ROOT, "scripts/config.typescript.json"),
    "--additional-properties", `npmVersion=${PKG_VERSION}`,
    "--git-host", "github.com",
    "--git-user-id", "debitura",
    "--git-repo-id", "Debitura.SDK",
  ]);
  // The generated package.json drops our curated metadata; re-apply name,
  // version, homepage and repository so npm/SEO metadata is authoritative.
  patchPackageJson();
}

function patchPackageJson() {
  const p = resolve(ROOT, "typescript/package.json");
  const pkg = JSON.parse(readFileSync(p, "utf8"));
  pkg.name = "@debitura/debt-collection";
  pkg.version = PKG_VERSION;
  pkg.description =
    "Official Debitura client for the Debt Collection (Customer) API.";
  pkg.homepage = "https://www.debitura.com/integration/debt-collection-api";
  pkg.repository = {
    type: "git",
    url: "git+https://github.com/debitura/Debitura.SDK.git",
    directory: "typescript",
  };
  pkg.bugs = { url: "https://github.com/debitura/Debitura.SDK/issues" };
  pkg.license = "MIT";
  pkg.keywords = [
    "debitura",
    "debt-collection",
    "debt-recovery",
    "api",
    "sdk",
    "openapi",
  ];
  pkg.publishConfig = { access: "public" };
  writeFileSync(p, JSON.stringify(pkg, null, 2) + "\n");
  console.log("Patched typescript/package.json metadata.");
}

function generatePython() {
  console.log("\n=== Generating Python ===");
  ogc([
    "generate",
    "-i", SPEC,
    "-g", "python",
    "-o", resolve(ROOT, "python"),
    "-c", resolve(ROOT, "scripts/config.python.json"),
    "--additional-properties", `packageVersion=${PKG_VERSION}`,
    "--git-host", "github.com",
    "--git-user-id", "debitura",
    "--git-repo-id", "Debitura.SDK",
  ]);
  patchPyProject();
}

function patchPyProject() {
  // openapi-generator (python) emits pyproject.toml; stamp version + metadata.
  const p = resolve(ROOT, "python/pyproject.toml");
  let toml = readFileSync(p, "utf8");
  toml = toml.replace(/^version = .*/m, `version = "${PKG_VERSION}"`);
  // PyPI distribution name uses hyphens (import name stays underscored).
  toml = toml.replace(/^name = .*/m, `name = "debitura-debt-collection"`);
  toml = toml.replace(/^license = .*/m, `license = "MIT"`);
  toml = toml.replace(
    /^description = .*/m,
    `description = "Official Debitura client for the Debt Collection (Customer) API."`
  );
  if (!/^homepage =/m.test(toml)) {
    toml = toml.replace(
      /^(name = .*)$/m,
      `$1\nhomepage = "https://www.debitura.com/integration/debt-collection-api"`
    );
  }
  if (!/^documentation =/m.test(toml)) {
    toml = toml.replace(
      /^(repository = .*)$/m,
      `$1\ndocumentation = "https://docs.debitura.com"`
    );
  }
  // Ensure the import package maps to the hyphenated distribution name.
  if (!/packages = /.test(toml)) {
    toml = toml.replace(
      /^(readme = .*)$/m,
      `$1\npackages = [{ include = "debitura_debt_collection" }]`
    );
  }
  writeFileSync(p, toml);
  console.log("Patched python/pyproject.toml name + version + metadata.");
}

const which = process.argv[2];
if (!which || which === "typescript") generateTypeScript();
if (!which || which === "python") generatePython();
console.log("\nDone.");
