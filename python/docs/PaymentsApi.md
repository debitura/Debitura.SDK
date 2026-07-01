# debitura_debt_collection.PaymentsApi

All URIs are relative to *https://customer-api.debitura.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payments_get**](PaymentsApi.md#payments_get) | **GET** /Payments | List payments
[**payments_id_get**](PaymentsApi.md#payments_id_get) | **GET** /Payments/{id} | Fetch payment by ID


# **payments_get**
> DebituraWebExternalCustomerAPIModelsPaymentsDtosPaymentListApiDTO payments_get(page=page, page_size=page_size)

List payments

Returns a paginated list of all payments recorded on your account across all cases.  **Pagination:** - Page (default: 1) - Page number, starting from 1 - PageSize (default: 10, max: 100) - Number of results per page  **Response:** - Returns PaymentListApiDTO with page metadata and payments array - Each payment includes case reference, amount, currency, date, payment type, and status - Page metadata includes: totalResults, currentPage, skipped, pageSize  **Note:** This endpoint returns ALL payments across all your cases. To get payments for a specific case, use GET /cases/{id}/payments instead.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_customer_api_models_payments_dtos_payment_list_api_dto import DebituraWebExternalCustomerAPIModelsPaymentsDtosPaymentListApiDTO
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
    api_instance = debitura_debt_collection.PaymentsApi(api_client)
    page = 1 # int |  (optional) (default to 1)
    page_size = 10 # int |  (optional) (default to 10)

    try:
        # List payments
        api_response = api_instance.payments_get(page=page, page_size=page_size)
        print("The response of PaymentsApi->payments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->payments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] [default to 1]
 **page_size** | **int**|  | [optional] [default to 10]

### Return type

[**DebituraWebExternalCustomerAPIModelsPaymentsDtosPaymentListApiDTO**](DebituraWebExternalCustomerAPIModelsPaymentsDtosPaymentListApiDTO.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payments returned |  -  |
**400** | Invalid pagination parameters |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payments_id_get**
> DebituraWebExternalApiContractsV1PaymentsPaymentDto payments_id_get(id)

Fetch payment by ID

Returns payment details for the supplied payment ID.

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
    api_instance = debitura_debt_collection.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Fetch payment by ID
        api_response = api_instance.payments_id_get(id)
        print("The response of PaymentsApi->payments_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->payments_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**DebituraWebExternalApiContractsV1PaymentsPaymentDto**](DebituraWebExternalApiContractsV1PaymentsPaymentDto.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment found |  -  |
**400** | ID missing or empty |  -  |
**404** | Payment not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

