# DebituraWebExternalApiContractsV1CasesBusinessErrorResponseApiDTO

Response returned when business rule violations prevent case creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_errors** | [**List[DebituraWebExternalApiContractsV1CasesBusinessErrorApiDTO]**](DebituraWebExternalApiContractsV1CasesBusinessErrorApiDTO.md) | List of business errors that must be resolved before the case can be created. | [optional] 
**signing_handoff** | [**DebituraWebExternalApiContractsV1CasesSigningHandoffDto**](DebituraWebExternalApiContractsV1CasesSigningHandoffDto.md) |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_business_error_response_api_dto import DebituraWebExternalApiContractsV1CasesBusinessErrorResponseApiDTO

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesBusinessErrorResponseApiDTO from a JSON string
debitura_web_external_api_contracts_v1_cases_business_error_response_api_dto_instance = DebituraWebExternalApiContractsV1CasesBusinessErrorResponseApiDTO.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesBusinessErrorResponseApiDTO.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_business_error_response_api_dto_dict = debitura_web_external_api_contracts_v1_cases_business_error_response_api_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesBusinessErrorResponseApiDTO from a dict
debitura_web_external_api_contracts_v1_cases_business_error_response_api_dto_from_dict = DebituraWebExternalApiContractsV1CasesBusinessErrorResponseApiDTO.from_dict(debitura_web_external_api_contracts_v1_cases_business_error_response_api_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


