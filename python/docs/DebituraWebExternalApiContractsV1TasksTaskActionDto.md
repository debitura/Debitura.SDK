# DebituraWebExternalApiContractsV1TasksTaskActionDto

A machine-readable hint pointing at the existing API call that resolves a task, e.g. `{ \"method\": \"POST\", \"path\": \"/cases/{caseId}/chats\" }` for a chat-driven task.              Path uses the same `{param}` placeholder style as this API's own documented routes — substitute in the real IDs before calling.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | HTTP method to use, e.g. &#x60;\&quot;POST\&quot;&#x60;. | [optional] 
**path** | **str** | Path template for the resolving call, e.g. &#x60;\&quot;/cases/{caseId}/chats\&quot;&#x60;. Relative to the API&#39;s base URL. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_tasks_task_action_dto import DebituraWebExternalApiContractsV1TasksTaskActionDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1TasksTaskActionDto from a JSON string
debitura_web_external_api_contracts_v1_tasks_task_action_dto_instance = DebituraWebExternalApiContractsV1TasksTaskActionDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1TasksTaskActionDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_tasks_task_action_dto_dict = debitura_web_external_api_contracts_v1_tasks_task_action_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1TasksTaskActionDto from a dict
debitura_web_external_api_contracts_v1_tasks_task_action_dto_from_dict = DebituraWebExternalApiContractsV1TasksTaskActionDto.from_dict(debitura_web_external_api_contracts_v1_tasks_task_action_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


