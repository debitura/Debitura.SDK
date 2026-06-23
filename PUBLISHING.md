# Publishing the Debitura SDKs

**Status: LIVE.** Both packages are published at **`v1.0.0`** (first published 2026-06-23) and the publish pipeline is live. It is **gated**: the publish workflow only runs on a GitHub **Release (published)** or a manual **workflow_dispatch**, and each job pauses on a **required-reviewer** approval gate on its GitHub Environment before anything reaches a registry.

The two packages:

| Language | Package | Registry |
|---|---|---|
| TypeScript | `@debitura/debt-collection` | [npm](https://www.npmjs.com/package/@debitura/debt-collection) |
| Python | `debitura-debt-collection` | [PyPI](https://pypi.org/project/debitura-debt-collection/) |

Version tracks the spec's `info.version` (see `scripts/generate.mjs` → `toSemver`). Bump the spec's `info.version` to publish a new version. Neither registry allows republishing a version, so every change ships under a new version number.

> **Canonical operational reference:** the live publish wiring (registry accounts, the GitHub approval gate, where the npm token lives in Azure App Configuration, verification, and gotchas) is documented in the Wiki runbook:
> **<https://github.com/debitura/Debitura.Wiki/blob/main/engineering/ops/sdk-publish-runbook.md>**
>
> This file is the in-repo quick reference for cutting a release; the runbook is the source of truth for the operational state.

---

## How publishing is wired (already set up)

The one-time go-live setup is **done** — it does not need redoing. For reference, the live wiring is:

- **npm** publishes with a granular automation token (`secrets.NPM_TOKEN`, scoped to the `@debitura` org) and `--provenance`. The token is mirrored in Azure App Configuration so it can be re-applied if the GitHub secret is ever lost.
- **PyPI** publishes via **trusted publishing (OIDC)** — no token. A pending publisher was registered before the first upload and claimed the `debitura-debt-collection` name on first publish.
- The `npm` and `pypi` **GitHub Environments** exist, each with a **required reviewer**. The publish jobs pin to these environments (`environment: npm` / `environment: pypi` in `publish.yml`) — do not remove those lines; they bind the approval gate.

See the Wiki runbook above for the exact registry settings, the App Configuration key, and the `gh`/`az` commands used to provision them.

---

## Cutting a release

1. Bump `info.version` in `spec/customer-api.json` (the version is derived from the spec, not edited in `package.json`/`pyproject.toml` directly) and run `node scripts/generate.mjs` to regenerate both clients. Commit the regenerated output and merge to `main`.
2. Create a **GitHub Release** with a tag matching the new version (e.g. `v1.1.0`), or run **Actions → publish → Run workflow** for a manual dispatch. Either triggers `publish.yml`.
3. **Approve the gate.** The run pauses on the `npm` and `pypi` environment approval gates; the required reviewer approves both (via **Review deployments** on the run page, or `gh api repos/debitura/Debitura.SDK/actions/runs/<run-id>/pending_deployments`). Once approved, both jobs build and publish.
4. **Verify** the published version:
   - npm: `npm view @debitura/debt-collection version`
   - PyPI: `pip index versions debitura-debt-collection` (or check the project page)

## Rolling back / no-overwrite

You cannot overwrite a published version on either registry. To fix a bad release, **bump `info.version` in the spec, regenerate, and publish a new version.** `npm deprecate` / PyPI `yank` can hide a bad version but cannot replace it.

## Future hardening

npm currently authenticates with the granular `NPM_TOKEN`. Now that the package exists, npm **OIDC trusted publishing** can be configured on the `@debitura/debt-collection` package (repo `debitura/Debitura.SDK` + workflow `publish.yml` + environment `npm`) to drop the long-lived token entirely — matching how PyPI already works.
