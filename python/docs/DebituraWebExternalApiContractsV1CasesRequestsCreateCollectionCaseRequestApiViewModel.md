# DebituraWebExternalApiContractsV1CasesRequestsCreateCollectionCaseRequestApiViewModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** |  | 
**var_date** | **datetime** |  | [optional] 
**due_date** | **datetime** |  | [optional] 
**comments** | **str** | Optional comments about the case, e.g. payment history or communication context. | [optional] 
**claim_description** | **str** | Client provided description of the claim | [optional] 
**creditor_reference** | **str** |  | [optional] 
**debtor** | [**DebituraWebExternalApiContractsV1CasesDebtorDto**](DebituraWebExternalApiContractsV1CasesDebtorDto.md) |  | [optional] 
**creditor_division_id** | **str** |  | [optional] 
**amount_to_recover** | **float** | The TOTAL amount to recover for this case. This represents the full principal amount across all invoices (if multiple invoices are bundled).              For multi-invoice cases with different ages, you can optionally provide age breakdown fields (AmountToRecoverOver12Months and AmountToRecoverOver24Months) to enable blended age-based pricing.              If age breakdown fields are omitted, age uplift will be calculated from the invoice due date (single-invoice pricing). | [optional] 
**amount_to_recover_over6_months** | **float** | OPTIONAL - MULTI-INVOICE AGE BUCKET PRICING (PRICING ZONE 180-DAY THRESHOLD)              The portion of AmountToRecover that is more than 6 months (180 days) overdue. This includes amounts that are 12+ and 24+ months overdue.              This field is optional and can only be provided alongside AmountToRecoverOver12Months and AmountToRecoverOver24Months. It enables precise pricing tier selection based on the 180-day threshold. When omitted, the system falls back to deriving the threshold from AmountToRecoverOver12Months.              Validation rules: - Must be ≤ AmountToRecover - Must be ≥ AmountToRecoverOver12Months | [optional] 
**amount_to_recover_over12_months** | **float** | OPTIONAL - MULTI-INVOICE AGE BUCKET PRICING              The portion of AmountToRecover that is more than 12 months overdue. This includes amounts that are 24+ months overdue.              If provided, AmountToRecoverOver24Months must also be provided. Both fields must be provided together or both omitted.              Used to calculate blended age uplift for multi-invoice cases: - Amount under 12 months &#x3D; AmountToRecover - AmountToRecoverOver12Months - Amount 12-24 months &#x3D; AmountToRecoverOver12Months - AmountToRecoverOver24Months - Amount over 24 months &#x3D; AmountToRecoverOver24Months              Blended uplift formula: ((A12-A24)×10 + A24×20) / AmountToRecover where A12 &#x3D; AmountToRecoverOver12Months, A24 &#x3D; AmountToRecoverOver24Months              Validation rules: - Must be ≤ AmountToRecover - Must be ≥ AmountToRecoverOver24Months | [optional] 
**amount_to_recover_over24_months** | **float** | OPTIONAL - MULTI-INVOICE AGE BUCKET PRICING              The portion of AmountToRecover that is more than 24 months overdue.              If provided, AmountToRecoverOver12Months must also be provided. Both fields must be provided together or both omitted.              Used to calculate blended age uplift for multi-invoice cases. See AmountToRecoverOver12Months for full details on the calculation.              Validation rules: - Must be ≤ AmountToRecoverOver12Months - Must be ≤ AmountToRecover | [optional] 
**skip_debitura_verification** | **bool** | This skips the &#39;Pending verification&#39; for Debitura and puts case straight to partner | [optional] 
**skip_creation_emails** | **bool** | Deprecated — this field is accepted for backwards compatibility but is ignored server-side. Creation emails are always suppressed; the hourly CasesStarted digest is the single notification channel for all entry points. | [optional] 
**allow_pending_contracts** | **bool** | When true, cases with unsigned contracts (SDCA/POA) are accepted in &#39;PendingContractSigning&#39; status instead of being rejected with 422. The case transitions automatically once contracts are signed. Default: false (unsigned contracts return 422). | [optional] 
**is_test** | **bool** | When true, creates a test case that IS persisted to the database but marked as test data. Test cases are excluded from production metrics and can be easily filtered or deleted. Use this for integration testing and development. | [optional] 
**tag** | **str** | Optional tag for scoped test data grouping (e.g. \&quot;suite-run-{uuid}\&quot;). Use this to group test cases created by a single CI pipeline run so they can be bulk-deleted via DELETE /test/cases?tag&#x3D;{tag} without affecting parallel runs. Only meaningful when IsTest is true. Max 100 characters. | [optional] 
**collection_partner_id** | **str** | Optional: Specify a collection partner ID to handle this case. When provided, this partner will be used regardless of lead agent matching rules. The partner must be active and have coverage for the debtor&#39;s jurisdiction. | [optional] 
**assigned_user_email** | **str** | Optional: Email address of the creditor team member to assign as the case owner. When provided, email notifications for this case will be sent only to this user instead of all team members. Must correspond to an active member of your team. | [optional] 
**return_url** | **str** | Optional: URL the creditor user should land on after completing any pending signing chain (SDCA upgrade / PoA / JPA / KYC) on the Debitura Creditors app. Embedded, URL-encoded, into &#x60;BusinessErrorResponseApiDTO.SigningHandoff.CombinedSigningUrl&#x60; (on 422 with pending signings) and &#x60;InvoiceDto.SigningHandoff.CombinedSigningUrl&#x60; (on 200 when &#x60;AllowPendingContracts&#x3D;true&#x60; with signings remaining).              Must be an absolute http(s) URL. Values that fail validation (relative URLs, non-http schemes, header-injection characters) are silently dropped — the combined URL is still emitted but without the returnUrl query parameter, and the Creditors app falls back to its own safe in-app default landing.              Additive. Existing integrations that omit this field see the same behaviour as before. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_requests_create_collection_case_request_api_view_model import DebituraWebExternalApiContractsV1CasesRequestsCreateCollectionCaseRequestApiViewModel

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesRequestsCreateCollectionCaseRequestApiViewModel from a JSON string
debitura_web_external_api_contracts_v1_cases_requests_create_collection_case_request_api_view_model_instance = DebituraWebExternalApiContractsV1CasesRequestsCreateCollectionCaseRequestApiViewModel.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesRequestsCreateCollectionCaseRequestApiViewModel.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_requests_create_collection_case_request_api_view_model_dict = debitura_web_external_api_contracts_v1_cases_requests_create_collection_case_request_api_view_model_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesRequestsCreateCollectionCaseRequestApiViewModel from a dict
debitura_web_external_api_contracts_v1_cases_requests_create_collection_case_request_api_view_model_from_dict = DebituraWebExternalApiContractsV1CasesRequestsCreateCollectionCaseRequestApiViewModel.from_dict(debitura_web_external_api_contracts_v1_cases_requests_create_collection_case_request_api_view_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


