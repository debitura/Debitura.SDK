# @debitura/debt-collection

Official **TypeScript / JavaScript** client for the [Debitura Debt Collection (Customer) API](https://www.debitura.com/integration/debt-collection-api).

Debitura connects you with trusted, local debt collection firms in the debtor's country and recovers your overdue B2B/B2C claims on a no-cure-no-pay basis. This SDK lets you upload cases, preview pricing/eligibility, track status, and manage your collection workflow programmatically.

- **Landing page:** https://www.debitura.com/integration/debt-collection-api
- **Full docs & guides:** https://docs.debitura.com
- **Source:** https://github.com/debitura/Debitura.SDK (`/typescript`)

This package is **generated from the OpenAPI spec** with [openapi-generator](https://openapi-generator.tech) (`typescript-axios`). The package version tracks the spec's `info.version`. Do not edit the generated files by hand — change the spec and regenerate.

## Install

```bash
npm install @debitura/debt-collection
# or
yarn add @debitura/debt-collection
```

## Authentication

The Debt Collection API is a gated, commercial API. You authenticate with an **API key** sent in the `XApiKey` HTTP header. Get your key from your Debitura account at https://app.debitura.com/CreditorApiKey.

Configure it once via the `Configuration` object:

```ts
import { Configuration, CasesApi } from "@debitura/debt-collection";

const config = new Configuration({
  // Debitura sends the API key in the `XApiKey` header.
  apiKey: process.env.DEBITURA_API_KEY!,
  basePath: "https://api.debitura.com", // your assigned Customer API base URL
});

const cases = new CasesApi(config);
```

> The `apiKey` option wires up the `XApiKey` header for you (the spec's `ApiKey` security scheme). Referral partners using a bearer token should set `accessToken` instead.

## Example — list and preview a case

```ts
import { Configuration, CasesApi } from "@debitura/debt-collection";

const config = new Configuration({
  apiKey: process.env.DEBITURA_API_KEY!,
  basePath: "https://api.debitura.com",
});
const cases = new CasesApi(config);

async function main() {
  // List your existing cases. `casesGet` returns a paginated InvoiceListDto:
  //   { page: { totalResults, pageSize, currentPage, ... }, cases: [...] }
  const { data: result } = await cases.casesGet();
  console.log(
    `You have ${result.page?.totalResults ?? result.cases?.length ?? 0} case(s) ` +
      `(page ${result.page?.currentPage ?? 1}).`
  );

  // Preview pricing / eligibility before creating a case.
  // amountToRecover, currencyCode and debtor (type + countryAlpha2) are required.
  const { data: preview } = await cases.casesPreviewPost({
    debituraWebExternalApiContractsV1CasesRequestsPreviewCaseRequestApiViewModel: {
      amountToRecover: 1000,
      currencyCode: "EUR",
      debtor: { type: "Company", countryAlpha2: "DK" },
    },
  });
  console.log("Preview:", preview);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

Always `preview` for pricing and eligibility before you create a case — creating a case is a legal/financial action.

## What's in the box

Generated API classes (one per tag): `CasesApi`, `CoverageApi`, `ContractsApi`, `DivisionsApi`, `PaymentsApi`, `WebhooksApi`, `MeApi`, `UsersApi`, and more. All request/response models are exported from the package root and under `./models`.

## License

MIT
