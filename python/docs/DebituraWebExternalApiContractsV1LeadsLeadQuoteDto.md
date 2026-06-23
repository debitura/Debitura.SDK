# DebituraWebExternalApiContractsV1LeadsLeadQuoteDto

V1 Lead Quote DTO for external customer APIs (summary view)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quote_id** | **str** |  | [optional] 
**quote_request_id** | **str** |  | [optional] 
**partner_id** | **str** |  | [optional] 
**partner_name** | **str** |  | 
**status** | **str** |  | 
**agreement_type** | **str** |  | 
**hourly_rate** | **float** |  | [optional] 
**hourly_estimated** | **float** |  | [optional] 
**flat_fee_estimate** | **float** |  | [optional] 
**success_fee** | **float** |  | [optional] 
**hybrid_estimate** | **float** |  | [optional] 
**proposed_solution** | **str** |  | [optional] 
**partner_why_us_section** | **str** |  | [optional] 
**currency** | **str** |  | 
**date_created** | **datetime** |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_leads_lead_quote_dto import DebituraWebExternalApiContractsV1LeadsLeadQuoteDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1LeadsLeadQuoteDto from a JSON string
debitura_web_external_api_contracts_v1_leads_lead_quote_dto_instance = DebituraWebExternalApiContractsV1LeadsLeadQuoteDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1LeadsLeadQuoteDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_leads_lead_quote_dto_dict = debitura_web_external_api_contracts_v1_leads_lead_quote_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1LeadsLeadQuoteDto from a dict
debitura_web_external_api_contracts_v1_leads_lead_quote_dto_from_dict = DebituraWebExternalApiContractsV1LeadsLeadQuoteDto.from_dict(debitura_web_external_api_contracts_v1_leads_lead_quote_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


