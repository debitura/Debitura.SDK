# DebituraWebExternalApiContractsV1CasesCreditorDivisionDto

Creditor division information for external partner APIs. Represents a specific division or department within a creditor organization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the division | [optional] 
**name** | **str** | Name of the division | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_creditor_division_dto import DebituraWebExternalApiContractsV1CasesCreditorDivisionDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesCreditorDivisionDto from a JSON string
debitura_web_external_api_contracts_v1_cases_creditor_division_dto_instance = DebituraWebExternalApiContractsV1CasesCreditorDivisionDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesCreditorDivisionDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_creditor_division_dto_dict = debitura_web_external_api_contracts_v1_cases_creditor_division_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesCreditorDivisionDto from a dict
debitura_web_external_api_contracts_v1_cases_creditor_division_dto_from_dict = DebituraWebExternalApiContractsV1CasesCreditorDivisionDto.from_dict(debitura_web_external_api_contracts_v1_cases_creditor_division_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


