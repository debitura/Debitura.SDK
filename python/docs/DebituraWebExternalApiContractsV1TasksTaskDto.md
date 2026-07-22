# DebituraWebExternalApiContractsV1TasksTaskDto

A creditor-facing action item (\"task\") — something the platform needs the client to do before a case can proceed (e.g. reply to a chat, sign a contract, assign a bank account).              Every task carries a Debitura.Web.ExternalApi.Contracts.V1.Tasks.TaskDto.SolutionUrl — an absolute link identical to the one used inside the Creditor app — so a human can resolve any task in one click, even task types that are not yet directly API-actionable. Tasks that ARE directly API-actionable additionally carry a non-null Debitura.Web.ExternalApi.Contracts.V1.Tasks.TaskDto.Action pointing at the exact API call that resolves them.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The task&#39;s unique ID. | [optional] 
**type** | **str** | Stable string code for the task type (e.g. &#x60;\&quot;ReplyToChat\&quot;&#x60;). This is the public, additive-safe contract — it does NOT track the internal integer enum used in storage. | [optional] 
**type_label** | **str** | Human-readable label for Debitura.Web.ExternalApi.Contracts.V1.Tasks.TaskDto.Type (e.g. \&quot;Reply to chat\&quot;). | [optional] 
**title** | **str** | Short task title, as shown in the Creditor app. | [optional] 
**description** | **str** | Optional longer description of what the task requires. | [optional] 
**status** | **str** | Either &#x60;\&quot;Open\&quot;&#x60; or &#x60;\&quot;Solved\&quot;&#x60;. | [optional] 
**case_id** | **str** | The case (collection case / invoice) this task belongs to, when applicable. Null for account-level tasks not tied to a single case (e.g. SignContract, AssignBankAccount). | [optional] 
**case_reference** | **str** | Your reference for Debitura.Web.ExternalApi.Contracts.V1.Tasks.TaskDto.CaseId, if any. | [optional] 
**lead_id** | **str** | The lead this task belongs to (e.g. SelectQuoteWinner), if applicable. | [optional] 
**deadline** | **datetime** | When this task is due, if a deadline is set. | [optional] 
**date_created** | **datetime** | When the task was created. | [optional] 
**date_solved** | **datetime** | When the task was resolved, if it has been. | [optional] 
**solution_url** | **str** | Absolute URL — identical to the one the Creditor app itself links to — where a human can resolve this task. Always present, regardless of whether Debitura.Web.ExternalApi.Contracts.V1.Tasks.TaskDto.Action is populated. | [optional] 
**action** | [**DebituraWebExternalApiContractsV1TasksTaskActionDto**](DebituraWebExternalApiContractsV1TasksTaskActionDto.md) |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_tasks_task_dto import DebituraWebExternalApiContractsV1TasksTaskDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1TasksTaskDto from a JSON string
debitura_web_external_api_contracts_v1_tasks_task_dto_instance = DebituraWebExternalApiContractsV1TasksTaskDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1TasksTaskDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_tasks_task_dto_dict = debitura_web_external_api_contracts_v1_tasks_task_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1TasksTaskDto from a dict
debitura_web_external_api_contracts_v1_tasks_task_dto_from_dict = DebituraWebExternalApiContractsV1TasksTaskDto.from_dict(debitura_web_external_api_contracts_v1_tasks_task_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


