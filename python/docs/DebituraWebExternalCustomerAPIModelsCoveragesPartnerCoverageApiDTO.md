# DebituraWebExternalCustomerAPIModelsCoveragesPartnerCoverageApiDTO

Partner coverage details including conditions and PoA status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partner_id** | **str** |  | [optional] 
**partner_name** | **str** |  | [optional] 
**conditions** | **str** | Human-readable description of when this partner applies. Examples: \&quot;All cases\&quot;, \&quot;B2B cases only\&quot;, \&quot;B2C cases ≥ €1000\&quot; | [optional] 
**signed** | **bool** | Whether Power of Attorney has been signed for this partner | [optional] 
**terms_url** | **str** | URL to download signed PoA document (null if not signed) | [optional] 
**solution_url** | **str** | URL to sign or re-sign PoA (null if fully signed and valid) | [optional] 
**requires_resigning** | **bool** | Whether PoA needs to be re-signed (new version available) | [optional] 
**invalidation_reason** | **str** | Why re-signing is required (if applicable) | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_customer_api_models_coverages_partner_coverage_api_dto import DebituraWebExternalCustomerAPIModelsCoveragesPartnerCoverageApiDTO

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalCustomerAPIModelsCoveragesPartnerCoverageApiDTO from a JSON string
debitura_web_external_customer_api_models_coverages_partner_coverage_api_dto_instance = DebituraWebExternalCustomerAPIModelsCoveragesPartnerCoverageApiDTO.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalCustomerAPIModelsCoveragesPartnerCoverageApiDTO.to_json())

# convert the object into a dict
debitura_web_external_customer_api_models_coverages_partner_coverage_api_dto_dict = debitura_web_external_customer_api_models_coverages_partner_coverage_api_dto_instance.to_dict()
# create an instance of DebituraWebExternalCustomerAPIModelsCoveragesPartnerCoverageApiDTO from a dict
debitura_web_external_customer_api_models_coverages_partner_coverage_api_dto_from_dict = DebituraWebExternalCustomerAPIModelsCoveragesPartnerCoverageApiDTO.from_dict(debitura_web_external_customer_api_models_coverages_partner_coverage_api_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


