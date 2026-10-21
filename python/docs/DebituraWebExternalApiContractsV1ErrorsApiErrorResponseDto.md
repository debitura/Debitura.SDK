# DebituraWebExternalApiContractsV1ErrorsApiErrorResponseDto

Generic structured error response for API endpoints.              The BusinessErrors array is the preferred format. The older fields (Error, Message etc.) are kept for backward compatibility.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Short human-readable error label (legacy field — preserved for backward compatibility). | [optional] 
**message** | **str** | Human-readable error description (legacy field — preserved for backward compatibility). | [optional] 
**business_errors** | [**List[DebituraWebExternalApiContractsV1CasesBusinessErrorApiDTO]**](DebituraWebExternalApiContractsV1CasesBusinessErrorApiDTO.md) | Canonical structured error array. Consumers should migrate to reading this field. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_errors_api_error_response_dto import DebituraWebExternalApiContractsV1ErrorsApiErrorResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1ErrorsApiErrorResponseDto from a JSON string
debitura_web_external_api_contracts_v1_errors_api_error_response_dto_instance = DebituraWebExternalApiContractsV1ErrorsApiErrorResponseDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1ErrorsApiErrorResponseDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_errors_api_error_response_dto_dict = debitura_web_external_api_contracts_v1_errors_api_error_response_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1ErrorsApiErrorResponseDto from a dict
debitura_web_external_api_contracts_v1_errors_api_error_response_dto_from_dict = DebituraWebExternalApiContractsV1ErrorsApiErrorResponseDto.from_dict(debitura_web_external_api_contracts_v1_errors_api_error_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


