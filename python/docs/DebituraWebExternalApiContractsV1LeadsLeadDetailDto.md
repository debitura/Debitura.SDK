# DebituraWebExternalApiContractsV1LeadsLeadDetailDto

V1 Lead detail DTO for external customer APIs (detailed view)

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
**is_max_bid_count_reached** | **bool** |  | [optional] 
**outcome** | **str** |  | [optional] 
**request** | **str** |  | [optional] 
**existing_fees** | **str** |  | [optional] 
**date_created** | **datetime** |  | [optional] 
**date_qualified** | **datetime** |  | [optional] 
**leads_done_offered** | **datetime** |  | [optional] 
**date_reminder_sent** | **datetime** |  | [optional] 
**date_reminder_two_sent** | **datetime** |  | [optional] 
**date_outcome_selected** | **datetime** |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_leads_lead_detail_dto import DebituraWebExternalApiContractsV1LeadsLeadDetailDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1LeadsLeadDetailDto from a JSON string
debitura_web_external_api_contracts_v1_leads_lead_detail_dto_instance = DebituraWebExternalApiContractsV1LeadsLeadDetailDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1LeadsLeadDetailDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_leads_lead_detail_dto_dict = debitura_web_external_api_contracts_v1_leads_lead_detail_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1LeadsLeadDetailDto from a dict
debitura_web_external_api_contracts_v1_leads_lead_detail_dto_from_dict = DebituraWebExternalApiContractsV1LeadsLeadDetailDto.from_dict(debitura_web_external_api_contracts_v1_leads_lead_detail_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


