# DebituraWebExternalApiContractsV1ChatsSendChatRequest

Request to send a chat message on a case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The chat message content to send. | 
**user_id** | **str** | ID of the team member sending this message. Must be a valid user ID from GET /users belonging to your team. Deprecated: use UserEmail instead. At least one of UserId or UserEmail must be provided. | [optional] 
**user_email** | **str** | Email address of the team member sending this message. Must correspond to an active member of your team (same account as the API key). Preferred over UserId. At least one of UserEmail or UserId must be provided. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_chats_send_chat_request import DebituraWebExternalApiContractsV1ChatsSendChatRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1ChatsSendChatRequest from a JSON string
debitura_web_external_api_contracts_v1_chats_send_chat_request_instance = DebituraWebExternalApiContractsV1ChatsSendChatRequest.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1ChatsSendChatRequest.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_chats_send_chat_request_dict = debitura_web_external_api_contracts_v1_chats_send_chat_request_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1ChatsSendChatRequest from a dict
debitura_web_external_api_contracts_v1_chats_send_chat_request_from_dict = DebituraWebExternalApiContractsV1ChatsSendChatRequest.from_dict(debitura_web_external_api_contracts_v1_chats_send_chat_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


