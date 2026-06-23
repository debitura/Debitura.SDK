# debitura_debt_collection.TestWebhooksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**test_webhooks_fire_post**](TestWebhooksApi.md#test_webhooks_fire_post) | **POST** /test/webhooks/fire | Fire a named webhook event type for a test case.


# **test_webhooks_fire_post**
> DebituraWebExternalApiContractsV1CasesFireWebhookResponse test_webhooks_fire_post(debitura_web_external_api_contracts_v1_cases_requests_fire_webhook_request=debitura_web_external_api_contracts_v1_cases_requests_fire_webhook_request)

Fire a named webhook event type for a test case.

Fires a real current-state webhook event for any registered Customer API event type against a test case — even if the case hasn't naturally reached the state that would produce that event.  **Purpose:** Unblocks testing webhook handlers for rare or hard-to-reach event types (e.g. `case.closed`, `chat.created`) without having to drive the case through its full lifecycle.  **Payload:** The event carries the real current state of the case — fields are read from the case as it exists now. No payload fabrication or override is supported in this version.  **Event types:** - `case.created` — current lifecycle (use after case creation, or to re-test your handler) - `case.updated` — current lifecycle (oldLifecycle and newLifecycle both reflect current state) - `case.closed` — current close code and comment (use after case is already closed, or to test your handler regardless) - `payment.created` — most recent payment on the case (returns 422 if no payments exist) - `chat.created` — most recent chat message on the case (returns 422 if no chats exist)  **Target subscriptions:** - If `subscriptionId` is provided, fires only to that subscription. Returns 400 if the subscription is not found, not a test subscription, or not owned by this creditor. - If omitted, fires to all active test subscriptions registered for the given event type.  **Event log (asynchronous):** The synthetic fire is enqueued into the normal delivery pipeline, exactly like a real dispatch. A successful response (and its `enqueuedCount`) confirms the event was queued — it does **not** mean a row already exists in the webhook event log. The `WebhookEvent` row appears in `GET /webhooks/events` only after the worker drains the queue and attempts delivery — usually within a few seconds, but allow up to ~30 seconds, as the queue drain can lag under load. Do not assume the row is present the instant this call returns: poll `GET /webhooks/events?caseId={id}` with a short backoff until the event appears (or a ~30s timeout elapses) rather than reading it once immediately.  **Guards:** - Returns 400 if the case is not a test case (`classification != test`), the event type is not valid, or the subscription is not found/not owned. - Returns 404 if the case is not found or not owned by this creditor. - Returns 422 if required data is missing (e.g. no payments for `payment.created`, no chats for `chat.created`).

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_fire_webhook_response import DebituraWebExternalApiContractsV1CasesFireWebhookResponse
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_requests_fire_webhook_request import DebituraWebExternalApiContractsV1CasesRequestsFireWebhookRequest
from debitura_debt_collection.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = debitura_debt_collection.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: ApiKey
configuration.api_key['ApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKey'] = 'Bearer'

# Configure Bearer authorization (JWT): Bearer
configuration = debitura_debt_collection.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with debitura_debt_collection.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = debitura_debt_collection.TestWebhooksApi(api_client)
    debitura_web_external_api_contracts_v1_cases_requests_fire_webhook_request = debitura_debt_collection.DebituraWebExternalApiContractsV1CasesRequestsFireWebhookRequest() # DebituraWebExternalApiContractsV1CasesRequestsFireWebhookRequest |  (optional)

    try:
        # Fire a named webhook event type for a test case.
        api_response = api_instance.test_webhooks_fire_post(debitura_web_external_api_contracts_v1_cases_requests_fire_webhook_request=debitura_web_external_api_contracts_v1_cases_requests_fire_webhook_request)
        print("The response of TestWebhooksApi->test_webhooks_fire_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestWebhooksApi->test_webhooks_fire_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **debitura_web_external_api_contracts_v1_cases_requests_fire_webhook_request** | [**DebituraWebExternalApiContractsV1CasesRequestsFireWebhookRequest**](DebituraWebExternalApiContractsV1CasesRequestsFireWebhookRequest.md)|  | [optional] 

### Return type

[**DebituraWebExternalApiContractsV1CasesFireWebhookResponse**](DebituraWebExternalApiContractsV1CasesFireWebhookResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event fired — delivery jobs enqueued |  -  |
**400** | Validation error — non-test case, invalid event type, or subscription not found |  -  |
**404** | Case not found or not owned by this creditor |  -  |
**422** | Required data missing (e.g. no payments for payment.created) |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

