# DebituraWebExternalApiContractsV1FilesCaseFileDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**date_created** | **datetime** |  | [optional] 
**date_updated** | **datetime** |  | [optional] 
**case_id** | **str** |  | [optional] 
**entity_type** | **str** |  | [optional] 
**entity_id** | **str** |  | [optional] 
**file_name** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**document_type** | **str** |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_files_case_file_dto import DebituraWebExternalApiContractsV1FilesCaseFileDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1FilesCaseFileDto from a JSON string
debitura_web_external_api_contracts_v1_files_case_file_dto_instance = DebituraWebExternalApiContractsV1FilesCaseFileDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1FilesCaseFileDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_files_case_file_dto_dict = debitura_web_external_api_contracts_v1_files_case_file_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1FilesCaseFileDto from a dict
debitura_web_external_api_contracts_v1_files_case_file_dto_from_dict = DebituraWebExternalApiContractsV1FilesCaseFileDto.from_dict(debitura_web_external_api_contracts_v1_files_case_file_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


