# DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityResponseApiDTO

Response for case eligibility check - returns exact partner + PoA status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_eligible** | **bool** | Whether a collection partner is available for this case | [optional] 
**jurisdiction** | [**DebituraWebExternalCustomerAPIModelsCoveragesJurisdictionInfoApiDTO**](DebituraWebExternalCustomerAPIModelsCoveragesJurisdictionInfoApiDTO.md) |  | [optional] 
**partner** | [**DebituraWebExternalCustomerAPIModelsCoveragesPartnerInfoApiDTO**](DebituraWebExternalCustomerAPIModelsCoveragesPartnerInfoApiDTO.md) |  | [optional] 
**power_of_attorney_status** | [**DebituraWebExternalCustomerAPIModelsCoveragesPowerOfAttorneyStatusApiDTO**](DebituraWebExternalCustomerAPIModelsCoveragesPowerOfAttorneyStatusApiDTO.md) |  | [optional] 
**error_message** | **str** | Error message if IsEligible &#x3D; false. Branch on Debitura.Web.ExternalCustomerAPI.Models.Coverages.CaseEligibilityResponseApiDTO.IneligibilityReasonCode rather than on this text, which may be reworded. | [optional] 
**ineligibility_reason_code** | **str** | Stable machine-readable reason, present whenever Debitura.Web.ExternalCustomerAPI.Models.Coverages.CaseEligibilityResponseApiDTO.ErrorMessage is. One of: NoGeographicCoverage, AmountBelowMinimum, AmountAboveMaximum, DebtorTypeNotCovered, NotCoveredByPartnerRules, ExcludedForClient, EligibilityUndetermined.  Only NoGeographicCoverage means we have no partner in the jurisdiction. AmountBelowMinimum means the geography IS covered and only the claim amount fell short. EligibilityUndetermined is a transient failure on our side, not a statement about coverage. | [optional] 
**applicable_minimum_amount** | **float** | The lowest claim amount accepted for this jurisdiction and debtor type, in the currency of the request. Present on ELIGIBLE responses too, so the floor can be shown without a second call. Null when no partner covering this case declares a minimum. | [optional] 
**applicable_minimum_currency_code** | **str** | ISO code that Debitura.Web.ExternalCustomerAPI.Models.Coverages.CaseEligibilityResponseApiDTO.ApplicableMinimumAmount is expressed in. | [optional] 
**amount_check_unavailable** | **bool** | True when a currency conversion needed to evaluate the claim amount was unavailable, so the amount-based part of this answer was NOT actually checked It can be true on an eligible answer: a partner matched only because amount conditions failed open while rates were down. Treat such an answer as provisional and retry rather than relying on the floor having been applied. | [optional] 

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


