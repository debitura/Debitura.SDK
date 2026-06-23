# DebituraWebExternalApiContractsV1CasesFireWebhookResponse

Result of the `POST /test/webhooks/fire` endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_type** | **str** | The event type that was fired (e.g. \&quot;case.updated\&quot;). | [optional] 
**case_id** | **str** | The case ID the event was fired for. | [optional] 
**enqueued_count** | **int** | Number of webhook delivery jobs enqueued. Zero means no active test subscriptions were found for this event type. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_fire_webhook_response import DebituraWebExternalApiContractsV1CasesFireWebhookResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesFireWebhookResponse from a JSON string
debitura_web_external_api_contracts_v1_cases_fire_webhook_response_instance = DebituraWebExternalApiContractsV1CasesFireWebhookResponse.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesFireWebhookResponse.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_fire_webhook_response_dict = debitura_web_external_api_contracts_v1_cases_fire_webhook_response_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesFireWebhookResponse from a dict
debitura_web_external_api_contracts_v1_cases_fire_webhook_response_from_dict = DebituraWebExternalApiContractsV1CasesFireWebhookResponse.from_dict(debitura_web_external_api_contracts_v1_cases_fire_webhook_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


