# DebituraWebExternalApiContractsV1CasesJurisdictionDto

Geographic jurisdiction information for the case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Internal jurisdiction identifier. | [optional] 
**name** | **str** | Display name of the jurisdiction (e.g., \&quot;Denmark\&quot;, \&quot;United States - California\&quot;). | [optional] 
**country_alpha2** | **str** | ISO 3166-1 alpha-2 country code. | [optional] 
**state_alpha2** | **str** | ISO 3166-2 state/region code (only for countries with state-level routing like the US). | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_jurisdiction_dto import DebituraWebExternalApiContractsV1CasesJurisdictionDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesJurisdictionDto from a JSON string
debitura_web_external_api_contracts_v1_cases_jurisdiction_dto_instance = DebituraWebExternalApiContractsV1CasesJurisdictionDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesJurisdictionDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_jurisdiction_dto_dict = debitura_web_external_api_contracts_v1_cases_jurisdiction_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesJurisdictionDto from a dict
debitura_web_external_api_contracts_v1_cases_jurisdiction_dto_from_dict = DebituraWebExternalApiContractsV1CasesJurisdictionDto.from_dict(debitura_web_external_api_contracts_v1_cases_jurisdiction_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


