# DebituraWebExternalApiContractsV1CasesPricingPreviewDto

Estimated pricing for the case, including age-based surcharges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_success_fee_percentage** | **float** | Base success fee percentage before age surcharges. This is the standard rate for cases under 12 months overdue. | [optional] 
**age_surcharge_percentage** | **float** | Additional percentage points added for aged invoices. Calculated based on invoice age: - 12-24 months overdue: +8 percentage points - 24+ months overdue: +15 percentage points - Multi-invoice with mixed ages: blended rate (0-15 percentage points) | [optional] 
**total_success_fee_percentage** | **float** | Total success fee percentage (base + age surcharge). This is the percentage of the recovered amount that will be charged as a success fee. | [optional] 
**currency_code** | **str** | ISO 4217 currency code for the case. | [optional] 
**pricing_source** | **str** | Which pricing rule determined the fee. Possible values: \&quot;Standard agreement\&quot;, \&quot;Creditor custom pricing\&quot;, \&quot;Managing partner custom pricing\&quot;, \&quot;Jurisdiction custom pricing\&quot;, \&quot;Partner custom pricing\&quot;, \&quot;Accepted quote\&quot;. | [optional] 
**pricing_source_description** | **str** | Human-readable explanation of why this pricing was applied. Example: \&quot;9.5% success fee — BD Legal custom collection rates (EU zone, $1,000–$7,999 tier)\&quot; | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_pricing_preview_dto import DebituraWebExternalApiContractsV1CasesPricingPreviewDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesPricingPreviewDto from a JSON string
debitura_web_external_api_contracts_v1_cases_pricing_preview_dto_instance = DebituraWebExternalApiContractsV1CasesPricingPreviewDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesPricingPreviewDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_pricing_preview_dto_dict = debitura_web_external_api_contracts_v1_cases_pricing_preview_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesPricingPreviewDto from a dict
debitura_web_external_api_contracts_v1_cases_pricing_preview_dto_from_dict = DebituraWebExternalApiContractsV1CasesPricingPreviewDto.from_dict(debitura_web_external_api_contracts_v1_cases_pricing_preview_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


