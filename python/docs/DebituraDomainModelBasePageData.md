# DebituraDomainModelBasePageData


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
from debitura_debt_collection.models.debitura_domain_model_base_page_data import DebituraDomainModelBasePageData

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraDomainModelBasePageData from a JSON string
debitura_domain_model_base_page_data_instance = DebituraDomainModelBasePageData.from_json(json)
# print the JSON string representation of the object
print(DebituraDomainModelBasePageData.to_json())

# convert the object into a dict
debitura_domain_model_base_page_data_dict = debitura_domain_model_base_page_data_instance.to_dict()
# create an instance of DebituraDomainModelBasePageData from a dict
debitura_domain_model_base_page_data_from_dict = DebituraDomainModelBasePageData.from_dict(debitura_domain_model_base_page_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


