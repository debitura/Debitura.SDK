# DebituraWebExternalApiContractsV1CasesBusinessErrorApiDTO

Represents a business error in the API response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of business error (e.g., \&quot;MissingDebtCollectionContract\&quot;, \&quot;MissingPowerOfAttorney\&quot;, \&quot;NoPartnerAvailable\&quot;). | [optional] 
**message** | **str** | A human-readable description of the error. | [optional] 
**solution_url** | **str** | A URL where the user can resolve this &lt;i&gt;specific&lt;/i&gt; error (e.g., sign a contract).               Partners who want a &lt;b&gt;single URL&lt;/b&gt; that walks the user through every pending signing in one chain — instead of forwarding one URL per &#x60;BusinessErrorApiDTO&#x60; — should use Debitura.Web.ExternalApi.Contracts.V1.Cases.BusinessErrorResponseApiDTO.SigningHandoff&#39;s &#x60;CombinedSigningUrl&#x60;. The two are complementary: &#x60;SolutionUrl&#x60; is granular per-error; &#x60;CombinedSigningUrl&#x60; is the chain-walking alternative for signing-related errors. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_business_error_api_dto import DebituraWebExternalApiContractsV1CasesBusinessErrorApiDTO

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesBusinessErrorApiDTO from a JSON string
debitura_web_external_api_contracts_v1_cases_business_error_api_dto_instance = DebituraWebExternalApiContractsV1CasesBusinessErrorApiDTO.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesBusinessErrorApiDTO.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_business_error_api_dto_dict = debitura_web_external_api_contracts_v1_cases_business_error_api_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesBusinessErrorApiDTO from a dict
debitura_web_external_api_contracts_v1_cases_business_error_api_dto_from_dict = DebituraWebExternalApiContractsV1CasesBusinessErrorApiDTO.from_dict(debitura_web_external_api_contracts_v1_cases_business_error_api_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


