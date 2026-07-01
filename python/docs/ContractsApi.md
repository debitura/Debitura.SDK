# debitura_debt_collection.ContractsApi

All URIs are relative to *https://customer-api.debitura.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contracts_debt_collection_status_get**](ContractsApi.md#contracts_debt_collection_status_get) | **GET** /contracts/debt-collection/status | Get debt collection contract status


# **contracts_debt_collection_status_get**
> DebituraWebExternalCustomerAPIModelsCoveragesCollectionContractStatusApiDTO contracts_debt_collection_status_get()

Get debt collection contract status

Returns the status of your standard Debt Collection Agreement with Debitura.  **Response Fields:** - signed (boolean) - Whether the agreement has been signed - requiresResigning (boolean) - Whether the contract needs to be re-signed - invalidationReason (string) - Why re-signing is required (if applicable)   Possible values: None, NewVersion, AdminInvalidated, Other, CreditorNameChanged - termsUrl (string, nullable) - URL to download the signed agreement PDF (only when signed=true) - solutionUrl (string, nullable) - URL to sign or re-sign the agreement (only when action required)  **Use Case:** Check this endpoint before creating cases to ensure you have signed the required agreement. If requiresResigning=true, navigate to the solutionUrl to complete the signing process.

### Example

* Api Key Authentication (ApiKey):
* Bearer (JWT) Authentication (Bearer):

```python
import debitura_debt_collection
from debitura_debt_collection.models.debitura_web_external_customer_api_models_coverages_collection_contract_status_api_dto import DebituraWebExternalCustomerAPIModelsCoveragesCollectionContractStatusApiDTO
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
    api_instance = debitura_debt_collection.ContractsApi(api_client)

    try:
        # Get debt collection contract status
        api_response = api_instance.contracts_debt_collection_status_get()
        print("The response of ContractsApi->contracts_debt_collection_status_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContractsApi->contracts_debt_collection_status_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**DebituraWebExternalCustomerAPIModelsCoveragesCollectionContractStatusApiDTO**](DebituraWebExternalCustomerAPIModelsCoveragesCollectionContractStatusApiDTO.md)

### Authorization

[ApiKey](../README.md#ApiKey), [Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contract status returned |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

