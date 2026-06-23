# debitura_debt_collection.WebhookEventsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhooks_events_get**](WebhookEventsApi.md#webhooks_events_get) | **GET** /webhooks/events | List webhook events dispatched for a case.
[**webhooks_events_id_replay_post**](WebhookEventsApi.md#webhooks_events_id_replay_post) | **POST** /webhooks/events/{id}/replay | Replay a specific webhook event.


# **webhooks_events_get**
> List[DebituraWebExternalCustomerAPIModelsWebhooksDtosWebhookEventDto] webhooks_events_get(case_id=case_id, since=since)

List webhook events dispatched for a case.

Returns all webhook events dispatched for the given case, scoped to your webhook subscriptions. Results are ordered newest-first.  **Use cases:** - Verify that a specific event (e.g. `case.updated`) fired after a state transition. - Inspect the exact payload delivered on each attempt. - Find the event ID to replay via `POST /webhooks/events/{id}/replay`.  **Filtering:** - `caseId` (required): restricts to events for this case. - `since` (optional): only returns events created at or after this ISO 8601 timestamp.  **Note:** Only events for your subscriptions are returned — events from other creditors' subscriptions are never exposed.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_customer_api_models_webhooks_dtos_webhook_event_dto import DebituraWebExternalCustomerAPIModelsWebhooksDtosWebhookEventDto
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
    api_instance = debitura_debt_collection.WebhookEventsApi(api_client)
    case_id = 'case_id_example' # str |  (optional)
    since = '2013-10-20T19:20:30+01:00' # datetime |  (optional)

    try:
        # List webhook events dispatched for a case.
        api_response = api_instance.webhooks_events_get(case_id=case_id, since=since)
        print("The response of WebhookEventsApi->webhooks_events_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhookEventsApi->webhooks_events_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **case_id** | **str**|  | [optional] 
 **since** | **datetime**|  | [optional] 

### Return type

[**List[DebituraWebExternalCustomerAPIModelsWebhooksDtosWebhookEventDto]**](DebituraWebExternalCustomerAPIModelsWebhooksDtosWebhookEventDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of webhook events |  -  |
**400** | Missing or invalid query parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_events_id_replay_post**
> DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayEventResultDto webhooks_events_id_replay_post(id)

Replay a specific webhook event.

Re-enqueues the exact payload from a previously recorded event to its original subscription.  The event is re-queued as a fresh delivery attempt (attempt 1) using the original payload unchanged. Delivery follows the normal retry schedule if the endpoint is unavailable.  **Replay signal:** Replayed deliveries include the header `X-Debitura-Replay: true` so your endpoint can distinguish a replay from a live event and implement idempotency correctly.  **When to use:** - Your endpoint was temporarily unavailable and you want to re-deliver a specific event. - You want to test idempotency of your event handler. - Part of CI-loop ASSERT: confirm an event was dispatched, then replay to a different receiver.  **Tenant isolation:** Only events belonging to your own subscriptions can be replayed.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_customer_api_models_webhooks_dtos_replay_event_result_dto import DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayEventResultDto
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
    api_instance = debitura_debt_collection.WebhookEventsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Replay a specific webhook event.
        api_response = api_instance.webhooks_events_id_replay_post(id)
        print("The response of WebhookEventsApi->webhooks_events_id_replay_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhookEventsApi->webhooks_events_id_replay_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayEventResultDto**](DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayEventResultDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event re-enqueued for delivery |  -  |
**404** | Event not found or not owned by this creditor |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

