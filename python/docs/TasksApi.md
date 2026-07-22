# debitura_debt_collection.TasksApi

All URIs are relative to *https://customer-api.debitura.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasks_get**](TasksApi.md#tasks_get) | **GET** /tasks | List your open tasks


# **tasks_get**
> DebituraWebExternalApiContractsV1TasksTaskListDto tasks_get(status=status, type=type, page=page, page_size=page_size)

List your open tasks

Returns a paginated, account-wide list of every task (action-item) your account currently has — across ALL cases, not just one. Use GET /cases/{id}/tasks instead to scope this to a single case.  **What is a task?** A task is something the platform needs YOU to do before a case can proceed — e.g. reply to a chat message, sign a contract, or assign a bank account for payouts. Tasks auto-resolve when the underlying condition clears (for example, once you reply to the case's chat, the ReplyToChat task disappears on its own) — this is a live work queue, not an append-only log. Poll it, don't assume a task you've seen before is still open.  **Every task has a solutionUrl** — an absolute link, identical to the one used inside the Creditor app itself, that a human can open to resolve the task in one click, no matter the task type.  **Some tasks also have an `action`** — a machine-readable hint pointing at the exact existing API call that resolves the task directly, with no human required. Today that's the chat-driven cluster (ReplyToChat, ClientInputRequired, MoreInfoNeeded) — post a message via POST /cases/{caseId}/chats and the task resolves itself once the case leaves its needs-info state. Tasks without an action are `action: null` — resolve those via solutionUrl.  **Filtering:** - status (default: Open) — Open or Solved - type (repeatable, e.g. ?type=ReplyToChat&type=SignContract) — restrict to specific task types  **Pagination:** - Page (default: 1), PageSize (default: 10, max: 100)

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_tasks_task_list_dto import DebituraWebExternalApiContractsV1TasksTaskListDto
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
    api_instance = debitura_debt_collection.TasksApi(api_client)
    status = 'Open' # str |  (optional) (default to 'Open')
    type = ['type_example'] # List[str] |  (optional)
    page = 1 # int |  (optional) (default to 1)
    page_size = 10 # int |  (optional) (default to 10)

    try:
        # List your open tasks
        api_response = api_instance.tasks_get(status=status, type=type, page=page, page_size=page_size)
        print("The response of TasksApi->tasks_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TasksApi->tasks_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **str**|  | [optional] [default to &#39;Open&#39;]
 **type** | [**List[str]**](str.md)|  | [optional] 
 **page** | **int**|  | [optional] [default to 1]
 **page_size** | **int**|  | [optional] [default to 10]

### Return type

[**DebituraWebExternalApiContractsV1TasksTaskListDto**](DebituraWebExternalApiContractsV1TasksTaskListDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tasks returned |  -  |
**400** | Invalid status, type, or pagination parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

