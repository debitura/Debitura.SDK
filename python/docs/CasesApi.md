# debitura_debt_collection.CasesApi

All URIs are relative to *https://customer-api.debitura.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cases_by_creditor_reference_creditor_reference_get**](CasesApi.md#cases_by_creditor_reference_creditor_reference_get) | **GET** /cases/by-creditor-reference/{creditorReference} | Fetch case by creditor reference
[**cases_case_reference_case_reference_get**](CasesApi.md#cases_case_reference_case_reference_get) | **GET** /cases/case-reference/{caseReference} | Fetch case by reference
[**cases_get**](CasesApi.md#cases_get) | **GET** /cases | List collection cases
[**cases_id_chats_get**](CasesApi.md#cases_id_chats_get) | **GET** /cases/{id}/chats | Fetch case chats
[**cases_id_chats_post**](CasesApi.md#cases_id_chats_post) | **POST** /cases/{id}/chats | Send a chat message
[**cases_id_contract_status_get**](CasesApi.md#cases_id_contract_status_get) | **GET** /cases/{id}/contract-status | Get contract signing status for a case
[**cases_id_exclusive_period_get**](CasesApi.md#cases_id_exclusive_period_get) | **GET** /cases/{id}/exclusive-period | Get exclusive collection period chain
[**cases_id_files_get**](CasesApi.md#cases_id_files_get) | **GET** /cases/{id}/files | Get case files
[**cases_id_files_post**](CasesApi.md#cases_id_files_post) | **POST** /cases/{id}/files | Upload a file to a case
[**cases_id_get**](CasesApi.md#cases_id_get) | **GET** /cases/{id} | Fetch case by ID
[**cases_id_payments_get**](CasesApi.md#cases_id_payments_get) | **GET** /cases/{id}/payments | Fetch case payments
[**cases_id_quote_requests_get**](CasesApi.md#cases_id_quote_requests_get) | **GET** /cases/{id}/quote-requests | List quote requests for a case
[**cases_id_quote_requests_quote_request_id_get**](CasesApi.md#cases_id_quote_requests_quote_request_id_get) | **GET** /cases/{id}/quote-requests/{quoteRequestId} | Get quote request details
[**cases_id_quote_requests_quote_request_id_quotes_get**](CasesApi.md#cases_id_quote_requests_quote_request_id_quotes_get) | **GET** /cases/{id}/quote-requests/{quoteRequestId}/quotes | List quotes for a quote request
[**cases_id_quote_requests_quote_request_id_quotes_quote_id_get**](CasesApi.md#cases_id_quote_requests_quote_request_id_quotes_quote_id_get) | **GET** /cases/{id}/quote-requests/{quoteRequestId}/quotes/{quoteId} | Get quote details
[**cases_id_timeline_get**](CasesApi.md#cases_id_timeline_get) | **GET** /cases/{id}/timeline | Fetch case timeline
[**cases_id_validation_get**](CasesApi.md#cases_id_validation_get) | **GET** /cases/{id}/validation | Get full validation detail for a case
[**cases_post**](CasesApi.md#cases_post) | **POST** /cases | Create collection case
[**cases_preview_post**](CasesApi.md#cases_preview_post) | **POST** /cases/preview | Preview case eligibility and requirements


# **cases_by_creditor_reference_creditor_reference_get**
> DebituraWebExternalApiContractsV1CasesInvoiceDto cases_by_creditor_reference_creditor_reference_get(creditor_reference)

Fetch case by creditor reference

Returns case details for the provided creditor reference. The creditor reference is your own unique identifier for the case, as provided when the case was created.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_invoice_dto import DebituraWebExternalApiContractsV1CasesInvoiceDto
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    creditor_reference = 'creditor_reference_example' # str | 

    try:
        # Fetch case by creditor reference
        api_response = api_instance.cases_by_creditor_reference_creditor_reference_get(creditor_reference)
        print("The response of CasesApi->cases_by_creditor_reference_creditor_reference_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_by_creditor_reference_creditor_reference_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditor_reference** | **str**|  | 

### Return type

[**DebituraWebExternalApiContractsV1CasesInvoiceDto**](DebituraWebExternalApiContractsV1CasesInvoiceDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Case found |  -  |
**400** | Creditor reference missing or empty |  -  |
**404** | No case found with this creditor reference |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_case_reference_case_reference_get**
> DebituraWebExternalApiContractsV1CasesInvoiceDto cases_case_reference_case_reference_get(case_reference)

Fetch case by reference

Returns case details for the provided Debitura case reference (example: Q8OAXF3W).

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_invoice_dto import DebituraWebExternalApiContractsV1CasesInvoiceDto
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    case_reference = 'case_reference_example' # str | 

    try:
        # Fetch case by reference
        api_response = api_instance.cases_case_reference_case_reference_get(case_reference)
        print("The response of CasesApi->cases_case_reference_case_reference_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_case_reference_case_reference_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **case_reference** | **str**|  | 

### Return type

[**DebituraWebExternalApiContractsV1CasesInvoiceDto**](DebituraWebExternalApiContractsV1CasesInvoiceDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Case found |  -  |
**400** | Reference missing or reference is not a collection case |  -  |
**404** | Reference not found or case does not belong to your account |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_get**
> DebituraWebExternalApiContractsV1CasesInvoiceListDto cases_get(page=page, page_size=page_size, debtor_ids=debtor_ids, ids=ids, statuses=statuses, division_ids=division_ids, sort=sort)

List collection cases

Returns a paginated list of collection cases for your account.  **Pagination:** - page (default: 1) - Page number, starting from 1 - pageSize (default: 10, max: 100) - Number of results per page  **Filters:** - statuses - Filter by case lifecycle status (comma-separated list)   Valid values: PendingContractSigning, PendingVerificationInternal, PendingVerification,   NeedsAdditionalDetails, Leads, LeadsQuoteGiven, Active, Paused, Closed, Merged   (case-insensitive; both name and description forms accepted) - divisionIds - Filter by creditor division IDs (comma-separated GUIDs, for multi-division creditors) - debtorIds - Filter by specific debtor IDs (comma-separated GUIDs) - ids - Filter by specific case IDs (comma-separated GUIDs)  **Sorting:** - sort - Sort field and direction (format: 'field:direction')   Valid sort fields: DateCreated, DateUpdated, DateFinished, DateCollectionStarted,   DueDate, Date, GrossAmount, Remainder, InterestFees, CollectionFees, ReminderFees,   Lifecycle, CloseCode   Examples: 'DateCreated:desc', 'DueDate:asc', 'GrossAmount:desc'   Unknown fields are silently ignored.  **Response:** - Returns InvoiceListApiDTO with page metadata and cases array - Page metadata includes: totalResults, currentPage, skipped, pageSize

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_invoice_list_dto import DebituraWebExternalApiContractsV1CasesInvoiceListDto
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    page = 56 # int |  (optional)
    page_size = 56 # int |  (optional)
    debtor_ids = ['debtor_ids_example'] # List[str] |  (optional)
    ids = ['ids_example'] # List[str] |  (optional)
    statuses = ['statuses_example'] # List[str] | Filter by case lifecycle status. Valid values: PendingContractSigning, PendingVerificationInternal, PendingVerification, NeedsAdditionalDetails, Leads, LeadsQuoteGiven, Active, Paused, Closed, Merged (case-insensitive; both name and description forms accepted). (optional)
    division_ids = ['division_ids_example'] # List[str] | Optional list of division IDs to filter by (optional)
    sort = 'sort_example' # str | Optional sorting string \"Field[:asc|desc][,Field2[:asc|desc]]…\". Valid sort fields: DateCreated, DateUpdated, DateFinished, DateCollectionStarted, DueDate, Date, GrossAmount, Remainder, InterestFees, CollectionFees, ReminderFees, Lifecycle, CloseCode. Examples: 'DateCreated:desc', 'DueDate:asc'. Unknown fields are silently ignored. (optional)

    try:
        # List collection cases
        api_response = api_instance.cases_get(page=page, page_size=page_size, debtor_ids=debtor_ids, ids=ids, statuses=statuses, division_ids=division_ids, sort=sort)
        print("The response of CasesApi->cases_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] 
 **page_size** | **int**|  | [optional] 
 **debtor_ids** | [**List[str]**](str.md)|  | [optional] 
 **ids** | [**List[str]**](str.md)|  | [optional] 
 **statuses** | [**List[str]**](str.md)| Filter by case lifecycle status. Valid values: PendingContractSigning, PendingVerificationInternal, PendingVerification, NeedsAdditionalDetails, Leads, LeadsQuoteGiven, Active, Paused, Closed, Merged (case-insensitive; both name and description forms accepted). | [optional] 
 **division_ids** | [**List[str]**](str.md)| Optional list of division IDs to filter by | [optional] 
 **sort** | **str**| Optional sorting string \&quot;Field[:asc|desc][,Field2[:asc|desc]]…\&quot;. Valid sort fields: DateCreated, DateUpdated, DateFinished, DateCollectionStarted, DueDate, Date, GrossAmount, Remainder, InterestFees, CollectionFees, ReminderFees, Lifecycle, CloseCode. Examples: &#39;DateCreated:desc&#39;, &#39;DueDate:asc&#39;. Unknown fields are silently ignored. | [optional] 

### Return type

[**DebituraWebExternalApiContractsV1CasesInvoiceListDto**](DebituraWebExternalApiContractsV1CasesInvoiceListDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List returned |  -  |
**400** | Invalid query parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_id_chats_get**
> List[DebituraWebExternalApiContractsV1ChatsChatDto] cases_id_chats_get(id)

Fetch case chats

Returns all chat messages attached to the case.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_chats_chat_dto import DebituraWebExternalApiContractsV1ChatsChatDto
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    id = 'id_example' # str | 

    try:
        # Fetch case chats
        api_response = api_instance.cases_id_chats_get(id)
        print("The response of CasesApi->cases_id_chats_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_id_chats_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**List[DebituraWebExternalApiContractsV1ChatsChatDto]**](DebituraWebExternalApiContractsV1ChatsChatDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Chats returned |  -  |
**400** | ID missing |  -  |
**404** | Case not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_id_chats_post**
> DebituraWebExternalApiContractsV1ChatsChatDto cases_id_chats_post(id, debitura_web_external_api_contracts_v1_chats_send_chat_request=debitura_web_external_api_contracts_v1_chats_send_chat_request)

Send a chat message

Posts a new chat message on a case, visible to both you and the collection partner.  **Message Details:** - The message is attributed to the team member identified by `userId` - The collection partner will receive an email notification about the new message - Messages appear in the case chat timeline in chronological order  **Prerequisites:** - The case must exist and belong to your account - The `userId` must be a valid user ID from `GET /users` belonging to your team  **Use Case:** Use this endpoint to communicate with collection partners about case progress, provide additional information, or respond to partner questions. Messages sent via this endpoint are equivalent to messages sent through the creditor portal chat.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_chats_chat_dto import DebituraWebExternalApiContractsV1ChatsChatDto
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_chats_send_chat_request import DebituraWebExternalApiContractsV1ChatsSendChatRequest
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    id = 'id_example' # str | 
    debitura_web_external_api_contracts_v1_chats_send_chat_request = debitura_debt_collection.DebituraWebExternalApiContractsV1ChatsSendChatRequest() # DebituraWebExternalApiContractsV1ChatsSendChatRequest |  (optional)

    try:
        # Send a chat message
        api_response = api_instance.cases_id_chats_post(id, debitura_web_external_api_contracts_v1_chats_send_chat_request=debitura_web_external_api_contracts_v1_chats_send_chat_request)
        print("The response of CasesApi->cases_id_chats_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_id_chats_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **debitura_web_external_api_contracts_v1_chats_send_chat_request** | [**DebituraWebExternalApiContractsV1ChatsSendChatRequest**](DebituraWebExternalApiContractsV1ChatsSendChatRequest.md)|  | [optional] 

### Return type

[**DebituraWebExternalApiContractsV1ChatsChatDto**](DebituraWebExternalApiContractsV1ChatsChatDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Chat message sent successfully |  -  |
**400** | Validation error — missing fields, invalid userId, or invalid request body |  -  |
**404** | Case not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_id_contract_status_get**
> DebituraWebExternalApiContractsV1CasesCaseContractStatusApiDTO cases_id_contract_status_get(id)

Get contract signing status for a case

Returns the signing status of the SDCA (Standard Debt Collection Agreement), PoA (Power of Attorney), and Jurisdiction Pricing Appendix for a case.  **Use case:** When a case is stuck in PendingContractSigning, use this endpoint to determine which contract is missing and get the signing URL.  **Response:** - sdca: Always present — shows whether the debt collection agreement is signed - poa: Present only if a collection partner is assigned — shows whether the power of attorney is signed for that partner - NeedsPoaSigning: true when the case is blocked because a required PoA or Jurisdiction Pricing Appendix has not been signed - Each contract item includes a solutionUrl if signing or re-signing is needed - The solutionUrl is context-aware: referral partner bearer tokens get referral onboarding URLs, API keys get creditor app URLs

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_case_contract_status_api_dto import DebituraWebExternalApiContractsV1CasesCaseContractStatusApiDTO
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get contract signing status for a case
        api_response = api_instance.cases_id_contract_status_get(id)
        print("The response of CasesApi->cases_id_contract_status_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_id_contract_status_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DebituraWebExternalApiContractsV1CasesCaseContractStatusApiDTO**](DebituraWebExternalApiContractsV1CasesCaseContractStatusApiDTO.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contract status returned |  -  |
**400** | ID missing, empty, or not a collection case |  -  |
**404** | Case not found, deleted, or does not belong to your account |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_id_exclusive_period_get**
> DebituraWebExternalApiContractsV1CasesExclusivePeriodDto cases_id_exclusive_period_get(id)

Get exclusive collection period chain

Returns the full exclusive collection period chain for a case, including the initial period and any extensions triggered by debtor actions (promise to pay, payment agreement, or actual payment).

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_exclusive_period_dto import DebituraWebExternalApiContractsV1CasesExclusivePeriodDto
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get exclusive collection period chain
        api_response = api_instance.cases_id_exclusive_period_get(id)
        print("The response of CasesApi->cases_id_exclusive_period_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_id_exclusive_period_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DebituraWebExternalApiContractsV1CasesExclusivePeriodDto**](DebituraWebExternalApiContractsV1CasesExclusivePeriodDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Chain returned |  -  |
**400** | ID missing or empty |  -  |
**404** | Case not found, does not belong to your account, or no collection period exists |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_id_files_get**
> List[DebituraWebExternalApiContractsV1FilesCaseFileDto] cases_id_files_get(id)

Get case files

Returns all files associated with the specified case.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_files_case_file_dto import DebituraWebExternalApiContractsV1FilesCaseFileDto
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get case files
        api_response = api_instance.cases_id_files_get(id)
        print("The response of CasesApi->cases_id_files_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_id_files_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**List[DebituraWebExternalApiContractsV1FilesCaseFileDto]**](DebituraWebExternalApiContractsV1FilesCaseFileDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Files retrieved successfully |  -  |
**400** | Invalid case ID |  -  |
**404** | Case not found |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_id_files_post**
> DebituraWebExternalApiContractsV1FilesCaseFileDto cases_id_files_post(id, file, description=description, document_type=document_type)

Upload a file to a case

Uploads a file and associates it with a case.  File requirements: - Maximum file size: 25MB - Allowed file types: PDF (.pdf), Excel (.xls, .xlsx), CSV (.csv), Text (.TXT), Images (.jpg, .jpeg, .png, .gif)  The file will be stored securely and associated with the specified case.  Document types: - OriginalInvoice (default) - The original invoice document - DebtorDocuments - Documents provided by the debtor - CreditorDocuments - Documents provided by the creditor - PartnerDocuments - Documents provided by collection partners - DemandLetter - Formal demand letter - Miscellaneous - Other supporting documents

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_files_case_file_dto import DebituraWebExternalApiContractsV1FilesCaseFileDto
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    id = 'id_example' # str | 
    file = None # bytearray | 
    description = 'description_example' # str |  (optional)
    document_type = 'document_type_example' # str |  (optional)

    try:
        # Upload a file to a case
        api_response = api_instance.cases_id_files_post(id, file, description=description, document_type=document_type)
        print("The response of CasesApi->cases_id_files_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_id_files_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **file** | **bytearray**|  | 
 **description** | **str**|  | [optional] 
 **document_type** | **str**|  | [optional] 

### Return type

[**DebituraWebExternalApiContractsV1FilesCaseFileDto**](DebituraWebExternalApiContractsV1FilesCaseFileDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File uploaded successfully |  -  |
**400** | Invalid request |  -  |
**404** | Case not found |  -  |
**413** | File too large |  -  |
**415** | Unsupported file type |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_id_get**
> DebituraWebExternalApiContractsV1CasesInvoiceDto cases_id_get(id)

Fetch case by ID

Returns case details for the provided Debitura case ID (a GUID).

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_invoice_dto import DebituraWebExternalApiContractsV1CasesInvoiceDto
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    id = 'id_example' # str | 

    try:
        # Fetch case by ID
        api_response = api_instance.cases_id_get(id)
        print("The response of CasesApi->cases_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DebituraWebExternalApiContractsV1CasesInvoiceDto**](DebituraWebExternalApiContractsV1CasesInvoiceDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Case found |  -  |
**400** | ID missing, empty, or ID is not a collection case |  -  |
**404** | Case not found, deleted, or does not belong to your account |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_id_payments_get**
> List[DebituraWebExternalApiContractsV1PaymentsPaymentDto] cases_id_payments_get(id)

Fetch case payments

Returns every payment recorded on the case.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_payments_payment_dto import DebituraWebExternalApiContractsV1PaymentsPaymentDto
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    id = 'id_example' # str | 

    try:
        # Fetch case payments
        api_response = api_instance.cases_id_payments_get(id)
        print("The response of CasesApi->cases_id_payments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_id_payments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**List[DebituraWebExternalApiContractsV1PaymentsPaymentDto]**](DebituraWebExternalApiContractsV1PaymentsPaymentDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payments returned |  -  |
**400** | ID missing |  -  |
**404** | Case not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_id_quote_requests_get**
> DebituraWebExternalApiContractsV1LeadsLeadListDto cases_id_quote_requests_get(id)

List quote requests for a case

Returns all quote requests for the specified case. Multiple quote requests can exist per case.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_leads_lead_list_dto import DebituraWebExternalApiContractsV1LeadsLeadListDto
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    id = 'id_example' # str | 

    try:
        # List quote requests for a case
        api_response = api_instance.cases_id_quote_requests_get(id)
        print("The response of CasesApi->cases_id_quote_requests_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_id_quote_requests_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DebituraWebExternalApiContractsV1LeadsLeadListDto**](DebituraWebExternalApiContractsV1LeadsLeadListDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Quote requests returned |  -  |
**400** | Invalid case ID |  -  |
**404** | Case not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_id_quote_requests_quote_request_id_get**
> DebituraWebExternalApiContractsV1LeadsLeadDetailDto cases_id_quote_requests_quote_request_id_get(id, quote_request_id)

Get quote request details

Returns detailed information for a specific quote request including computed properties.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_leads_lead_detail_dto import DebituraWebExternalApiContractsV1LeadsLeadDetailDto
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    id = 'id_example' # str | 
    quote_request_id = 'quote_request_id_example' # str | 

    try:
        # Get quote request details
        api_response = api_instance.cases_id_quote_requests_quote_request_id_get(id, quote_request_id)
        print("The response of CasesApi->cases_id_quote_requests_quote_request_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_id_quote_requests_quote_request_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **quote_request_id** | **str**|  | 

### Return type

[**DebituraWebExternalApiContractsV1LeadsLeadDetailDto**](DebituraWebExternalApiContractsV1LeadsLeadDetailDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Quote request found |  -  |
**400** | Invalid ID |  -  |
**404** | Quote request or case not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_id_quote_requests_quote_request_id_quotes_get**
> DebituraWebExternalApiContractsV1LeadsLeadQuoteListDto cases_id_quote_requests_quote_request_id_quotes_get(id, quote_request_id)

List quotes for a quote request

Returns all partner quotes received for the specified quote request.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_leads_lead_quote_list_dto import DebituraWebExternalApiContractsV1LeadsLeadQuoteListDto
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    id = 'id_example' # str | 
    quote_request_id = 'quote_request_id_example' # str | 

    try:
        # List quotes for a quote request
        api_response = api_instance.cases_id_quote_requests_quote_request_id_quotes_get(id, quote_request_id)
        print("The response of CasesApi->cases_id_quote_requests_quote_request_id_quotes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_id_quote_requests_quote_request_id_quotes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **quote_request_id** | **str**|  | 

### Return type

[**DebituraWebExternalApiContractsV1LeadsLeadQuoteListDto**](DebituraWebExternalApiContractsV1LeadsLeadQuoteListDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Quotes returned |  -  |
**400** | Invalid ID |  -  |
**404** | Quote request or case not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_id_quote_requests_quote_request_id_quotes_quote_id_get**
> DebituraWebExternalApiContractsV1LeadsLeadQuoteDetailDto cases_id_quote_requests_quote_request_id_quotes_quote_id_get(id, quote_request_id, quote_id)

Get quote details

Returns complete details for a specific quote including full pricing breakdown.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_leads_lead_quote_detail_dto import DebituraWebExternalApiContractsV1LeadsLeadQuoteDetailDto
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    id = 'id_example' # str | 
    quote_request_id = 'quote_request_id_example' # str | 
    quote_id = 'quote_id_example' # str | 

    try:
        # Get quote details
        api_response = api_instance.cases_id_quote_requests_quote_request_id_quotes_quote_id_get(id, quote_request_id, quote_id)
        print("The response of CasesApi->cases_id_quote_requests_quote_request_id_quotes_quote_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_id_quote_requests_quote_request_id_quotes_quote_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **quote_request_id** | **str**|  | 
 **quote_id** | **str**|  | 

### Return type

[**DebituraWebExternalApiContractsV1LeadsLeadQuoteDetailDto**](DebituraWebExternalApiContractsV1LeadsLeadQuoteDetailDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Quote found |  -  |
**400** | Invalid ID |  -  |
**404** | Quote, quote request, or case not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_id_timeline_get**
> DebituraWebExternalApiContractsV1CasesCaseTimelineResponse cases_id_timeline_get(id)

Fetch case timeline

Returns the full event timeline for the case along with the current engagement phase.  **Response shape:** - `items` — chronological list of timeline events - `currentEngagementPhase` — current phase of the active engagement: \"Pre-legal\", \"Legal\", or \"Enforcement\". Null when no active engagement exists.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_case_timeline_response import DebituraWebExternalApiContractsV1CasesCaseTimelineResponse
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    id = 'id_example' # str | 

    try:
        # Fetch case timeline
        api_response = api_instance.cases_id_timeline_get(id)
        print("The response of CasesApi->cases_id_timeline_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_id_timeline_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DebituraWebExternalApiContractsV1CasesCaseTimelineResponse**](DebituraWebExternalApiContractsV1CasesCaseTimelineResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Timeline returned |  -  |
**400** | ID missing |  -  |
**404** | Case not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_id_validation_get**
> DebituraDomainServicesCaseValidationCaseValidationStatusDto cases_id_validation_get(id)

Get full validation detail for a case

Returns the full creditor-facing validation status for a case, including the resolution area and description for each outstanding item.  **When to call:** Check `validation.needsInfo` on `GET /cases/{id}`. If `true`, call this endpoint to retrieve the item-level breakdown of what the creditor must supply.  **Safety:** Only creditor-facing resolution areas are returned. Internal areas (InternalReview, AdminReview) and sensitive fields (Rationale, Confidence) are never exposed.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_domain_services_case_validation_case_validation_status_dto import DebituraDomainServicesCaseValidationCaseValidationStatusDto
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get full validation detail for a case
        api_response = api_instance.cases_id_validation_get(id)
        print("The response of CasesApi->cases_id_validation_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_id_validation_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DebituraDomainServicesCaseValidationCaseValidationStatusDto**](DebituraDomainServicesCaseValidationCaseValidationStatusDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Full validation status returned |  -  |
**400** | ID missing, empty, or not a collection case |  -  |
**404** | Case not found or does not belong to your account |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_post**
> DebituraWebExternalApiContractsV1CasesInvoiceDto cases_post(idempotency_key=idempotency_key, debitura_web_external_api_contracts_v1_cases_requests_create_collection_case_request_api_view_model=debitura_web_external_api_contracts_v1_cases_requests_create_collection_case_request_api_view_model)

Create collection case

Creates a new collection case for debt collection.  **Test Mode:** - Set isTest=true to create a test case (case IS created in the database but marked as test data) - Test cases are excluded from production metrics and can be easily filtered or deleted - Use test mode for integration testing and development  **Debtor Rules:** - debtor.type must be \"Company\" or \"Private\"   - Company → debtor.name is mandatory (company name)   - Private → debtor.name is mandatory (person's full name)  **Geographic Rules:** - debtor.countryAlpha2 (ISO 3166-1 alpha-2) is always required - debtor.state is a free-text region description - For US debtors: debtor.stateAlpha2 (two-letter state code) is also required – debtor.state is ignored in that scenario  **Optional Parameters:** - creditorDivisionId - Assign case to a specific division (for multi-division creditors) - collectionPartnerId - Override automatic partner assignment with a specific collection partner - skipDebituraVerification - Skip internal verification steps (advanced use) - skipCreationEmails - Deprecated: accepted for backwards compatibility but ignored server-side. Creation emails are always suppressed in favour of the hourly CasesStarted digest - allowPendingContracts - Accept cases with unsigned contracts in 'PendingContractSigning' status instead of returning 422  **Error Responses:** - 400: Field validation errors (returns JSON object with field names as keys and error arrays as values) - 422: Business rule violations (returns BusinessErrorResponseApiDTO with type, message, and solutionUrl) - 500: Server errors

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_invoice_dto import DebituraWebExternalApiContractsV1CasesInvoiceDto
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_requests_create_collection_case_request_api_view_model import DebituraWebExternalApiContractsV1CasesRequestsCreateCollectionCaseRequestApiViewModel
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    idempotency_key = 'idempotency_key_example' # str | Optional idempotency key (max 255 characters) for safely retrying this request. If a previous request used the same key with an identical body, the original terminal response is replayed verbatim. Reusing the key with a different body returns 422 with `Type: \"IdempotencyConflict\"`. Field-level 400 validation errors are not stored, so you may fix the request and retry with the same key. (optional)
    debitura_web_external_api_contracts_v1_cases_requests_create_collection_case_request_api_view_model = debitura_debt_collection.DebituraWebExternalApiContractsV1CasesRequestsCreateCollectionCaseRequestApiViewModel() # DebituraWebExternalApiContractsV1CasesRequestsCreateCollectionCaseRequestApiViewModel |  (optional)

    try:
        # Create collection case
        api_response = api_instance.cases_post(idempotency_key=idempotency_key, debitura_web_external_api_contracts_v1_cases_requests_create_collection_case_request_api_view_model=debitura_web_external_api_contracts_v1_cases_requests_create_collection_case_request_api_view_model)
        print("The response of CasesApi->cases_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotency_key** | **str**| Optional idempotency key (max 255 characters) for safely retrying this request. If a previous request used the same key with an identical body, the original terminal response is replayed verbatim. Reusing the key with a different body returns 422 with &#x60;Type: \&quot;IdempotencyConflict\&quot;&#x60;. Field-level 400 validation errors are not stored, so you may fix the request and retry with the same key. | [optional] 
 **debitura_web_external_api_contracts_v1_cases_requests_create_collection_case_request_api_view_model** | [**DebituraWebExternalApiContractsV1CasesRequestsCreateCollectionCaseRequestApiViewModel**](DebituraWebExternalApiContractsV1CasesRequestsCreateCollectionCaseRequestApiViewModel.md)|  | [optional] 

### Return type

[**DebituraWebExternalApiContractsV1CasesInvoiceDto**](DebituraWebExternalApiContractsV1CasesInvoiceDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Case created |  -  |
**400** | Invalid request |  -  |
**422** | Business rule violation |  -  |
**500** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cases_preview_post**
> DebituraWebExternalApiContractsV1CasesPreviewCaseResponseApiViewModel cases_preview_post(debitura_web_external_api_contracts_v1_cases_requests_preview_case_request_api_view_model=debitura_web_external_api_contracts_v1_cases_requests_preview_case_request_api_view_model)

Preview case eligibility and requirements

Preview what would happen if you submitted a case, without actually creating it.  **What This Endpoint Returns:** - IsEligible - Whether the case can be submitted (partner available) - PartnerAssignment - Which collection partner would handle the case - RequiredActions - What contracts/documents need to be signed before submission   - Standard Debt Collection Agreement (SDCA)   - Power of Attorney (PoA) for the assigned partner - PricingPreview - Estimated success fee with age-based surcharges - Jurisdiction - Geographic details  **Use This To:** 1. Check if a jurisdiction is supported before submitting 2. Determine which documents need signing before case creation 3. Get signing URLs to guide users through required actions 4. Estimate pricing including age surcharges  **Required Fields:** - AmountToRecover - Total principal amount - CurrencyCode - ISO 4217 currency code (e.g., 'DKK', 'EUR', 'USD') - Debtor.Type - 'Company' or 'Private' - Debtor.CountryAlpha2 - ISO 3166-1 alpha-2 country code - Debtor.StateAlpha2 - Required for US cases only (e.g., 'CA', 'NY')  **Optional Fields (Multi-Invoice Age Pricing):** - AmountToRecoverOver12Months - Portion over 12 months overdue - AmountToRecoverOver24Months - Portion over 24 months overdue (Both must be provided together if used) - AmountToRecoverOver6Months - Portion over 6 months overdue (optional, improves pricing tier accuracy at the 180-day threshold; requires Over12/Over24)  **Solution URLs Are Context-Aware:** - Bearer token (referral partner) → referral onboarding URLs - XApiKey (creditor) → standard creditor app URLs  **Important Notes:** - This endpoint does NOT create a case - it only previews what would happen - The preview uses the same eligibility logic as POST /cases - If multiple partners match (system limitation), the first match is returned - All required actions must be completed before calling POST /cases  **Example Workflow:** ``` 1. POST /cases/preview → Check eligibility and get signing URLs 2. User completes required actions (signs SDCA, signs PoA) 3. POST /cases → Create the actual case ```

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_preview_case_response_api_view_model import DebituraWebExternalApiContractsV1CasesPreviewCaseResponseApiViewModel
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_requests_preview_case_request_api_view_model import DebituraWebExternalApiContractsV1CasesRequestsPreviewCaseRequestApiViewModel
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
    api_instance = debitura_debt_collection.CasesApi(api_client)
    debitura_web_external_api_contracts_v1_cases_requests_preview_case_request_api_view_model = debitura_debt_collection.DebituraWebExternalApiContractsV1CasesRequestsPreviewCaseRequestApiViewModel() # DebituraWebExternalApiContractsV1CasesRequestsPreviewCaseRequestApiViewModel |  (optional)

    try:
        # Preview case eligibility and requirements
        api_response = api_instance.cases_preview_post(debitura_web_external_api_contracts_v1_cases_requests_preview_case_request_api_view_model=debitura_web_external_api_contracts_v1_cases_requests_preview_case_request_api_view_model)
        print("The response of CasesApi->cases_preview_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CasesApi->cases_preview_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **debitura_web_external_api_contracts_v1_cases_requests_preview_case_request_api_view_model** | [**DebituraWebExternalApiContractsV1CasesRequestsPreviewCaseRequestApiViewModel**](DebituraWebExternalApiContractsV1CasesRequestsPreviewCaseRequestApiViewModel.md)|  | [optional] 

### Return type

[**DebituraWebExternalApiContractsV1CasesPreviewCaseResponseApiViewModel**](DebituraWebExternalApiContractsV1CasesPreviewCaseResponseApiViewModel.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Preview completed |  -  |
**400** | Invalid request (validation errors) |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

