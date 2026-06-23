# DebituraWebExternalApiContractsV1CasesPreviewCaseResponseApiViewModel

Response from previewing a case, showing eligibility, partner assignment, required actions, and pricing estimates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**DebituraWebExternalApiContractsV1CasesPreviewResultDto**](DebituraWebExternalApiContractsV1CasesPreviewResultDto.md) |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_preview_case_response_api_view_model import DebituraWebExternalApiContractsV1CasesPreviewCaseResponseApiViewModel

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesPreviewCaseResponseApiViewModel from a JSON string
debitura_web_external_api_contracts_v1_cases_preview_case_response_api_view_model_instance = DebituraWebExternalApiContractsV1CasesPreviewCaseResponseApiViewModel.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesPreviewCaseResponseApiViewModel.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_preview_case_response_api_view_model_dict = debitura_web_external_api_contracts_v1_cases_preview_case_response_api_view_model_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesPreviewCaseResponseApiViewModel from a dict
debitura_web_external_api_contracts_v1_cases_preview_case_response_api_view_model_from_dict = DebituraWebExternalApiContractsV1CasesPreviewCaseResponseApiViewModel.from_dict(debitura_web_external_api_contracts_v1_cases_preview_case_response_api_view_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


