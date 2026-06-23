# DebituraDomainModelWebhooksDtosCreateWebhookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** |  | 
**events** | **List[str]** |  | 
**is_test_mode** | **bool** |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_domain_model_webhooks_dtos_create_webhook_request import DebituraDomainModelWebhooksDtosCreateWebhookRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraDomainModelWebhooksDtosCreateWebhookRequest from a JSON string
debitura_domain_model_webhooks_dtos_create_webhook_request_instance = DebituraDomainModelWebhooksDtosCreateWebhookRequest.from_json(json)
# print the JSON string representation of the object
print(DebituraDomainModelWebhooksDtosCreateWebhookRequest.to_json())

# convert the object into a dict
debitura_domain_model_webhooks_dtos_create_webhook_request_dict = debitura_domain_model_webhooks_dtos_create_webhook_request_instance.to_dict()
# create an instance of DebituraDomainModelWebhooksDtosCreateWebhookRequest from a dict
debitura_domain_model_webhooks_dtos_create_webhook_request_from_dict = DebituraDomainModelWebhooksDtosCreateWebhookRequest.from_dict(debitura_domain_model_webhooks_dtos_create_webhook_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


