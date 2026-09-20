# DebituraWebExternalApiContractsV1PageData

Stable v1 pagination metadata shared by public list responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_results** | **int** |  | [optional] 
**page_size** | **int** |  | [optional] 
**current_page** | **int** |  | [optional] 
**response_count** | **int** |  | [optional] 
**total_pages** | **int** |  | [optional] [readonly] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_page_data import DebituraWebExternalApiContractsV1PageData

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1PageData from a JSON string
debitura_web_external_api_contracts_v1_page_data_instance = DebituraWebExternalApiContractsV1PageData.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1PageData.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_page_data_dict = debitura_web_external_api_contracts_v1_page_data_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1PageData from a dict
debitura_web_external_api_contracts_v1_page_data_from_dict = DebituraWebExternalApiContractsV1PageData.from_dict(debitura_web_external_api_contracts_v1_page_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


