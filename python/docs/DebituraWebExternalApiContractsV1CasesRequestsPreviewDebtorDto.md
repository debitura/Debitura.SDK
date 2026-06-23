# DebituraWebExternalApiContractsV1CasesRequestsPreviewDebtorDto

Simplified debtor information for case preview. Only includes the minimum fields required for partner routing and eligibility checking.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Debtor type. Valid values: \&quot;Company\&quot; or \&quot;Private\&quot; This affects partner selection as different partners may specialize in B2B vs B2C collection. | 
**country_alpha2** | **str** | Country code (ISO 3166-1 alpha-2 format, e.g., \&quot;DK\&quot;, \&quot;US\&quot;, \&quot;PL\&quot;) Used to determine jurisdiction and available collection partners. | 
**state_alpha2** | **str** | US state code (e.g., \&quot;CA\&quot;, \&quot;NY\&quot;) REQUIRED for United States cases only, as US partner coverage is state-specific. Optional for other countries. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_requests_preview_debtor_dto import DebituraWebExternalApiContractsV1CasesRequestsPreviewDebtorDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesRequestsPreviewDebtorDto from a JSON string
debitura_web_external_api_contracts_v1_cases_requests_preview_debtor_dto_instance = DebituraWebExternalApiContractsV1CasesRequestsPreviewDebtorDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesRequestsPreviewDebtorDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_requests_preview_debtor_dto_dict = debitura_web_external_api_contracts_v1_cases_requests_preview_debtor_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesRequestsPreviewDebtorDto from a dict
debitura_web_external_api_contracts_v1_cases_requests_preview_debtor_dto_from_dict = DebituraWebExternalApiContractsV1CasesRequestsPreviewDebtorDto.from_dict(debitura_web_external_api_contracts_v1_cases_requests_preview_debtor_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


