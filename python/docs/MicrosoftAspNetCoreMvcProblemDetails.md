# MicrosoftAspNetCoreMvcProblemDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**status** | **int** |  | [optional] 
**detail** | **str** |  | [optional] 
**instance** | **str** |  | [optional] 

## Example

```python
from debitura_debt_collection.models.microsoft_asp_net_core_mvc_problem_details import MicrosoftAspNetCoreMvcProblemDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MicrosoftAspNetCoreMvcProblemDetails from a JSON string
microsoft_asp_net_core_mvc_problem_details_instance = MicrosoftAspNetCoreMvcProblemDetails.from_json(json)
# print the JSON string representation of the object
print(MicrosoftAspNetCoreMvcProblemDetails.to_json())

# convert the object into a dict
microsoft_asp_net_core_mvc_problem_details_dict = microsoft_asp_net_core_mvc_problem_details_instance.to_dict()
# create an instance of MicrosoftAspNetCoreMvcProblemDetails from a dict
microsoft_asp_net_core_mvc_problem_details_from_dict = MicrosoftAspNetCoreMvcProblemDetails.from_dict(microsoft_asp_net_core_mvc_problem_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


