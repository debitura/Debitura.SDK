# DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayResultDto

Result of a webhook event replay operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events_replayed** | **int** | Number of events that were re-enqueued for delivery. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_customer_api_models_webhooks_dtos_replay_result_dto import DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayResultDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayResultDto from a JSON string
debitura_web_external_customer_api_models_webhooks_dtos_replay_result_dto_instance = DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayResultDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayResultDto.to_json())

# convert the object into a dict
debitura_web_external_customer_api_models_webhooks_dtos_replay_result_dto_dict = debitura_web_external_customer_api_models_webhooks_dtos_replay_result_dto_instance.to_dict()
# create an instance of DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayResultDto from a dict
debitura_web_external_customer_api_models_webhooks_dtos_replay_result_dto_from_dict = DebituraWebExternalCustomerAPIModelsWebhooksDtosReplayResultDto.from_dict(debitura_web_external_customer_api_models_webhooks_dtos_replay_result_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


