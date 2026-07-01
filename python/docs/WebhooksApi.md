# debitura_debt_collection.WebhooksApi

All URIs are relative to *https://customer-api.debitura.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhooks_get**](WebhooksApi.md#webhooks_get) | **GET** /webhooks | List all webhook subscriptions for the authenticated creditor.
[**webhooks_id_delete**](WebhooksApi.md#webhooks_id_delete) | **DELETE** /webhooks/{id} | Delete a webhook subscription.
[**webhooks_id_get**](WebhooksApi.md#webhooks_id_get) | **GET** /webhooks/{id} | Get a single webhook subscription by ID.
[**webhooks_id_patch**](WebhooksApi.md#webhooks_id_patch) | **PATCH** /webhooks/{id} | Update an existing webhook subscription.
[**webhooks_id_replay_post**](WebhooksApi.md#webhooks_id_replay_post) | **POST** /webhooks/{id}/replay | [Deprecated] This endpoint is misnamed and does not actually replay events. Use &#x60;GET /webhooks/events?caseId&#x3D;{id}&#x60; to inspect delivery history, then &#x60;POST /webhooks/events/{eventId}/replay&#x60; to re-deliver a specific event.
[**webhooks_id_test_post**](WebhooksApi.md#webhooks_id_test_post) | **POST** /webhooks/{id}/test | Send a test event to the webhook endpoint.
[**webhooks_idreplay_post**](WebhooksApi.md#webhooks_idreplay_post) | **POST** /webhooks/{id}:replay | [Deprecated] This endpoint is misnamed and does not actually replay events. Use &#x60;GET /webhooks/events?caseId&#x3D;{id}&#x60; to inspect delivery history, then &#x60;POST /webhooks/events/{eventId}/replay&#x60; to re-deliver a specific event.
[**webhooks_idtest_post**](WebhooksApi.md#webhooks_idtest_post) | **POST** /webhooks/{id}:test | Send a test event to the webhook endpoint.
[**webhooks_post**](WebhooksApi.md#webhooks_post) | **POST** /webhooks | Create a new webhook subscription.


# **webhooks_get**
> List[DebituraDomainModelWebhooksDtosWebhookDto] webhooks_get()

List all webhook subscriptions for the authenticated creditor.

Returns all webhook subscriptions for the authenticated creditor. Secrets are never returned in list operations.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_domain_model_webhooks_dtos_webhook_dto import DebituraDomainModelWebhooksDtosWebhookDto
from debitura_debt_collection.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://customer-api.debitura.com
# See configuration.py for a list of all supported configuration parameters.
configuration = debitura_debt_collection.Configuration(
    host = "https://customer-api.debitura.com"
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
    api_instance = debitura_debt_collection.WebhooksApi(api_client)

    try:
        # List all webhook subscriptions for the authenticated creditor.
        api_response = api_instance.webhooks_get()
        print("The response of WebhooksApi->webhooks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[DebituraDomainModelWebhooksDtosWebhookDto]**](DebituraDomainModelWebhooksDtosWebhookDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of webhook subscriptions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_id_delete**
> webhooks_id_delete(id)

Delete a webhook subscription.

Deletes a webhook subscription. This operation is permanent.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://customer-api.debitura.com
# See configuration.py for a list of all supported configuration parameters.
configuration = debitura_debt_collection.Configuration(
    host = "https://customer-api.debitura.com"
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
    api_instance = debitura_debt_collection.WebhooksApi(api_client)
    id = 'id_example' # str | 

    try:
        # Delete a webhook subscription.
        api_instance.webhooks_id_delete(id)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Webhook deleted successfully |  -  |
**404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_id_get**
> DebituraDomainModelWebhooksDtosWebhookDto webhooks_id_get(id)

Get a single webhook subscription by ID.

Returns details of a specific webhook subscription. Secret is never returned in this operation.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_domain_model_webhooks_dtos_webhook_dto import DebituraDomainModelWebhooksDtosWebhookDto
from debitura_debt_collection.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://customer-api.debitura.com
# See configuration.py for a list of all supported configuration parameters.
configuration = debitura_debt_collection.Configuration(
    host = "https://customer-api.debitura.com"
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
    api_instance = debitura_debt_collection.WebhooksApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get a single webhook subscription by ID.
        api_response = api_instance.webhooks_id_get(id)
        print("The response of WebhooksApi->webhooks_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DebituraDomainModelWebhooksDtosWebhookDto**](DebituraDomainModelWebhooksDtosWebhookDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook subscription found |  -  |
**404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_id_patch**
> DebituraDomainModelWebhooksDtosWebhookDto webhooks_id_patch(id, debitura_domain_model_webhooks_dtos_update_webhook_request=debitura_domain_model_webhooks_dtos_update_webhook_request)

Update an existing webhook subscription.

Partially updates an existing webhook subscription using HTTP PATCH.  Supported Updates: - Change the webhook URL - Enable or disable the subscription - Regenerate the secret key  Note: Event types cannot be changed after creation. To update event types, delete and recreate the subscription.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_domain_model_webhooks_dtos_update_webhook_request import DebituraDomainModelWebhooksDtosUpdateWebhookRequest
from debitura_debt_collection.models.debitura_domain_model_webhooks_dtos_webhook_dto import DebituraDomainModelWebhooksDtosWebhookDto
from debitura_debt_collection.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://customer-api.debitura.com
# See configuration.py for a list of all supported configuration parameters.
configuration = debitura_debt_collection.Configuration(
    host = "https://customer-api.debitura.com"
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
    api_instance = debitura_debt_collection.WebhooksApi(api_client)
    id = 'id_example' # str | 
    debitura_domain_model_webhooks_dtos_update_webhook_request = debitura_debt_collection.DebituraDomainModelWebhooksDtosUpdateWebhookRequest() # DebituraDomainModelWebhooksDtosUpdateWebhookRequest |  (optional)

    try:
        # Update an existing webhook subscription.
        api_response = api_instance.webhooks_id_patch(id, debitura_domain_model_webhooks_dtos_update_webhook_request=debitura_domain_model_webhooks_dtos_update_webhook_request)
        print("The response of WebhooksApi->webhooks_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **debitura_domain_model_webhooks_dtos_update_webhook_request** | [**DebituraDomainModelWebhooksDtosUpdateWebhookRequest**](DebituraDomainModelWebhooksDtosUpdateWebhookRequest.md)|  | [optional] 

### Return type

[**DebituraDomainModelWebhooksDtosWebhookDto**](DebituraDomainModelWebhooksDtosWebhookDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook updated successfully |  -  |
**400** | Invalid request |  -  |
**404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_id_replay_post**
> DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayResultDto webhooks_id_replay_post(id, debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto=debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto)

[Deprecated] This endpoint is misnamed and does not actually replay events. Use `GET /webhooks/events?caseId={id}` to inspect delivery history, then `POST /webhooks/events/{eventId}/replay` to re-deliver a specific event.

This endpoint was never fully implemented — it counts cases created since `sinceUtc` and returns the count as `eventsReplayed`, but does not re-enqueue or redeliver any events. The name \"replay\" collides with the real `POST /webhooks/events/{eventId}/replay` endpoint which actually re-delivers.              This endpoint is kept for backward compatibility (additive-only rule) but is deprecated. Integrators should migrate to the event-log + replay-by-id pattern described above.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_customer_api_models_webhooks_dtos_replay_result_dto import DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayResultDto
from debitura_debt_collection.models.debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto import DebituraWebExternalCustomerAPIModelsWebhooksRequestsReplayRequestDto
from debitura_debt_collection.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://customer-api.debitura.com
# See configuration.py for a list of all supported configuration parameters.
configuration = debitura_debt_collection.Configuration(
    host = "https://customer-api.debitura.com"
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
    api_instance = debitura_debt_collection.WebhooksApi(api_client)
    id = 'id_example' # str | 
    debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto = debitura_debt_collection.DebituraWebExternalCustomerAPIModelsWebhooksRequestsReplayRequestDto() # DebituraWebExternalCustomerAPIModelsWebhooksRequestsReplayRequestDto |  (optional)

    try:
        # [Deprecated] This endpoint is misnamed and does not actually replay events. Use `GET /webhooks/events?caseId={id}` to inspect delivery history, then `POST /webhooks/events/{eventId}/replay` to re-deliver a specific event.
        api_response = api_instance.webhooks_id_replay_post(id, debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto=debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto)
        print("The response of WebhooksApi->webhooks_id_replay_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_id_replay_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto** | [**DebituraWebExternalCustomerAPIModelsWebhooksRequestsReplayRequestDto**](DebituraWebExternalCustomerAPIModelsWebhooksRequestsReplayRequestDto.md)|  | [optional] 

### Return type

[**DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayResultDto**](DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayResultDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of cases since sinceUtc (not events replayed) |  -  |
**400** | Invalid request |  -  |
**404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_id_test_post**
> DebituraWebExternalCustomerAPIModelsWebhooksDtosTestResultDto webhooks_id_test_post(id)

Send a test event to the webhook endpoint.

Sends a synthetic case.created test event to the webhook endpoint.  This is useful for: - Verifying the webhook URL is reachable - Testing your webhook endpoint implementation - Validating signature verification  The test payload will be a realistic case.created event with synthetic data.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_customer_api_models_webhooks_dtos_test_result_dto import DebituraWebExternalCustomerAPIModelsWebhooksDtosTestResultDto
from debitura_debt_collection.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://customer-api.debitura.com
# See configuration.py for a list of all supported configuration parameters.
configuration = debitura_debt_collection.Configuration(
    host = "https://customer-api.debitura.com"
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
    api_instance = debitura_debt_collection.WebhooksApi(api_client)
    id = 'id_example' # str | 

    try:
        # Send a test event to the webhook endpoint.
        api_response = api_instance.webhooks_id_test_post(id)
        print("The response of WebhooksApi->webhooks_id_test_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_id_test_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DebituraWebExternalCustomerAPIModelsWebhooksDtosTestResultDto**](DebituraWebExternalCustomerAPIModelsWebhooksDtosTestResultDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Test completed |  -  |
**404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_idreplay_post**
> DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayResultDto webhooks_idreplay_post(id, debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto=debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto)

[Deprecated] This endpoint is misnamed and does not actually replay events. Use `GET /webhooks/events?caseId={id}` to inspect delivery history, then `POST /webhooks/events/{eventId}/replay` to re-deliver a specific event.

This endpoint was never fully implemented — it counts cases created since `sinceUtc` and returns the count as `eventsReplayed`, but does not re-enqueue or redeliver any events. The name \"replay\" collides with the real `POST /webhooks/events/{eventId}/replay` endpoint which actually re-delivers.              This endpoint is kept for backward compatibility (additive-only rule) but is deprecated. Integrators should migrate to the event-log + replay-by-id pattern described above.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_customer_api_models_webhooks_dtos_replay_result_dto import DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayResultDto
from debitura_debt_collection.models.debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto import DebituraWebExternalCustomerAPIModelsWebhooksRequestsReplayRequestDto
from debitura_debt_collection.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://customer-api.debitura.com
# See configuration.py for a list of all supported configuration parameters.
configuration = debitura_debt_collection.Configuration(
    host = "https://customer-api.debitura.com"
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
    api_instance = debitura_debt_collection.WebhooksApi(api_client)
    id = 'id_example' # str | 
    debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto = debitura_debt_collection.DebituraWebExternalCustomerAPIModelsWebhooksRequestsReplayRequestDto() # DebituraWebExternalCustomerAPIModelsWebhooksRequestsReplayRequestDto |  (optional)

    try:
        # [Deprecated] This endpoint is misnamed and does not actually replay events. Use `GET /webhooks/events?caseId={id}` to inspect delivery history, then `POST /webhooks/events/{eventId}/replay` to re-deliver a specific event.
        api_response = api_instance.webhooks_idreplay_post(id, debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto=debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto)
        print("The response of WebhooksApi->webhooks_idreplay_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_idreplay_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto** | [**DebituraWebExternalCustomerAPIModelsWebhooksRequestsReplayRequestDto**](DebituraWebExternalCustomerAPIModelsWebhooksRequestsReplayRequestDto.md)|  | [optional] 

### Return type

[**DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayResultDto**](DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayResultDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of cases since sinceUtc (not events replayed) |  -  |
**400** | Invalid request |  -  |
**404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_idtest_post**
> DebituraWebExternalCustomerAPIModelsWebhooksDtosTestResultDto webhooks_idtest_post(id)

Send a test event to the webhook endpoint.

Sends a synthetic case.created test event to the webhook endpoint.  This is useful for: - Verifying the webhook URL is reachable - Testing your webhook endpoint implementation - Validating signature verification  The test payload will be a realistic case.created event with synthetic data.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_customer_api_models_webhooks_dtos_test_result_dto import DebituraWebExternalCustomerAPIModelsWebhooksDtosTestResultDto
from debitura_debt_collection.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://customer-api.debitura.com
# See configuration.py for a list of all supported configuration parameters.
configuration = debitura_debt_collection.Configuration(
    host = "https://customer-api.debitura.com"
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
    api_instance = debitura_debt_collection.WebhooksApi(api_client)
    id = 'id_example' # str | 

    try:
        # Send a test event to the webhook endpoint.
        api_response = api_instance.webhooks_idtest_post(id)
        print("The response of WebhooksApi->webhooks_idtest_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_idtest_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DebituraWebExternalCustomerAPIModelsWebhooksDtosTestResultDto**](DebituraWebExternalCustomerAPIModelsWebhooksDtosTestResultDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Test completed |  -  |
**404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooks_post**
> DebituraDomainModelWebhooksDtosWebhookDto webhooks_post(debitura_domain_model_webhooks_dtos_create_webhook_request=debitura_domain_model_webhooks_dtos_create_webhook_request)

Create a new webhook subscription.

Creates a new webhook subscription for receiving real-time event notifications.  **Available Events:** - `case.created` - New collection case created - `case.updated` - Case lifecycle changed (e.g., Active → Legal) - `case.closed` - Case closed - `payment.created` - Payment registered on case - `payment.deleted` - Payment reversed (deleted) on case - `chat.created` - Chat message created on case  **Validation Rules:** - URL must be HTTPS - events array must contain only valid event types - URL must be publicly reachable - Private IP addresses are blocked (SSRF protection)  **Returns:** - Webhook subscription details - Secret key for HMAC-SHA256 signature verification (shown only once)  **IMPORTANT**: Save the secret immediately - it cannot be retrieved later.  **Webhook Payload Structure:** Every webhook delivery will contain these headers: - X-Debitura-Signature: HMAC-SHA256 signature (format: t={timestamp},v1={signature}) - X-Debitura-Timestamp: Unix timestamp of the event - X-Debitura-Event: Event type (e.g., 'case.created')  **Signature Verification (HMAC-SHA256):** 1. Extract timestamp (t) and signature (v1) from X-Debitura-Signature header 2. Construct signed payload: {timestamp}.{json_body} 3. Compute HMAC-SHA256 using your webhook secret (Base64 decoded) 4. Compare computed signature with v1 value (use constant-time comparison) 5. Verify timestamp is within 5 minutes to prevent replay attacks  **Example Payload:** ```json {   \"id\": \"evt_abc123\",   \"event\": \"case.created\",   \"timestamp\": \"2024-01-15T10:30:00Z\",   \"data\": {     \"caseId\": \"guid-here\",     \"reference\": \"Q8OAXF3W\",     \"creditorReference\": \"INV-001\",     \"status\": \"Active\",     \"amount\": 1000.00,     \"currency\": \"EUR\",     \"debtorName\": \"Debtor Company Ltd\"   } } ```

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_domain_model_webhooks_dtos_create_webhook_request import DebituraDomainModelWebhooksDtosCreateWebhookRequest
from debitura_debt_collection.models.debitura_domain_model_webhooks_dtos_webhook_dto import DebituraDomainModelWebhooksDtosWebhookDto
from debitura_debt_collection.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://customer-api.debitura.com
# See configuration.py for a list of all supported configuration parameters.
configuration = debitura_debt_collection.Configuration(
    host = "https://customer-api.debitura.com"
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
    api_instance = debitura_debt_collection.WebhooksApi(api_client)
    debitura_domain_model_webhooks_dtos_create_webhook_request = debitura_debt_collection.DebituraDomainModelWebhooksDtosCreateWebhookRequest() # DebituraDomainModelWebhooksDtosCreateWebhookRequest |  (optional)

    try:
        # Create a new webhook subscription.
        api_response = api_instance.webhooks_post(debitura_domain_model_webhooks_dtos_create_webhook_request=debitura_domain_model_webhooks_dtos_create_webhook_request)
        print("The response of WebhooksApi->webhooks_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->webhooks_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **debitura_domain_model_webhooks_dtos_create_webhook_request** | [**DebituraDomainModelWebhooksDtosCreateWebhookRequest**](DebituraDomainModelWebhooksDtosCreateWebhookRequest.md)|  | [optional] 

### Return type

[**DebituraDomainModelWebhooksDtosWebhookDto**](DebituraDomainModelWebhooksDtosWebhookDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Webhook created successfully |  -  |
**400** | Invalid request |  -  |
**422** | Business rule violation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

