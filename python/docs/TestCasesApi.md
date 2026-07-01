# debitura_debt_collection.TestCasesApi

All URIs are relative to *https://customer-api.debitura.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**test_cases_delete**](TestCasesApi.md#test_cases_delete) | **DELETE** /test/cases | Hard-delete all test cases with the given tag.
[**test_cases_id_advance_post**](TestCasesApi.md#test_cases_id_advance_post) | **POST** /test/cases/{id}/advance | Advance a test case to a known lifecycle state.
[**test_cases_id_delete**](TestCasesApi.md#test_cases_id_delete) | **DELETE** /test/cases/{id} | Hard-delete a single test case by ID.


# **test_cases_delete**
> test_cases_delete(tag=tag)

Hard-delete all test cases with the given tag.

Permanently removes all test cases created with the specified tag (and all their child entities) from the database.  **Scoped cleanup:** Each CI pipeline run should create cases with a unique tag (e.g. `suite-run-{uuid}`) and use this endpoint at the end of the run to clean up, without affecting cases from parallel pipeline runs.  **This is a hard-delete.** Rows are removed entirely with no recovery path. This is intentional for CI environments.  **Guards:** - Returns 400 if any matched case is classified as Production. The entire operation is rejected and nothing is deleted. - Returns 400 if the tag query parameter is missing or blank.  **Idempotent:** Returns 204 even if no cases match the tag — no error is raised.

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
    api_instance = debitura_debt_collection.TestCasesApi(api_client)
    tag = 'tag_example' # str |  (optional)

    try:
        # Hard-delete all test cases with the given tag.
        api_instance.test_cases_delete(tag=tag)
    except Exception as e:
        print("Exception when calling TestCasesApi->test_cases_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Cases deleted (or none matched — idempotent, no response body) |  -  |
**400** | Tag is missing/blank, or matched cases include a Production case |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_cases_id_advance_post**
> DebituraWebExternalApiContractsV1CasesAdvanceTestCaseResponse test_cases_id_advance_post(id, debitura_web_external_api_contracts_v1_cases_requests_advance_test_case_request=debitura_web_external_api_contracts_v1_cases_requests_advance_test_case_request)

Advance a test case to a known lifecycle state.

Drives a test case to a well-known lifecycle state in a single call.  **Purpose:** Enables CI pipelines and integrators to exercise the full collection lifecycle — including real webhooks and events — without manual intervention.  **Target States:** - `Active` — Activates the case from PendingVerification or PendingVerificationInternal. No-op if already Active or Closed. - `Closed:Paid` — Records a payment for `amount` and closes the case as Paid. Activates the case first if needed. `amount` is required. - `Closed:NoPayment` — Closes the case with PreLegalExhaustedNoPayment. Activates the case first if needed.  **Guards:** - Returns 400 if the case is not a test case (Classification != Test). - Returns 400 if `amount` is missing when `to` is `Closed:Paid`. - Returns 400 if `to` is not one of the valid values. - Returns 400 if the case is already closed with a different close code (e.g. already Closed:NoPayment when requesting Closed:Paid). - Returns 404 if the case is not found or not owned by the calling creditor.  **No-op behaviour:** If the case is already at the requested state, the call returns 200 with `advanced: false` and the current state — no changes are made.  **Webhooks:** Transitions use the real internal service pipeline. Webhook delivery per target:  - `→ Active`: fires `case.updated` to Creditor subscriptions. - `→ Closed:Paid`: fires `payment.created` and `case.updated` and `case.closed` to Creditor subscriptions. - `→ Closed:NoPayment`: fires `case.updated` and `case.closed` to Creditor subscriptions.  All events carry `classification: test` and are only delivered to webhook subscriptions registered with `classification: test`.  **How to Test:**  1. **Create a test case** — `POST /cases` with `isTest: true` and `tag: suite-run-{uuid}`. Note the returned `id`.  2. **Register a test webhook subscription** — subscribe to the events you want to assert on (`case.updated`, `payment.created`, `case.closed`) with `classification: test` and point the URL to your test receiver (e.g. a local ngrok tunnel or a CI webhook sink).  3. **Advance to Active** — `POST /test/cases/{id}/advance` with `{ \"to\": \"Active\" }`. Expect `{ advanced: true, state: \"Active\" }` and a `case.updated` event on your Creditor subscription.  4. **Advance to Closed:Paid** — `POST /test/cases/{id}/advance` with `{ \"to\": \"Closed:Paid\", \"amount\": 1000.00 }`. Expect `{ advanced: true, state: \"Closed:Paid\" }` and a `payment.created` event on your Creditor subscription.  5. **Verify final state** — `GET /cases/{id}` and assert `lifecycle: Closed` and `closeCode: Paid`.  6. **Test no-op** — Call the same advance again. Expect `{ advanced: false, state: \"Closed:Paid\" }` and no new webhook events.  7. **Test mismatch error** — With the case closed as Paid, call `{ \"to\": \"Closed:NoPayment\" }`. Expect 400 with a message describing the conflict.  8. **Assert webhooks** — `GET /webhooks/events?caseId={id}` to verify which events fired.  9. **Reset between runs** — `DELETE /test/cases?tag=suite-run-{uuid}` to clean up all cases created in this run.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_advance_test_case_response import DebituraWebExternalApiContractsV1CasesAdvanceTestCaseResponse
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_requests_advance_test_case_request import DebituraWebExternalApiContractsV1CasesRequestsAdvanceTestCaseRequest
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
    api_instance = debitura_debt_collection.TestCasesApi(api_client)
    id = 'id_example' # str | 
    debitura_web_external_api_contracts_v1_cases_requests_advance_test_case_request = debitura_debt_collection.DebituraWebExternalApiContractsV1CasesRequestsAdvanceTestCaseRequest() # DebituraWebExternalApiContractsV1CasesRequestsAdvanceTestCaseRequest |  (optional)

    try:
        # Advance a test case to a known lifecycle state.
        api_response = api_instance.test_cases_id_advance_post(id, debitura_web_external_api_contracts_v1_cases_requests_advance_test_case_request=debitura_web_external_api_contracts_v1_cases_requests_advance_test_case_request)
        print("The response of TestCasesApi->test_cases_id_advance_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestCasesApi->test_cases_id_advance_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **debitura_web_external_api_contracts_v1_cases_requests_advance_test_case_request** | [**DebituraWebExternalApiContractsV1CasesRequestsAdvanceTestCaseRequest**](DebituraWebExternalApiContractsV1CasesRequestsAdvanceTestCaseRequest.md)|  | [optional] 

### Return type

[**DebituraWebExternalApiContractsV1CasesAdvanceTestCaseResponse**](DebituraWebExternalApiContractsV1CasesAdvanceTestCaseResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Advance result (advanced&#x3D;true if state changed, advanced&#x3D;false if already there) |  -  |
**400** | Validation error — non-test case, missing amount, or unknown target state |  -  |
**404** | Case not found or not owned by this creditor |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_cases_id_delete**
> test_cases_id_delete(id)

Hard-delete a single test case by ID.

Permanently removes a test case and all its child entities (payments, chats, files, timeline entries, webhook delivery records) from the database.  **This is a hard-delete.** The row is removed entirely — there is no soft-delete or recovery path. This is intentional for CI environments that create many test cases per day.  **Guards:** - Returns 400 if the case is classified as Production. Only Test cases may be deleted via this endpoint. - Returns 404 if the case is not found or not owned by the calling creditor.  **Idempotent:** Returns 204 even if the case is already deleted (no-op).

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
    api_instance = debitura_debt_collection.TestCasesApi(api_client)
    id = 'id_example' # str | 

    try:
        # Hard-delete a single test case by ID.
        api_instance.test_cases_id_delete(id)
    except Exception as e:
        print("Exception when calling TestCasesApi->test_cases_id_delete: %s\n" % e)
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
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Case deleted (or already absent — idempotent) |  -  |
**400** | Case is a Production case — deletion rejected |  -  |
**404** | Case not found or not owned by this creditor |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

