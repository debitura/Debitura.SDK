# DebituraWebExternalApiContractsV1UsersUserRelationDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**date_created** | **datetime** |  | [optional] 
**date_updated** | **datetime** |  | [optional] 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**email** | **str** |  | 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_users_user_relation_dto import DebituraWebExternalApiContractsV1UsersUserRelationDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1UsersUserRelationDto from a JSON string
debitura_web_external_api_contracts_v1_users_user_relation_dto_instance = DebituraWebExternalApiContractsV1UsersUserRelationDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1UsersUserRelationDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_users_user_relation_dto_dict = debitura_web_external_api_contracts_v1_users_user_relation_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1UsersUserRelationDto from a dict
debitura_web_external_api_contracts_v1_users_user_relation_dto_from_dict = DebituraWebExternalApiContractsV1UsersUserRelationDto.from_dict(debitura_web_external_api_contracts_v1_users_user_relation_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


