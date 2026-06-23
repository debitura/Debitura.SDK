# Debitura SDK

Official client SDKs for the **Debitura Debt Collection (Customer) API** — the public API for uploading and managing debt collection cases on the [Debitura](https://www.debitura.com) platform.

- **Landing page:** https://www.debitura.com/integration/debt-collection-api
- **Full developer docs:** https://docs.debitura.com
- **OpenAPI spec (canonical):** https://docs.debitura.com/openapi/customer-api.json

| Language | Package | Directory | Registry |
|---|---|---|---|
| TypeScript / JavaScript | `@debitura/debt-collection` | [`/typescript`](./typescript) | npm |
| Python | `debitura-debt-collection` | [`/python`](./python) | PyPI |

Both packages are **generated from the same OpenAPI spec** using [openapi-generator](https://openapi-generator.tech) (OSS — no third-party service). This repo is a thin, reproducible build wrapper around that spec: the generated code is committed so consumers get a stable, reviewable package, and CI regenerates it whenever the spec changes.

> Scope: this repo covers the **Customer API only** (the public Debt Collection API). The collection-partner and referral-partner APIs are out of scope.

## How generation works

```
spec/customer-api.json  ──▶  scripts/generate.mjs  ──▶  /typescript  (@debitura/debt-collection)
   (committed copy of                                └▶  /python      (debitura-debt-collection)
    docs.debitura.com/openapi/customer-api.json)
```

- **`spec/customer-api.json`** is the working copy and the build input. It is a committed snapshot of the canonical spec published at `https://docs.debitura.com/openapi/customer-api.json` (served by the Debitura.Docusaurus site — see DEB-4851).
- **`scripts/generate.mjs`** runs `@openapitools/openapi-generator-cli` for both languages and stamps each package's version + metadata.
- **Versioning:** the package version **tracks the spec's `info.version`** (normalised to semver — e.g. `v1` → `1.0.0`). A no-op spec edit therefore does not churn a publish.

### Regenerate locally

Requires **Node 18+** and **Java 11+** (openapi-generator is a Java tool; the npm wrapper downloads its own jar).

```bash
npm install                 # installs the openapi-generator-cli wrapper
node scripts/generate.mjs   # regenerate both TypeScript + Python
node scripts/generate.mjs typescript   # or just one
```

### Refresh the spec from the live URL

The canonical spec is the public URL. To pull the latest into the working copy:

```bash
curl -fsSL https://docs.debitura.com/openapi/customer-api.json -o spec/customer-api.json
node scripts/generate.mjs
```

CI (`.github/workflows/generate.yml`) automates exactly this and opens a PR if the generated output changed — this is how the SDK "reacts" to a new spec.

## Publishing

Publishing is **gated and currently inert** — no packages are published until an owner explicitly enables it. See **[PUBLISHING.md](./PUBLISHING.md)** for the exact go-live checklist (register packages, configure trusted publishing / tokens, make the repo public, cut a release).

## Layout

```
Debitura.SDK/
├── spec/customer-api.json        # committed spec snapshot (build input)
├── openapitools.json             # pins the openapi-generator version
├── scripts/
│   ├── generate.mjs              # generates both clients from the spec
│   ├── config.typescript.json    # typescript-axios generator config
│   └── config.python.json        # python generator config
├── typescript/                   # generated @debitura/debt-collection
├── python/                       # generated debitura-debt-collection
├── .github/workflows/
│   ├── generate.yml              # regenerate-on-spec-change → PR
│   └── publish.yml               # GATED publish to npm + PyPI
├── PUBLISHING.md                 # go-live checklist
└── README.md
```

## License

MIT
