# DebituraWebExternalApiContractsV1CasesAssignedUserDto

Represents the creditor team member assigned to a case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The assigned user&#39;s email address. | [optional] 
**name** | **str** | The assigned user&#39;s full name. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_assigned_user_dto import DebituraWebExternalApiContractsV1CasesAssignedUserDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesAssignedUserDto from a JSON string
debitura_web_external_api_contracts_v1_cases_assigned_user_dto_instance = DebituraWebExternalApiContractsV1CasesAssignedUserDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesAssignedUserDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_assigned_user_dto_dict = debitura_web_external_api_contracts_v1_cases_assigned_user_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesAssignedUserDto from a dict
debitura_web_external_api_contracts_v1_cases_assigned_user_dto_from_dict = DebituraWebExternalApiContractsV1CasesAssignedUserDto.from_dict(debitura_web_external_api_contracts_v1_cases_assigned_user_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


