# DebituraDomainModelWebhooksDtosUpdateWebhookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** |  | [optional] 
**events** | **List[str]** |  | [optional] 
**is_active** | **bool** |  | [optional] 
**regenerate_secret** | **bool** |  | [optional] 
**is_test_mode** | **bool** |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_domain_model_webhooks_dtos_update_webhook_request import DebituraDomainModelWebhooksDtosUpdateWebhookRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraDomainModelWebhooksDtosUpdateWebhookRequest from a JSON string
debitura_domain_model_webhooks_dtos_update_webhook_request_instance = DebituraDomainModelWebhooksDtosUpdateWebhookRequest.from_json(json)
# print the JSON string representation of the object
print(DebituraDomainModelWebhooksDtosUpdateWebhookRequest.to_json())

# convert the object into a dict
debitura_domain_model_webhooks_dtos_update_webhook_request_dict = debitura_domain_model_webhooks_dtos_update_webhook_request_instance.to_dict()
# create an instance of DebituraDomainModelWebhooksDtosUpdateWebhookRequest from a dict
debitura_domain_model_webhooks_dtos_update_webhook_request_from_dict = DebituraDomainModelWebhooksDtosUpdateWebhookRequest.from_dict(debitura_domain_model_webhooks_dtos_update_webhook_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


