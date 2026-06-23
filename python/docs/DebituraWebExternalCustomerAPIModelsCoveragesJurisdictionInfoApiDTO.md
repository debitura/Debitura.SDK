# DebituraWebExternalCustomerAPIModelsCoveragesJurisdictionInfoApiDTO

Jurisdiction information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**country_alpha2** | **str** |  | [optional] 
**us_state_alpha2** | **str** |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_customer_api_models_coverages_jurisdiction_info_api_dto import DebituraWebExternalCustomerAPIModelsCoveragesJurisdictionInfoApiDTO

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalCustomerAPIModelsCoveragesJurisdictionInfoApiDTO from a JSON string
debitura_web_external_customer_api_models_coverages_jurisdiction_info_api_dto_instance = DebituraWebExternalCustomerAPIModelsCoveragesJurisdictionInfoApiDTO.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalCustomerAPIModelsCoveragesJurisdictionInfoApiDTO.to_json())

# convert the object into a dict
debitura_web_external_customer_api_models_coverages_jurisdiction_info_api_dto_dict = debitura_web_external_customer_api_models_coverages_jurisdiction_info_api_dto_instance.to_dict()
# create an instance of DebituraWebExternalCustomerAPIModelsCoveragesJurisdictionInfoApiDTO from a dict
debitura_web_external_customer_api_models_coverages_jurisdiction_info_api_dto_from_dict = DebituraWebExternalCustomerAPIModelsCoveragesJurisdictionInfoApiDTO.from_dict(debitura_web_external_customer_api_models_coverages_jurisdiction_info_api_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


