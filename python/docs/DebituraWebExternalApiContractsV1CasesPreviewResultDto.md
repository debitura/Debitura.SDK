# DebituraWebExternalApiContractsV1CasesPreviewResultDto

Detailed preview result for a case submission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_eligible** | **bool** | Whether the case is eligible for collection (i.e., a collection partner is available). If false, check IneligibilityReason for details. | [optional] 
**ineligibility_reason** | **str** | Explanation of why the case is not eligible (only present when IsEligible &#x3D; false). Branch on Debitura.Web.ExternalApi.Contracts.V1.Cases.PreviewResultDto.IneligibilityReasonCode rather than on this text, which may be reworded. | [optional] 
**ineligibility_reason_code** | **str** | Stable machine-readable reason, present whenever Debitura.Web.ExternalApi.Contracts.V1.Cases.PreviewResultDto.IneligibilityReason is One of: NoGeographicCoverage, AmountBelowMinimum, AmountAboveMaximum, DebtorTypeNotCovered, NotCoveredByPartnerRules, ExcludedForClient, EligibilityUndetermined.  Only NoGeographicCoverage means we have no partner in the jurisdiction. AmountBelowMinimum means the geography IS covered and only the claim amount fell short. EligibilityUndetermined is a transient failure on our side, not a statement about coverage — retry rather than telling the client their address is wrong. | [optional] 
**applicable_minimum_amount** | **float** | The lowest claim amount accepted for this jurisdiction and debtor type, in the currency of the request. Present on ELIGIBLE responses too, so the floor can be shown without a second call. Null when no partner covering this case declares a minimum. | [optional] 
**applicable_minimum_currency_code** | **str** | ISO code that Debitura.Web.ExternalApi.Contracts.V1.Cases.PreviewResultDto.ApplicableMinimumAmount is expressed in. | [optional] 
**amount_check_unavailable** | **bool** | True when a currency conversion needed to evaluate the claim amount was unavailable, so the amount-based part of this answer was NOT actually checked It can be true on an eligible answer: a partner matched only because amount conditions failed open while rates were down. Treat such an answer as provisional and retry rather than relying on the floor having been applied. | [optional] 
**partner_assignment** | [**DebituraWebExternalApiContractsV1CasesPartnerAssignmentDto**](DebituraWebExternalApiContractsV1CasesPartnerAssignmentDto.md) |  | [optional] 
**required_actions** | [**List[DebituraWebExternalApiContractsV1CasesRequiredActionDto]**](DebituraWebExternalApiContractsV1CasesRequiredActionDto.md) | List of actions required before the case can be submitted (e.g., sign contracts). Empty if no actions are required. Each action includes a solution URL to complete the requirement. | [optional] 
**jurisdiction** | [**DebituraWebExternalApiContractsV1CasesJurisdictionDto**](DebituraWebExternalApiContractsV1CasesJurisdictionDto.md) |  | [optional] 
**pricing_preview** | [**DebituraWebExternalApiContractsV1CasesPricingPreviewDto**](DebituraWebExternalApiContractsV1CasesPricingPreviewDto.md) |  | [optional] 
**requires_kyc_verification** | **bool** | Whether the resolved collection partner requires KYC verification before cases can be submitted. When true, the creditor must complete KYC verification before case creation will succeed. | [optional] 
**has_kyc_on_file** | **bool** | Whether the creditor already has KYC verification on file with Debitura. When RequiresKycVerification is true and HasKycOnFile is false, a MissingKycVerification required action will be present in the RequiredActions list. | [optional] 
**signing_handoff** | [**DebituraWebExternalApiContractsV1CasesSigningHandoffDto**](DebituraWebExternalApiContractsV1CasesSigningHandoffDto.md) |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_preview_result_dto import DebituraWebExternalApiContractsV1CasesPreviewResultDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesPreviewResultDto from a JSON string
debitura_web_external_api_contracts_v1_cases_preview_result_dto_instance = DebituraWebExternalApiContractsV1CasesPreviewResultDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesPreviewResultDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_preview_result_dto_dict = debitura_web_external_api_contracts_v1_cases_preview_result_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesPreviewResultDto from a dict
debitura_web_external_api_contracts_v1_cases_preview_result_dto_from_dict = DebituraWebExternalApiContractsV1CasesPreviewResultDto.from_dict(debitura_web_external_api_contracts_v1_cases_preview_result_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


