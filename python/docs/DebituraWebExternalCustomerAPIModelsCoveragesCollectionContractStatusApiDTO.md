# DebituraWebExternalCustomerAPIModelsCoveragesCollectionContractStatusApiDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signed** | **bool** |  | [optional] 
**requires_resigning** | **bool** |  | [optional] 
**invalidation_reason** | **str** |  | [optional] 
**terms_url** | **str** |  | [optional] 
**solution_url** | **str** |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_customer_api_models_coverages_collection_contract_status_api_dto import DebituraWebExternalCustomerAPIModelsCoveragesCollectionContractStatusApiDTO

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalCustomerAPIModelsCoveragesCollectionContractStatusApiDTO from a JSON string
debitura_web_external_customer_api_models_coverages_collection_contract_status_api_dto_instance = DebituraWebExternalCustomerAPIModelsCoveragesCollectionContractStatusApiDTO.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalCustomerAPIModelsCoveragesCollectionContractStatusApiDTO.to_json())

# convert the object into a dict
debitura_web_external_customer_api_models_coverages_collection_contract_status_api_dto_dict = debitura_web_external_customer_api_models_coverages_collection_contract_status_api_dto_instance.to_dict()
# create an instance of DebituraWebExternalCustomerAPIModelsCoveragesCollectionContractStatusApiDTO from a dict
debitura_web_external_customer_api_models_coverages_collection_contract_status_api_dto_from_dict = DebituraWebExternalCustomerAPIModelsCoveragesCollectionContractStatusApiDTO.from_dict(debitura_web_external_customer_api_models_coverages_collection_contract_status_api_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


