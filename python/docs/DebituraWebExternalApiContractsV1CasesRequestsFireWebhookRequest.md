# DebituraWebExternalApiContractsV1CasesRequestsFireWebhookRequest

Request body for POST /test/webhooks/fire.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **str** | The webhook event type to fire (e.g. \&quot;case.updated\&quot;, \&quot;payment.created\&quot;). Must be a valid event type for the calling API — refer to each API&#39;s documentation for the supported list (Collection Partner and Customer API accept different sets). | 
**case_id** | **str** | The ID of the test case to use as the event source. | 
**subscription_id** | **str** | Optional — the specific subscription ID to fire to. If omitted, fires to all active test subscriptions for the calling API subscriber that are registered for the given event type. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_requests_fire_webhook_request import DebituraWebExternalApiContractsV1CasesRequestsFireWebhookRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesRequestsFireWebhookRequest from a JSON string
debitura_web_external_api_contracts_v1_cases_requests_fire_webhook_request_instance = DebituraWebExternalApiContractsV1CasesRequestsFireWebhookRequest.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesRequestsFireWebhookRequest.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_requests_fire_webhook_request_dict = debitura_web_external_api_contracts_v1_cases_requests_fire_webhook_request_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesRequestsFireWebhookRequest from a dict
debitura_web_external_api_contracts_v1_cases_requests_fire_webhook_request_from_dict = DebituraWebExternalApiContractsV1CasesRequestsFireWebhookRequest.from_dict(debitura_web_external_api_contracts_v1_cases_requests_fire_webhook_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


