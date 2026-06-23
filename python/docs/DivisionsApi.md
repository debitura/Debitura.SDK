# debitura_debt_collection.DivisionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**divisions_get**](DivisionsApi.md#divisions_get) | **GET** /divisions | List divisions for the authenticated creditor.
[**divisions_id_archive_post**](DivisionsApi.md#divisions_id_archive_post) | **POST** /divisions/{id}/archive | Archive a division.
[**divisions_id_delete**](DivisionsApi.md#divisions_id_delete) | **DELETE** /divisions/{id} | Delete a division.
[**divisions_id_get**](DivisionsApi.md#divisions_id_get) | **GET** /divisions/{id} | Get a single division by ID.
[**divisions_id_put**](DivisionsApi.md#divisions_id_put) | **PUT** /divisions/{id} | Update a division.
[**divisions_idarchive_post**](DivisionsApi.md#divisions_idarchive_post) | **POST** /divisions/{id}:archive | Archive a division.
[**divisions_post**](DivisionsApi.md#divisions_post) | **POST** /divisions | Create a new division.


# **divisions_get**
> DebituraWebExternalApiContractsV1DivisionsDivisionListDto divisions_get(page=page, page_size=page_size, include_archived=include_archived)

List divisions for the authenticated creditor.

Returns a paginated list of divisions for the authenticated creditor.  By default, archived divisions are excluded. Set `includeArchived=true` to include them.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_divisions_division_list_dto import DebituraWebExternalApiContractsV1DivisionsDivisionListDto
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
    api_instance = debitura_debt_collection.DivisionsApi(api_client)
    page = 1 # int |  (optional) (default to 1)
    page_size = 10 # int |  (optional) (default to 10)
    include_archived = False # bool |  (optional) (default to False)

    try:
        # List divisions for the authenticated creditor.
        api_response = api_instance.divisions_get(page=page, page_size=page_size, include_archived=include_archived)
        print("The response of DivisionsApi->divisions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DivisionsApi->divisions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] [default to 1]
 **page_size** | **int**|  | [optional] [default to 10]
 **include_archived** | **bool**|  | [optional] [default to False]

### Return type

[**DebituraWebExternalApiContractsV1DivisionsDivisionListDto**](DebituraWebExternalApiContractsV1DivisionsDivisionListDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of divisions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **divisions_id_archive_post**
> DebituraWebExternalApiContractsV1DivisionsDivisionDto divisions_id_archive_post(id)

Archive a division.

Archives a division, making it inactive. Archived divisions are excluded from list results by default.  **Important:** This action is irreversible. Archived divisions can still be referenced by existing cases.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_divisions_division_dto import DebituraWebExternalApiContractsV1DivisionsDivisionDto
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
    api_instance = debitura_debt_collection.DivisionsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Archive a division.
        api_response = api_instance.divisions_id_archive_post(id)
        print("The response of DivisionsApi->divisions_id_archive_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DivisionsApi->divisions_id_archive_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DebituraWebExternalApiContractsV1DivisionsDivisionDto**](DebituraWebExternalApiContractsV1DivisionsDivisionDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Division archived successfully |  -  |
**404** | Division not found |  -  |
**422** | Division is already archived |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **divisions_id_delete**
> divisions_id_delete(id)

Delete a division.

Deletes a division.  **Important:** A division cannot be deleted if it is referenced by active cases. If you need to deactivate a division that has cases, use the archive endpoint instead.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
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
    api_instance = debitura_debt_collection.DivisionsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Delete a division.
        api_instance.divisions_id_delete(id)
    except Exception as e:
        print("Exception when calling DivisionsApi->divisions_id_delete: %s\n" % e)
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
**204** | Division deleted successfully |  -  |
**404** | Division not found |  -  |
**422** | Division cannot be deleted because it has active cases |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **divisions_id_get**
> DebituraWebExternalApiContractsV1DivisionsDivisionDto divisions_id_get(id)

Get a single division by ID.

Returns details of a specific division. The division must belong to the authenticated creditor.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_divisions_division_dto import DebituraWebExternalApiContractsV1DivisionsDivisionDto
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
    api_instance = debitura_debt_collection.DivisionsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get a single division by ID.
        api_response = api_instance.divisions_id_get(id)
        print("The response of DivisionsApi->divisions_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DivisionsApi->divisions_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DebituraWebExternalApiContractsV1DivisionsDivisionDto**](DebituraWebExternalApiContractsV1DivisionsDivisionDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Division found |  -  |
**404** | Division not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **divisions_id_put**
> DebituraWebExternalApiContractsV1DivisionsDivisionDto divisions_id_put(id, debitura_web_external_api_contracts_v1_divisions_update_division_request_dto=debitura_web_external_api_contracts_v1_divisions_update_division_request_dto)

Update a division.

Replaces all fields of a division. All required fields must be provided.  **Required Fields:** - companyName - Name of the division - city - City where the division is located - countryCode - ISO 3166-1 alpha-2 country code (e.g. 'US', 'DE', 'DK')

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_divisions_division_dto import DebituraWebExternalApiContractsV1DivisionsDivisionDto
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_divisions_update_division_request_dto import DebituraWebExternalApiContractsV1DivisionsUpdateDivisionRequestDto
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
    api_instance = debitura_debt_collection.DivisionsApi(api_client)
    id = 'id_example' # str | 
    debitura_web_external_api_contracts_v1_divisions_update_division_request_dto = debitura_debt_collection.DebituraWebExternalApiContractsV1DivisionsUpdateDivisionRequestDto() # DebituraWebExternalApiContractsV1DivisionsUpdateDivisionRequestDto |  (optional)

    try:
        # Update a division.
        api_response = api_instance.divisions_id_put(id, debitura_web_external_api_contracts_v1_divisions_update_division_request_dto=debitura_web_external_api_contracts_v1_divisions_update_division_request_dto)
        print("The response of DivisionsApi->divisions_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DivisionsApi->divisions_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **debitura_web_external_api_contracts_v1_divisions_update_division_request_dto** | [**DebituraWebExternalApiContractsV1DivisionsUpdateDivisionRequestDto**](DebituraWebExternalApiContractsV1DivisionsUpdateDivisionRequestDto.md)|  | [optional] 

### Return type

[**DebituraWebExternalApiContractsV1DivisionsDivisionDto**](DebituraWebExternalApiContractsV1DivisionsDivisionDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Division updated successfully |  -  |
**400** | Invalid request |  -  |
**404** | Division not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **divisions_idarchive_post**
> DebituraWebExternalApiContractsV1DivisionsDivisionDto divisions_idarchive_post(id)

Archive a division.

Archives a division, making it inactive. Archived divisions are excluded from list results by default.  **Important:** This action is irreversible. Archived divisions can still be referenced by existing cases.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_divisions_division_dto import DebituraWebExternalApiContractsV1DivisionsDivisionDto
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
    api_instance = debitura_debt_collection.DivisionsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Archive a division.
        api_response = api_instance.divisions_idarchive_post(id)
        print("The response of DivisionsApi->divisions_idarchive_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DivisionsApi->divisions_idarchive_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DebituraWebExternalApiContractsV1DivisionsDivisionDto**](DebituraWebExternalApiContractsV1DivisionsDivisionDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Division archived successfully |  -  |
**404** | Division not found |  -  |
**422** | Division is already archived |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **divisions_post**
> DebituraWebExternalApiContractsV1DivisionsDivisionDto divisions_post(idempotency_key=idempotency_key, debitura_web_external_api_contracts_v1_divisions_create_division_request_dto=debitura_web_external_api_contracts_v1_divisions_create_division_request_dto)

Create a new division.

Creates a new division for the authenticated creditor.  Divisions allow creditors to organize cases under different business units, branches, or departments.  **Required Fields:** - companyName - Name of the division - city - City where the division is located - countryCode - ISO 3166-1 alpha-2 country code (e.g. 'US', 'DE', 'DK')  **Optional Fields:** - registrationNumber - Company registration number (CVR, VAT, etc.) - address, zipCode, state - Full address details - officeEmail, officePhone - Contact information

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_divisions_create_division_request_dto import DebituraWebExternalApiContractsV1DivisionsCreateDivisionRequestDto
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_divisions_division_dto import DebituraWebExternalApiContractsV1DivisionsDivisionDto
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
    api_instance = debitura_debt_collection.DivisionsApi(api_client)
    idempotency_key = 'idempotency_key_example' # str | Optional idempotency key (max 255 characters) for safely retrying this request. If a previous request used the same key with an identical body, the original terminal response is replayed verbatim. Reusing the key with a different body returns 422 with `Type: \"IdempotencyConflict\"`. Field-level 400 validation errors are not stored, so you may fix the request and retry with the same key. (optional)
    debitura_web_external_api_contracts_v1_divisions_create_division_request_dto = debitura_debt_collection.DebituraWebExternalApiContractsV1DivisionsCreateDivisionRequestDto() # DebituraWebExternalApiContractsV1DivisionsCreateDivisionRequestDto |  (optional)

    try:
        # Create a new division.
        api_response = api_instance.divisions_post(idempotency_key=idempotency_key, debitura_web_external_api_contracts_v1_divisions_create_division_request_dto=debitura_web_external_api_contracts_v1_divisions_create_division_request_dto)
        print("The response of DivisionsApi->divisions_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DivisionsApi->divisions_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotency_key** | **str**| Optional idempotency key (max 255 characters) for safely retrying this request. If a previous request used the same key with an identical body, the original terminal response is replayed verbatim. Reusing the key with a different body returns 422 with &#x60;Type: \&quot;IdempotencyConflict\&quot;&#x60;. Field-level 400 validation errors are not stored, so you may fix the request and retry with the same key. | [optional] 
 **debitura_web_external_api_contracts_v1_divisions_create_division_request_dto** | [**DebituraWebExternalApiContractsV1DivisionsCreateDivisionRequestDto**](DebituraWebExternalApiContractsV1DivisionsCreateDivisionRequestDto.md)|  | [optional] 

### Return type

[**DebituraWebExternalApiContractsV1DivisionsDivisionDto**](DebituraWebExternalApiContractsV1DivisionsDivisionDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Division created successfully |  -  |
**400** | Invalid request |  -  |
**422** | Business rule violation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

