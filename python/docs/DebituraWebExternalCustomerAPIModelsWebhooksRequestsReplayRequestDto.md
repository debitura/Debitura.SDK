# DebituraWebExternalCustomerAPIModelsWebhooksRequestsReplayRequestDto

Request to replay events from a specific timestamp.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**since_utc** | **datetime** | Replay all case.created events since this timestamp (UTC). | 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto import DebituraWebExternalCustomerAPIModelsWebhooksRequestsReplayRequestDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalCustomerAPIModelsWebhooksRequestsReplayRequestDto from a JSON string
debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto_instance = DebituraWebExternalCustomerAPIModelsWebhooksRequestsReplayRequestDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalCustomerAPIModelsWebhooksRequestsReplayRequestDto.to_json())

# convert the object into a dict
debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto_dict = debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto_instance.to_dict()
# create an instance of DebituraWebExternalCustomerAPIModelsWebhooksRequestsReplayRequestDto from a dict
debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto_from_dict = DebituraWebExternalCustomerAPIModelsWebhooksRequestsReplayRequestDto.from_dict(debitura_web_external_customer_api_models_webhooks_requests_replay_request_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


