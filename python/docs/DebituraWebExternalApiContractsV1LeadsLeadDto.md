# DebituraWebExternalApiContractsV1LeadsLeadDto

V1 Lead DTO for external customer APIs (summary view)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quote_request_id** | **str** |  | [optional] 
**case_id** | **str** |  | [optional] 
**status** | **str** |  | 
**lead_flow_status** | **str** |  | 
**quote_type** | **str** |  | 
**max_quotes** | **int** |  | [optional] 
**current_quotes_count** | **int** |  | [optional] 
**outcome** | **str** |  | [optional] 
**date_created** | **datetime** |  | [optional] 
**date_qualified** | **datetime** |  | [optional] 
**leads_done_offered** | **datetime** |  | [optional] 
**date_reminder_sent** | **datetime** |  | [optional] 
**date_reminder_two_sent** | **datetime** |  | [optional] 
**date_outcome_selected** | **datetime** |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_leads_lead_dto import DebituraWebExternalApiContractsV1LeadsLeadDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1LeadsLeadDto from a JSON string
debitura_web_external_api_contracts_v1_leads_lead_dto_instance = DebituraWebExternalApiContractsV1LeadsLeadDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1LeadsLeadDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_leads_lead_dto_dict = debitura_web_external_api_contracts_v1_leads_lead_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1LeadsLeadDto from a dict
debitura_web_external_api_contracts_v1_leads_lead_dto_from_dict = DebituraWebExternalApiContractsV1LeadsLeadDto.from_dict(debitura_web_external_api_contracts_v1_leads_lead_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


