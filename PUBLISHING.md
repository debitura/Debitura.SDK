# Publishing the Debitura SDKs

**Status: GATED / INERT.** Nothing publishes today. The publish workflow only runs on a GitHub **Release (published)** or a manual **workflow_dispatch**, and no release has been cut and no registry credentials/trusted-publishers are configured. Follow this checklist to go live.

The two packages:

| Language | Package | Registry |
|---|---|---|
| TypeScript | `@debitura/debt-collection` | [npm](https://www.npmjs.com/) |
| Python | `debitura-debt-collection` | [PyPI](https://pypi.org/) |

Version tracks the spec's `info.version` (see `scripts/generate.mjs` → `toSemver`). Bump the spec's `info.version` to publish a new version.

---

## One-time setup (Lars)

### 1. Make the repo public (optional but expected)
The SDK is meant to be open. Flip `debitura/Debitura.SDK` to **public** when you're ready (Settings → General → Danger Zone). Trusted publishing via OIDC works on private repos too, but the package pages link back here.

### 2. Register / claim the package names
- **npm:** ensure the `@debitura` org/scope exists and your account can publish to it. The package is `publishConfig.access = "public"` so the first publish creates it.
- **PyPI:** the name `debitura-debt-collection` is created on first upload. Optionally pre-register the project so you can configure a trusted publisher before the first release.

### 3. Configure publishing credentials — pick ONE per registry

**Preferred: Trusted Publishing (OIDC) — no long-lived secrets.**

- **PyPI:** PyPI → your project → *Publishing* → add a **GitHub Actions** trusted publisher:
  - Owner: `debitura`
  - Repository: `Debitura.SDK`
  - Workflow: `publish.yml`
  - Environment: `pypi` (must match the `environment:` in the workflow)
  The `publish.yml` Python job already requests `id-token: write` and uses `pypa/gh-action-pypi-publish` with no token.
- **npm:** npm supports OIDC trusted publishing for packages configured with it (npm CLI ≥ 11.5 / current GitHub Actions runners). Configure the `@debitura/debt-collection` package's trusted publisher to this repo + `publish.yml`. The npm job requests `id-token: write` for provenance.

**Fallback: API tokens (if you don't use OIDC).**
Add repository **Secrets** (Settings → Secrets and variables → Actions):
- `NPM_TOKEN` — an npm automation token with publish rights to `@debitura`.
- `PYPI_TOKEN` — a PyPI API token scoped to `debitura-debt-collection`.
Then uncomment the token lines noted in `.github/workflows/publish.yml`.

### 4. Create the `npm` and `pypi` GitHub Environments (REQUIRED)
The publish jobs in `publish.yml` pin to the `npm` and `pypi` environments, so both **must** exist before the workflow can publish. Create them under Settings → Environments and configure **required reviewers** on each:

- **Required reviewers are mandatory, not optional.** `publish.yml` is triggered by `workflow_dispatch` (and Release). Once the repo is public, anyone with write access could otherwise dispatch a publish — the required-reviewer gate on these environments forces an explicit human approval before either package is pushed to npm/PyPI.
- Attach the trusted publisher (OIDC) or the fallback token secret to each environment as described in step 3.
- Do not remove the `environment: npm` / `environment: pypi` lines from `publish.yml`; they are what bind the approval gate.

---

## Cutting a release

1. Update `spec/customer-api.json` (or let `generate.yml` refresh it) and run `node scripts/generate.mjs`. Commit the regenerated clients. The version is derived from `info.version`.
2. Merge to `main`.
3. Create a **GitHub Release** with a tag matching the version (e.g. `v1.0.0`) and click **Publish release**. This triggers `publish.yml`, which builds and publishes both packages.
   - Or run `publish.yml` manually via **Actions → publish → Run workflow** for a controlled first publish.

## Verifying it worked
- npm: `npm view @debitura/debt-collection version`
- PyPI: `pip index versions debitura-debt-collection` (or check the project page)

## Rolling back
You cannot overwrite a published version on either registry. To fix a bad release, bump `info.version` in the spec, regenerate, and publish a new version. (npm `deprecate` / PyPI `yank` can hide a bad version.)
