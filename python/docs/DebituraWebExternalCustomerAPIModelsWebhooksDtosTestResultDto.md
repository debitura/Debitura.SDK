# DebituraWebExternalCustomerAPIModelsWebhooksDtosTestResultDto

Result of a webhook test delivery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** | Whether the test delivery was successful. | [optional] 
**http_status_code** | **int** | HTTP status code returned by the webhook endpoint. | [optional] 
**duration_ms** | **int** | Duration of the HTTP request in milliseconds. | [optional] 
**error_message** | **str** | Error message if the delivery failed. | [optional] 
**error_category** | **str** | Category of the error (TimeoutError, NetworkError, SslError, HttpError, UnknownError). | [optional] 
**test_payload** | **object** | The test event payload that was sent. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_customer_api_models_webhooks_dtos_test_result_dto import DebituraWebExternalCustomerAPIModelsWebhooksDtosTestResultDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalCustomerAPIModelsWebhooksDtosTestResultDto from a JSON string
debitura_web_external_customer_api_models_webhooks_dtos_test_result_dto_instance = DebituraWebExternalCustomerAPIModelsWebhooksDtosTestResultDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalCustomerAPIModelsWebhooksDtosTestResultDto.to_json())

# convert the object into a dict
debitura_web_external_customer_api_models_webhooks_dtos_test_result_dto_dict = debitura_web_external_customer_api_models_webhooks_dtos_test_result_dto_instance.to_dict()
# create an instance of DebituraWebExternalCustomerAPIModelsWebhooksDtosTestResultDto from a dict
debitura_web_external_customer_api_models_webhooks_dtos_test_result_dto_from_dict = DebituraWebExternalCustomerAPIModelsWebhooksDtosTestResultDto.from_dict(debitura_web_external_customer_api_models_webhooks_dtos_test_result_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


