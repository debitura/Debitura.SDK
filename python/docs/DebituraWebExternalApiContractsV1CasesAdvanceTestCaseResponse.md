# DebituraWebExternalApiContractsV1CasesAdvanceTestCaseResponse

Response from POST /test/cases/{id}/advance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced** | **bool** | True if the case was advanced in this call; false if it was already at or past the target state (no-op). | [optional] 
**state** | **str** | The current state of the case after this call. One of: \&quot;Active\&quot;, \&quot;Closed:Paid\&quot;, \&quot;Closed:NoPayment\&quot;, \&quot;Closed\&quot; (for other close codes). | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_advance_test_case_response import DebituraWebExternalApiContractsV1CasesAdvanceTestCaseResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesAdvanceTestCaseResponse from a JSON string
debitura_web_external_api_contracts_v1_cases_advance_test_case_response_instance = DebituraWebExternalApiContractsV1CasesAdvanceTestCaseResponse.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesAdvanceTestCaseResponse.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_advance_test_case_response_dict = debitura_web_external_api_contracts_v1_cases_advance_test_case_response_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesAdvanceTestCaseResponse from a dict
debitura_web_external_api_contracts_v1_cases_advance_test_case_response_from_dict = DebituraWebExternalApiContractsV1CasesAdvanceTestCaseResponse.from_dict(debitura_web_external_api_contracts_v1_cases_advance_test_case_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


