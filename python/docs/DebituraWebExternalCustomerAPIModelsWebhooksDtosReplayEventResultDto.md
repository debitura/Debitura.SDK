# DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayEventResultDto

Result of replaying a specific webhook event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_id** | **str** | The ID of the event that was replayed. | [optional] 
**subscription_id** | **str** | The subscription the event was re-enqueued to. | [optional] 
**event_type** | **str** | The event type that was replayed. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_customer_api_models_webhooks_dtos_replay_event_result_dto import DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayEventResultDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayEventResultDto from a JSON string
debitura_web_external_customer_api_models_webhooks_dtos_replay_event_result_dto_instance = DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayEventResultDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayEventResultDto.to_json())

# convert the object into a dict
debitura_web_external_customer_api_models_webhooks_dtos_replay_event_result_dto_dict = debitura_web_external_customer_api_models_webhooks_dtos_replay_event_result_dto_instance.to_dict()
# create an instance of DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayEventResultDto from a dict
debitura_web_external_customer_api_models_webhooks_dtos_replay_event_result_dto_from_dict = DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayEventResultDto.from_dict(debitura_web_external_customer_api_models_webhooks_dtos_replay_event_result_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


