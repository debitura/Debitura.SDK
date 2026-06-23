# DebituraWebExternalCustomerAPIModelsWebhooksDtosWebhookEventDto

Represents a recorded webhook delivery event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for this event record. Use this ID to replay the event via &#x60;POST /webhooks/events/{id}/replay&#x60;. | [optional] 
**subscription_id** | **str** | The webhook subscription this event was dispatched to. | [optional] 
**case_id** | **str** | The collection case this event relates to. | [optional] 
**event_type** | **str** | The event type (e.g. \&quot;case.created\&quot;, \&quot;payment.created\&quot;). | [optional] 
**payload** | **str** | The full JSON payload that was (or will be) delivered. | [optional] 
**created_at** | **datetime** | When this event was first recorded (UTC). | [optional] 
**delivered_at** | **datetime** | When the event was successfully delivered (UTC). Null if delivery has not yet succeeded. | [optional] 
**attempt_count** | **int** | Number of delivery attempts made so far. | [optional] 
**last_response_code** | **int** | HTTP status code returned by the subscriber endpoint on the last attempt. | [optional] 
**last_error** | **str** | Error message from the last failed delivery attempt. Null on successful delivery. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_customer_api_models_webhooks_dtos_webhook_event_dto import DebituraWebExternalCustomerAPIModelsWebhooksDtosWebhookEventDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalCustomerAPIModelsWebhooksDtosWebhookEventDto from a JSON string
debitura_web_external_customer_api_models_webhooks_dtos_webhook_event_dto_instance = DebituraWebExternalCustomerAPIModelsWebhooksDtosWebhookEventDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalCustomerAPIModelsWebhooksDtosWebhookEventDto.to_json())

# convert the object into a dict
debitura_web_external_customer_api_models_webhooks_dtos_webhook_event_dto_dict = debitura_web_external_customer_api_models_webhooks_dtos_webhook_event_dto_instance.to_dict()
# create an instance of DebituraWebExternalCustomerAPIModelsWebhooksDtosWebhookEventDto from a dict
debitura_web_external_customer_api_models_webhooks_dtos_webhook_event_dto_from_dict = DebituraWebExternalCustomerAPIModelsWebhooksDtosWebhookEventDto.from_dict(debitura_web_external_customer_api_models_webhooks_dtos_webhook_event_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


