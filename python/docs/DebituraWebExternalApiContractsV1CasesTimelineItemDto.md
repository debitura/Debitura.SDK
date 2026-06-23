# DebituraWebExternalApiContractsV1CasesTimelineItemDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **datetime** |  | [optional] 
**type** | **str** |  | 
**title** | **str** |  | 
**description** | **str** |  | 
**actor** | [**DebituraWebExternalApiContractsV1CasesTimelineActorDto**](DebituraWebExternalApiContractsV1CasesTimelineActorDto.md) |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_timeline_item_dto import DebituraWebExternalApiContractsV1CasesTimelineItemDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesTimelineItemDto from a JSON string
debitura_web_external_api_contracts_v1_cases_timeline_item_dto_instance = DebituraWebExternalApiContractsV1CasesTimelineItemDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesTimelineItemDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_timeline_item_dto_dict = debitura_web_external_api_contracts_v1_cases_timeline_item_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesTimelineItemDto from a dict
debitura_web_external_api_contracts_v1_cases_timeline_item_dto_from_dict = DebituraWebExternalApiContractsV1CasesTimelineItemDto.from_dict(debitura_web_external_api_contracts_v1_cases_timeline_item_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


