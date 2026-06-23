# DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityResponseApiDTO

Response for case eligibility check - returns exact partner + PoA status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_eligible** | **bool** | Whether a collection partner is available for this case | [optional] 
**jurisdiction** | [**DebituraWebExternalCustomerAPIModelsCoveragesJurisdictionInfoApiDTO**](DebituraWebExternalCustomerAPIModelsCoveragesJurisdictionInfoApiDTO.md) |  | [optional] 
**partner** | [**DebituraWebExternalCustomerAPIModelsCoveragesPartnerInfoApiDTO**](DebituraWebExternalCustomerAPIModelsCoveragesPartnerInfoApiDTO.md) |  | [optional] 
**power_of_attorney_status** | [**DebituraWebExternalCustomerAPIModelsCoveragesPowerOfAttorneyStatusApiDTO**](DebituraWebExternalCustomerAPIModelsCoveragesPowerOfAttorneyStatusApiDTO.md) |  | [optional] 
**error_message** | **str** | Error message if IsEligible &#x3D; false | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_customer_api_models_coverages_case_eligibility_response_api_dto import DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityResponseApiDTO

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityResponseApiDTO from a JSON string
debitura_web_external_customer_api_models_coverages_case_eligibility_response_api_dto_instance = DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityResponseApiDTO.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityResponseApiDTO.to_json())

# convert the object into a dict
debitura_web_external_customer_api_models_coverages_case_eligibility_response_api_dto_dict = debitura_web_external_customer_api_models_coverages_case_eligibility_response_api_dto_instance.to_dict()
# create an instance of DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityResponseApiDTO from a dict
debitura_web_external_customer_api_models_coverages_case_eligibility_response_api_dto_from_dict = DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityResponseApiDTO.from_dict(debitura_web_external_customer_api_models_coverages_case_eligibility_response_api_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


