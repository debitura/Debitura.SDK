# DebituraWebExternalApiContractsV1ChatsChatDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**date_created** | **datetime** |  | [optional] 
**date_updated** | **datetime** |  | [optional] 
**role** | [**DebituraDomainModelCommunicationCenterChatsChatRole**](DebituraDomainModelCommunicationCenterChatsChatRole.md) |  | [optional] 
**role_label** | **str** | Human-readable label for the role (e.g., \&quot;Partner\&quot;, \&quot;Creditor\&quot;, \&quot;Managed by partner\&quot;). Companion to Debitura.Web.ExternalApi.Contracts.V1.Chats.ChatDto.Role — always present when Role is set. | [optional] 
**message** | **str** |  | [optional] 
**is_seen** | **bool** |  | [optional] 
**user** | [**DebituraWebExternalApiContractsV1UsersUserRelationDto**](DebituraWebExternalApiContractsV1UsersUserRelationDto.md) |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_chats_chat_dto import DebituraWebExternalApiContractsV1ChatsChatDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1ChatsChatDto from a JSON string
debitura_web_external_api_contracts_v1_chats_chat_dto_instance = DebituraWebExternalApiContractsV1ChatsChatDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1ChatsChatDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_chats_chat_dto_dict = debitura_web_external_api_contracts_v1_chats_chat_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1ChatsChatDto from a dict
debitura_web_external_api_contracts_v1_chats_chat_dto_from_dict = DebituraWebExternalApiContractsV1ChatsChatDto.from_dict(debitura_web_external_api_contracts_v1_chats_chat_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


