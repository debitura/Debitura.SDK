# DebituraWebExternalApiContractsV1CasesAdmissionMinimumDto

Safe, additive metadata for a monetary admission refusal. Recheck preview after changing the claim.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rule** | **str** | PlatformMinimum (configured client/partner/platform floor) or UnitedStatesMinimum. | [optional] 
**amount_usd** | **float** | The minimum principal in USD. | [optional] 
**amount** | **float** | The minimum principal in the request currency, rounded upward to two decimals. | [optional] 
**currency_code** | **str** | ISO currency code of Amount. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_admission_minimum_dto import DebituraWebExternalApiContractsV1CasesAdmissionMinimumDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesAdmissionMinimumDto from a JSON string
debitura_web_external_api_contracts_v1_cases_admission_minimum_dto_instance = DebituraWebExternalApiContractsV1CasesAdmissionMinimumDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesAdmissionMinimumDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_admission_minimum_dto_dict = debitura_web_external_api_contracts_v1_cases_admission_minimum_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesAdmissionMinimumDto from a dict
debitura_web_external_api_contracts_v1_cases_admission_minimum_dto_from_dict = DebituraWebExternalApiContractsV1CasesAdmissionMinimumDto.from_dict(debitura_web_external_api_contracts_v1_cases_admission_minimum_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


