# DebituraWebExternalApiContractsV1CasesRequiredActionDto

An action required before the case can be submitted (e.g., signing a contract).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of action required. Common values: \&quot;MissingDebtCollectionContract\&quot;, \&quot;MissingPowerOfAttorney\&quot; | [optional] 
**message** | **str** | Human-readable description of what is required. | [optional] 
**solution_url** | **str** | URL where the user can complete this &lt;i&gt;specific&lt;/i&gt; action (e.g., contract signing page). The URL is context-aware: referral partner tokens get referral onboarding URLs, regular API keys get standard creditor app URLs.               Partners who want a &lt;b&gt;single URL&lt;/b&gt; that walks the user through every pending action in one chain — instead of forwarding one URL per &#x60;RequiredActionDto&#x60; — should use Debitura.Web.ExternalApi.Contracts.V1.Cases.PreviewResultDto.SigningHandoff&#39;s &#x60;CombinedSigningUrl&#x60;. The two are complementary: &#x60;SolutionUrl&#x60; is granular per-action; &#x60;CombinedSigningUrl&#x60; is the chain-walking alternative for signing-related actions. | [optional] 
**is_blocking** | **bool** | Whether this action must be completed before case submission. Currently all returned actions are blocking (true). | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_required_action_dto import DebituraWebExternalApiContractsV1CasesRequiredActionDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesRequiredActionDto from a JSON string
debitura_web_external_api_contracts_v1_cases_required_action_dto_instance = DebituraWebExternalApiContractsV1CasesRequiredActionDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesRequiredActionDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_required_action_dto_dict = debitura_web_external_api_contracts_v1_cases_required_action_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesRequiredActionDto from a dict
debitura_web_external_api_contracts_v1_cases_required_action_dto_from_dict = DebituraWebExternalApiContractsV1CasesRequiredActionDto.from_dict(debitura_web_external_api_contracts_v1_cases_required_action_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


