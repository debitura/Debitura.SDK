# DebituraWebExternalApiContractsV1CasesRequestsAdvanceTestCaseRequest

Request to advance a test case to a known lifecycle state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | **str** | The target state to advance the case to. Valid values: \&quot;Active\&quot;, \&quot;Closed:Paid\&quot;, \&quot;Closed:NoPayment\&quot; | 
**amount** | **float** | Payment amount (required when To is \&quot;Closed:Paid\&quot;). Must be a positive value in the case currency. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_requests_advance_test_case_request import DebituraWebExternalApiContractsV1CasesRequestsAdvanceTestCaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesRequestsAdvanceTestCaseRequest from a JSON string
debitura_web_external_api_contracts_v1_cases_requests_advance_test_case_request_instance = DebituraWebExternalApiContractsV1CasesRequestsAdvanceTestCaseRequest.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesRequestsAdvanceTestCaseRequest.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_requests_advance_test_case_request_dict = debitura_web_external_api_contracts_v1_cases_requests_advance_test_case_request_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesRequestsAdvanceTestCaseRequest from a dict
debitura_web_external_api_contracts_v1_cases_requests_advance_test_case_request_from_dict = DebituraWebExternalApiContractsV1CasesRequestsAdvanceTestCaseRequest.from_dict(debitura_web_external_api_contracts_v1_cases_requests_advance_test_case_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


