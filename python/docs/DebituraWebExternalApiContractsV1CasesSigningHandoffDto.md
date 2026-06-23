# DebituraWebExternalApiContractsV1CasesSigningHandoffDto

Partner-facing handoff metadata for a creditor's pending signing chain. Returned on POST /cases responses (422 with pending-signing errors, or 200 with AllowPendingContracts=true when signings remain).              Designed as an envelope so future fields (expiration, suggested email copy, etc.) can be added without polluting the parent DTO.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**combined_signing_url** | **str** | Single signing entry URL that walks the creditor through every pending step (SDCA upgrade → PoA → JPA → KYC) on the Creditors app and returns to the partner-supplied returnUrl when done. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_signing_handoff_dto import DebituraWebExternalApiContractsV1CasesSigningHandoffDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesSigningHandoffDto from a JSON string
debitura_web_external_api_contracts_v1_cases_signing_handoff_dto_instance = DebituraWebExternalApiContractsV1CasesSigningHandoffDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesSigningHandoffDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_signing_handoff_dto_dict = debitura_web_external_api_contracts_v1_cases_signing_handoff_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesSigningHandoffDto from a dict
debitura_web_external_api_contracts_v1_cases_signing_handoff_dto_from_dict = DebituraWebExternalApiContractsV1CasesSigningHandoffDto.from_dict(debitura_web_external_api_contracts_v1_cases_signing_handoff_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


