# debitura-debt-collection

Official **Python** client for the [Debitura Debt Collection (Customer) API](https://www.debitura.com/integration/debt-collection-api).

Debitura connects you with trusted, local debt collection firms in the debtor's country and recovers your overdue B2B/B2C claims on a no-cure-no-pay basis. This SDK lets you upload cases, preview pricing/eligibility, track status, and manage your collection workflow programmatically.

- **Landing page:** https://www.debitura.com/integration/debt-collection-api
- **Full docs & guides:** https://docs.debitura.com
- **Source:** https://github.com/debitura/Debitura.SDK (`/python`)

This package is **generated from the OpenAPI spec** with [openapi-generator](https://openapi-generator.tech). The package version tracks the spec's `info.version`. Do not edit the generated files by hand — change the spec and regenerate.

## Install

```bash
pip install debitura-debt-collection
```

Import name is `debitura_debt_collection`.

## Authentication

The Debt Collection API is a gated, commercial API. You authenticate with an **API key** sent in the `XApiKey` HTTP header. Get your key from your Debitura account at https://app.debitura.com/CreditorApiKey.

Pass the key under the `ApiKey` security scheme — the SDK maps it to the `XApiKey` header for you:

```python
import os
from debitura_debt_collection import Configuration, ApiClient
from debitura_debt_collection.api.cases_api import CasesApi

config = Configuration(
    host="https://api.debitura.com",  # your assigned Customer API base URL
)
# The 'ApiKey' scheme is sent as the `XApiKey` header.
config.api_key["ApiKey"] = os.environ["DEBITURA_API_KEY"]
```

> Referral partners using a bearer token should instead set `config.access_token = "<jwt>"`.

## Example — list and preview a case

```python
import os
from debitura_debt_collection import Configuration, ApiClient
from debitura_debt_collection.api.cases_api import CasesApi
from debitura_debt_collection.models import (
    DebituraWebExternalApiContractsV1CasesRequestsPreviewCaseRequestApiViewModel as PreviewCaseRequest,
    DebituraWebExternalApiContractsV1CasesRequestsPreviewDebtorDto as PreviewDebtor,
)

config = Configuration(host="https://api.debitura.com")
config.api_key["ApiKey"] = os.environ["DEBITURA_API_KEY"]

with ApiClient(config) as client:
    cases = CasesApi(client)

    # List your existing cases. cases_get() returns a paginated InvoiceListDto
    # with `.page` (totalResults, page_size, current_page, ...) and `.cases`.
    result = cases.cases_get()
    count = result.page.total_results if result.page else len(result.cases or [])
    print(f"You have {count} case(s) (page {result.page.current_page if result.page else 1}).")

    # Preview pricing / eligibility before creating a case.
    # amount_to_recover, currency_code and debtor (type + country_alpha2) are required.
    preview = cases.cases_preview_post(
        PreviewCaseRequest(
            amount_to_recover=1000,
            currency_code="EUR",
            debtor=PreviewDebtor(type="Company", country_alpha2="DK"),
        )
    )
    print("Preview:", preview)
```

Always preview for pricing and eligibility before you create a case — creating a case is a legal/financial action.

## What's in the box

Generated API classes (one per tag) under `debitura_debt_collection.api`: `cases_api.CasesApi`, `coverage_api.CoverageApi`, `contracts_api.ContractsApi`, `divisions_api.DivisionsApi`, `payments_api.PaymentsApi`, `webhooks_api.WebhooksApi`, `me_api.MeApi`, `users_api.UsersApi`, and more. Models live under `debitura_debt_collection.models`.

## License

MIT
