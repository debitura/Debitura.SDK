# debitura_debt_collection.UsersApi

All URIs are relative to *https://customer-api.debitura.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**users_get**](UsersApi.md#users_get) | **GET** /users | Lists team members belonging to the authenticated creditor.


# **users_get**
> DebituraWebExternalApiContractsV1UsersUserListDto users_get(page=page, page_size=page_size)

Lists team members belonging to the authenticated creditor.

Returns a paginated list of users belonging to the authenticated creditor's team.  **Use Case:** Use this endpoint to retrieve valid user IDs for the `userId` field when sending a chat message via `POST /cases/{id}/chats`.  **Pagination:** - `page` (default: 1) — Page number, starting from 1 - `pageSize` (default: 50, max: 100) — Number of results per page  **Response:** Each user entry includes: - `id` (Guid) — Use this as `userId` in `POST /cases/{id}/chats` - `name` — Full name of the team member - `email` — Email address of the team member

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_users_user_list_dto import DebituraWebExternalApiContractsV1UsersUserListDto
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
    api_instance = debitura_debt_collection.UsersApi(api_client)
    page = 56 # int |  (optional)
    page_size = 56 # int |  (optional)

    try:
        # Lists team members belonging to the authenticated creditor.
        api_response = api_instance.users_get(page=page, page_size=page_size)
        print("The response of UsersApi->users_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->users_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] 
 **page_size** | **int**|  | [optional] 

### Return type

[**DebituraWebExternalApiContractsV1UsersUserListDto**](DebituraWebExternalApiContractsV1UsersUserListDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated list of team members returned |  -  |
**400** | Invalid pagination parameters |  -  |
**401** | Missing or invalid API key |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

