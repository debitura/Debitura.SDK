# DebituraWebExternalCustomerAPIModelsCoveragesPowerOfAttorneyStatusApiDTO

Power of Attorney status (shared DTO for check-eligibility and coverage endpoints).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signed** | **bool** | Whether PoA has been signed for this partner | [optional] 
**requires_resigning** | **bool** | Whether PoA needs to be re-signed (new version available) | [optional] 
**invalidation_reason** | **str** | Why re-signing is required (if applicable) | [optional] 
**terms_url** | **str** | URL to download signed PoA document (null if not signed) | [optional] 
**solution_url** | **str** | URL to sign or re-sign PoA (null if fully signed and valid) | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_customer_api_models_coverages_power_of_attorney_status_api_dto import DebituraWebExternalCustomerAPIModelsCoveragesPowerOfAttorneyStatusApiDTO

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalCustomerAPIModelsCoveragesPowerOfAttorneyStatusApiDTO from a JSON string
debitura_web_external_customer_api_models_coverages_power_of_attorney_status_api_dto_instance = DebituraWebExternalCustomerAPIModelsCoveragesPowerOfAttorneyStatusApiDTO.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalCustomerAPIModelsCoveragesPowerOfAttorneyStatusApiDTO.to_json())

# convert the object into a dict
debitura_web_external_customer_api_models_coverages_power_of_attorney_status_api_dto_dict = debitura_web_external_customer_api_models_coverages_power_of_attorney_status_api_dto_instance.to_dict()
# create an instance of DebituraWebExternalCustomerAPIModelsCoveragesPowerOfAttorneyStatusApiDTO from a dict
debitura_web_external_customer_api_models_coverages_power_of_attorney_status_api_dto_from_dict = DebituraWebExternalCustomerAPIModelsCoveragesPowerOfAttorneyStatusApiDTO.from_dict(debitura_web_external_customer_api_models_coverages_power_of_attorney_status_api_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


