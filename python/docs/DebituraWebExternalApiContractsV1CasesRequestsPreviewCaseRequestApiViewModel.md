# DebituraWebExternalApiContractsV1CasesRequestsPreviewCaseRequestApiViewModel

Request model for previewing case eligibility, partner assignment, and required actions before actually creating a collection case.              This endpoint allows you to check: - Whether a case would be eligible for collection (partner coverage available) - Which partner would be assigned - What documents need to be signed (SDCA, Power of Attorney) - Estimated pricing with age-based surcharges              Use this to guide users through document signing before final case submission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_to_recover** | **float** | The TOTAL amount to recover for this case. This represents the full principal amount across all invoices (if multiple invoices are bundled).              For multi-invoice cases with different ages, you can optionally provide age breakdown fields (AmountToRecoverOver12Months and AmountToRecoverOver24Months) to enable blended age-based pricing.              If age breakdown fields are omitted, the preview will show base pricing without age surcharge calculation. | 
**currency_code** | **str** | ISO 4217 currency code for the amount (e.g., \&quot;DKK\&quot;, \&quot;EUR\&quot;, \&quot;USD\&quot;) | 
**debtor** | [**DebituraWebExternalApiContractsV1CasesRequestsPreviewDebtorDto**](DebituraWebExternalApiContractsV1CasesRequestsPreviewDebtorDto.md) |  | 
**amount_to_recover_over6_months** | **float** | OPTIONAL - MULTI-INVOICE AGE BUCKET PRICING (PRICING ZONE 180-DAY THRESHOLD)              The portion of AmountToRecover that is more than 6 months (180 days) overdue. This includes amounts that are 12+ and 24+ months overdue.              This field is optional and can only be provided alongside AmountToRecoverOver12Months and AmountToRecoverOver24Months. It enables precise pricing tier selection based on the 180-day threshold. When omitted, the system falls back to deriving the threshold from AmountToRecoverOver12Months.              Validation rules: - Must be ≤ AmountToRecover - Must be ≥ AmountToRecoverOver12Months | [optional] 
**amount_to_recover_over12_months** | **float** | OPTIONAL - MULTI-INVOICE AGE BUCKET PRICING              The portion of AmountToRecover that is more than 12 months overdue. This includes amounts that are 24+ months overdue.              If provided, AmountToRecoverOver24Months must also be provided. Both fields must be provided together or both omitted.              Used to calculate blended age uplift for multi-invoice cases: - Amount under 12 months &#x3D; AmountToRecover - AmountToRecoverOver12Months - Amount 12-24 months &#x3D; AmountToRecoverOver12Months - AmountToRecoverOver24Months - Amount over 24 months &#x3D; AmountToRecoverOver24Months              Blended uplift formula: ((A12-A24)×10 + A24×20) / AmountToRecover where A12 &#x3D; AmountToRecoverOver12Months, A24 &#x3D; AmountToRecoverOver24Months              Validation rules: - Must be ≤ AmountToRecover - Must be ≥ AmountToRecoverOver24Months | [optional] 
**amount_to_recover_over24_months** | **float** | OPTIONAL - MULTI-INVOICE AGE BUCKET PRICING              The portion of AmountToRecover that is more than 24 months overdue.              If provided, AmountToRecoverOver12Months must also be provided. Both fields must be provided together or both omitted.              Used to calculate blended age uplift for multi-invoice cases. See AmountToRecoverOver12Months for full details on the calculation.              Validation rules: - Must be ≤ AmountToRecoverOver12Months - Must be ≤ AmountToRecover | [optional] 
**due_date** | **datetime** | Optional invoice due date. Mutually exclusive with age bucket fields. If provided, Debitura computes the age surcharge internally — no need to calculate age buckets. Cannot be a future date. | [optional] 
**return_url** | **str** | Optional: URL the creditor user should land on after completing any pending signing chain (SDCA upgrade / PoA / JPA / KYC) on the Debitura Creditors app. Embedded, URL-encoded, into &#x60;PreviewCaseResponseApiViewModel.Result.SigningHandoff.CombinedSigningUrl&#x60; (when at least one signing-related required action is present) and into &#x60;BusinessErrorResponseApiDTO.SigningHandoff.CombinedSigningUrl&#x60; / &#x60;InvoiceDto.SigningHandoff.CombinedSigningUrl&#x60; on POST &#x60;/cases&#x60;.              Must be an absolute http(s) URL. Values that fail validation (relative URLs, non-http schemes, header-injection characters) are silently dropped — the combined URL is still emitted but without the returnUrl query parameter, and the Creditors app falls back to its own safe in-app default landing.              Additive. Existing integrations that omit this field see the same behaviour as before. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_requests_preview_case_request_api_view_model import DebituraWebExternalApiContractsV1CasesRequestsPreviewCaseRequestApiViewModel

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesRequestsPreviewCaseRequestApiViewModel from a JSON string
debitura_web_external_api_contracts_v1_cases_requests_preview_case_request_api_view_model_instance = DebituraWebExternalApiContractsV1CasesRequestsPreviewCaseRequestApiViewModel.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesRequestsPreviewCaseRequestApiViewModel.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_requests_preview_case_request_api_view_model_dict = debitura_web_external_api_contracts_v1_cases_requests_preview_case_request_api_view_model_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesRequestsPreviewCaseRequestApiViewModel from a dict
debitura_web_external_api_contracts_v1_cases_requests_preview_case_request_api_view_model_from_dict = DebituraWebExternalApiContractsV1CasesRequestsPreviewCaseRequestApiViewModel.from_dict(debitura_web_external_api_contracts_v1_cases_requests_preview_case_request_api_view_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


