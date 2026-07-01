# debitura_debt_collection.CoverageApi

All URIs are relative to *https://customer-api.debitura.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**coverage_check_eligibility_post**](CoverageApi.md#coverage_check_eligibility_post) | **POST** /coverage/check-eligibility | Check case eligibility and get assigned partner
[**coverage_get**](CoverageApi.md#coverage_get) | **GET** /coverage | List all jurisdiction coverage
[**coverage_id_get**](CoverageApi.md#coverage_id_get) | **GET** /coverage/{id} | Get jurisdiction coverage by ID
[**coverage_search_get**](CoverageApi.md#coverage_search_get) | **GET** /coverage/search | [DEPRECATED] Search for jurisdiction coverage
[**coverage_search_get_0**](CoverageApi.md#coverage_search_get_0) | **GET** /coverage/:search | [DEPRECATED] Search for jurisdiction coverage


# **coverage_check_eligibility_post**
> DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityResponseApiDTO coverage_check_eligibility_post(debitura_web_external_customer_api_models_coverages_case_eligibility_request_api_dto=debitura_web_external_customer_api_models_coverages_case_eligibility_request_api_dto)

Check case eligibility and get assigned partner

**Determine if a case can be submitted and get partner + PoA status.**  **Request Fields:** - CountryAlpha2 (required) - Debtor country (e.g., 'DK', 'US', 'DE') - StateAlpha2 (conditional) - Required for US debtors (e.g., 'CA', 'NY') - DebtorType (required) - 'Company' or 'Private' - Amount (required) - Amount to recover - CurrencyCode (required) - Currency (e.g., 'USD', 'EUR', 'DKK')  **Response:** - IsEligible (boolean) - Whether case can be submitted - Partner - Specific partner that will handle this case - PowerOfAttorneyStatus - PoA signing status for the matched partner  **Note:** Does NOT check SDCA status. Use GET /contracts/debt-collection/status for that.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_customer_api_models_coverages_case_eligibility_request_api_dto import DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityRequestApiDTO
from debitura_debt_collection.models.debitura_web_external_customer_api_models_coverages_case_eligibility_response_api_dto import DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityResponseApiDTO
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
    api_instance = debitura_debt_collection.CoverageApi(api_client)
    debitura_web_external_customer_api_models_coverages_case_eligibility_request_api_dto = debitura_debt_collection.DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityRequestApiDTO() # DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityRequestApiDTO |  (optional)

    try:
        # Check case eligibility and get assigned partner
        api_response = api_instance.coverage_check_eligibility_post(debitura_web_external_customer_api_models_coverages_case_eligibility_request_api_dto=debitura_web_external_customer_api_models_coverages_case_eligibility_request_api_dto)
        print("The response of CoverageApi->coverage_check_eligibility_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoverageApi->coverage_check_eligibility_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **debitura_web_external_customer_api_models_coverages_case_eligibility_request_api_dto** | [**DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityRequestApiDTO**](DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityRequestApiDTO.md)|  | [optional] 

### Return type

[**DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityResponseApiDTO**](DebituraWebExternalCustomerAPIModelsCoveragesCaseEligibilityResponseApiDTO.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Eligibility check completed |  -  |
**400** | Invalid request (validation errors) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coverage_get**
> List[DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO] coverage_get()

List all jurisdiction coverage

Returns complete coverage information for all jurisdictions where Debitura operates, including power of attorney signing status and solution URLs.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_customer_api_models_coverages_coverage_item_api_dto import DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO
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
    api_instance = debitura_debt_collection.CoverageApi(api_client)

    try:
        # List all jurisdiction coverage
        api_response = api_instance.coverage_get()
        print("The response of CoverageApi->coverage_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoverageApi->coverage_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO]**](DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Coverage list returned |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coverage_id_get**
> DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO coverage_id_get(id)

Get jurisdiction coverage by ID

Returns a single jurisdiction with its geographic information, assigned collection partner, and power of attorney signing status.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_customer_api_models_coverages_coverage_item_api_dto import DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO
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
    api_instance = debitura_debt_collection.CoverageApi(api_client)
    id = 56 # int | 

    try:
        # Get jurisdiction coverage by ID
        api_response = api_instance.coverage_id_get(id)
        print("The response of CoverageApi->coverage_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoverageApi->coverage_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO**](DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Coverage item returned |  -  |
**404** | Jurisdiction not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coverage_search_get**
> DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO coverage_search_get(q=q)

[DEPRECATED] Search for jurisdiction coverage

⚠️ **DEPRECATED:** Use POST /coverage/check-eligibility instead.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_customer_api_models_coverages_coverage_item_api_dto import DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO
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
    api_instance = debitura_debt_collection.CoverageApi(api_client)
    q = 'q_example' # str |  (optional)

    try:
        # [DEPRECATED] Search for jurisdiction coverage
        api_response = api_instance.coverage_search_get(q=q)
        print("The response of CoverageApi->coverage_search_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoverageApi->coverage_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**|  | [optional] 

### Return type

[**DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO**](DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Coverage item returned |  -  |
**400** | Search query missing or invalid |  -  |
**404** | No jurisdiction found matching the search query |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **coverage_search_get_0**
> DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO coverage_search_get_0(q=q)

[DEPRECATED] Search for jurisdiction coverage

⚠️ **DEPRECATED:** Use POST /coverage/check-eligibility instead.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_customer_api_models_coverages_coverage_item_api_dto import DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO
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
    api_instance = debitura_debt_collection.CoverageApi(api_client)
    q = 'q_example' # str |  (optional)

    try:
        # [DEPRECATED] Search for jurisdiction coverage
        api_response = api_instance.coverage_search_get_0(q=q)
        print("The response of CoverageApi->coverage_search_get_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CoverageApi->coverage_search_get_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**|  | [optional] 

### Return type

[**DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO**](DebituraWebExternalCustomerAPIModelsCoveragesCoverageItemApiDTO.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Coverage item returned |  -  |
**400** | Search query missing or invalid |  -  |
**404** | No jurisdiction found matching the search query |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

