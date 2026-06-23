# DebituraWebExternalApiContractsV1UsersUserListDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | [**DebituraDomainModelBasePageData**](DebituraDomainModelBasePageData.md) |  | 
**users** | [**List[DebituraWebExternalApiContractsV1UsersCollectionPartnerUserDto]**](DebituraWebExternalApiContractsV1UsersCollectionPartnerUserDto.md) |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_users_user_list_dto import DebituraWebExternalApiContractsV1UsersUserListDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1UsersUserListDto from a JSON string
debitura_web_external_api_contracts_v1_users_user_list_dto_instance = DebituraWebExternalApiContractsV1UsersUserListDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1UsersUserListDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_users_user_list_dto_dict = debitura_web_external_api_contracts_v1_users_user_list_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1UsersUserListDto from a dict
debitura_web_external_api_contracts_v1_users_user_list_dto_from_dict = DebituraWebExternalApiContractsV1UsersUserListDto.from_dict(debitura_web_external_api_contracts_v1_users_user_list_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


