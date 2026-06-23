# DebituraWebExternalApiContractsV1CasesTimelineActorDto

Represents the actor (person or system) that performed a timeline action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of actor. One of: \&quot;System\&quot;, \&quot;Creditor user\&quot;, \&quot;Partner user\&quot;. | 
**name** | **str** | Display name of the actor, if available. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_timeline_actor_dto import DebituraWebExternalApiContractsV1CasesTimelineActorDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesTimelineActorDto from a JSON string
debitura_web_external_api_contracts_v1_cases_timeline_actor_dto_instance = DebituraWebExternalApiContractsV1CasesTimelineActorDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesTimelineActorDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_timeline_actor_dto_dict = debitura_web_external_api_contracts_v1_cases_timeline_actor_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesTimelineActorDto from a dict
debitura_web_external_api_contracts_v1_cases_timeline_actor_dto_from_dict = DebituraWebExternalApiContractsV1CasesTimelineActorDto.from_dict(debitura_web_external_api_contracts_v1_cases_timeline_actor_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


