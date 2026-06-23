# DebituraDomainModelWebhooksDtosWebhookDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**events** | **List[str]** |  | [optional] 
**is_active** | **bool** |  | [optional] 
**created_utc** | **datetime** |  | [optional] 
**updated_utc** | **datetime** |  | [optional] 
**disabled_reason** | **str** |  | [optional] 
**secret** | **str** |  | [optional] 
**is_test_mode** | **bool** |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_domain_model_webhooks_dtos_webhook_dto import DebituraDomainModelWebhooksDtosWebhookDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraDomainModelWebhooksDtosWebhookDto from a JSON string
debitura_domain_model_webhooks_dtos_webhook_dto_instance = DebituraDomainModelWebhooksDtosWebhookDto.from_json(json)
# print the JSON string representation of the object
print(DebituraDomainModelWebhooksDtosWebhookDto.to_json())

# convert the object into a dict
debitura_domain_model_webhooks_dtos_webhook_dto_dict = debitura_domain_model_webhooks_dtos_webhook_dto_instance.to_dict()
# create an instance of DebituraDomainModelWebhooksDtosWebhookDto from a dict
debitura_domain_model_webhooks_dtos_webhook_dto_from_dict = DebituraDomainModelWebhooksDtosWebhookDto.from_dict(debitura_domain_model_webhooks_dtos_webhook_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


