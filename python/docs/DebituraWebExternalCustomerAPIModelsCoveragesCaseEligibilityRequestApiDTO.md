# DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityRequestApiDTO

Request for checking case eligibility and getting partner/PoA status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_alpha2** | **str** | Debtor country (2-letter ISO code, e.g., \&quot;DK\&quot;, \&quot;US\&quot;, \&quot;DE\&quot;) | 
**state_alpha2** | **str** | US state code for US debtors (e.g., \&quot;CA\&quot;, \&quot;NY\&quot;). Required if CountryAlpha2 &#x3D; \&quot;US\&quot; | [optional] 
**debtor_type** | **str** | Debtor type: \&quot;Company\&quot; or \&quot;Private\&quot; | 
**amount** | **float** | Amount to recover in specified currency | 
**currency_code** | **str** | Currency code (e.g., \&quot;USD\&quot;, \&quot;EUR\&quot;, \&quot;DKK\&quot;) | 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_customer_api_models_coverages_case_eligibility_request_api_dto import DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityRequestApiDTO

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityRequestApiDTO from a JSON string
debitura_web_external_customer_api_models_coverages_case_eligibility_request_api_dto_instance = DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityRequestApiDTO.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityRequestApiDTO.to_json())

# convert the object into a dict
debitura_web_external_customer_api_models_coverages_case_eligibility_request_api_dto_dict = debitura_web_external_customer_api_models_coverages_case_eligibility_request_api_dto_instance.to_dict()
# create an instance of DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityRequestApiDTO from a dict
debitura_web_external_customer_api_models_coverages_case_eligibility_request_api_dto_from_dict = DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityRequestApiDTO.from_dict(debitura_web_external_customer_api_models_coverages_case_eligibility_request_api_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


