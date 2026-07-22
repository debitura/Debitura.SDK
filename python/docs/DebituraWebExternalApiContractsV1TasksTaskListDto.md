# DebituraWebExternalApiContractsV1TasksTaskListDto

Paged list of tasks, returned by `GET /tasks`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | [**DebituraDomainModelBasePageData**](DebituraDomainModelBasePageData.md) |  | 
**tasks** | [**List[DebituraWebExternalApiContractsV1TasksTaskDto]**](DebituraWebExternalApiContractsV1TasksTaskDto.md) |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_tasks_task_list_dto import DebituraWebExternalApiContractsV1TasksTaskListDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1TasksTaskListDto from a JSON string
debitura_web_external_api_contracts_v1_tasks_task_list_dto_instance = DebituraWebExternalApiContractsV1TasksTaskListDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1TasksTaskListDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_tasks_task_list_dto_dict = debitura_web_external_api_contracts_v1_tasks_task_list_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1TasksTaskListDto from a dict
debitura_web_external_api_contracts_v1_tasks_task_list_dto_from_dict = DebituraWebExternalApiContractsV1TasksTaskListDto.from_dict(debitura_web_external_api_contracts_v1_tasks_task_list_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


