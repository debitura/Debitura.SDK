# DebituraWebExternalApiContractsV1UsersCollectionPartnerUserDto

A user belonging to the authenticated collection partner's team. Use the Debitura.Web.ExternalApi.Contracts.V1.Users.CollectionPartnerUserDto.Id as the `assignedUserId` when starting a case via POST /cases/{id}/start.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The user&#39;s unique ID. Use this as &#x60;assignedUserId&#x60; in POST /cases/{id}/start. | [optional] 
**name** | **str** | The user&#39;s full name. | [optional] 
**email** | **str** | The user&#39;s email address. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_users_collection_partner_user_dto import DebituraWebExternalApiContractsV1UsersCollectionPartnerUserDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1UsersCollectionPartnerUserDto from a JSON string
debitura_web_external_api_contracts_v1_users_collection_partner_user_dto_instance = DebituraWebExternalApiContractsV1UsersCollectionPartnerUserDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1UsersCollectionPartnerUserDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_users_collection_partner_user_dto_dict = debitura_web_external_api_contracts_v1_users_collection_partner_user_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1UsersCollectionPartnerUserDto from a dict
debitura_web_external_api_contracts_v1_users_collection_partner_user_dto_from_dict = DebituraWebExternalApiContractsV1UsersCollectionPartnerUserDto.from_dict(debitura_web_external_api_contracts_v1_users_collection_partner_user_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


