# DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO

Coverage information for a single jurisdiction. BREAKING CHANGE: Partners is now an array - may contain multiple partners with different conditions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jurisdiction** | **str** |  | [optional] 
**jurisdiction_id** | **int** |  | [optional] 
**country** | **str** |  | [optional] 
**country_id** | **int** |  | [optional] 
**country_alpha2** | **str** |  | [optional] 
**us_state_alpha2** | **str** |  | [optional] 
**partners** | [**List[DebituraWebExternalCustomerAPIModelsCoveragesPartnerCoverageApiDTO]**](DebituraWebExternalCustomerAPIModelsCoveragesPartnerCoverageApiDTO.md) | Collection partners available for this jurisdiction. May be empty if no partners are assigned. May contain multiple partners if different conditions apply (e.g., B2B vs B2C). | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_customer_api_models_coverages_coverage_item_api_dto import DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO from a JSON string
debitura_web_external_customer_api_models_coverages_coverage_item_api_dto_instance = DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO.to_json())

# convert the object into a dict
debitura_web_external_customer_api_models_coverages_coverage_item_api_dto_dict = debitura_web_external_customer_api_models_coverages_coverage_item_api_dto_instance.to_dict()
# create an instance of DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO from a dict
debitura_web_external_customer_api_models_coverages_coverage_item_api_dto_from_dict = DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO.from_dict(debitura_web_external_customer_api_models_coverages_coverage_item_api_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


