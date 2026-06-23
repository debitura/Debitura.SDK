# DebituraWebExternalApiContractsV1LeadsLeadQuoteDetailDto

V1 Lead Quote detail DTO for external customer APIs (detailed view)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quote_id** | **str** |  | [optional] 
**quote_request_id** | **str** |  | [optional] 
**partner_id** | **str** |  | [optional] 
**partner_name** | **str** |  | 
**status** | **str** |  | 
**agreement_type** | **str** |  | 
**pricing** | [**DebituraWebExternalApiContractsV1LeadsLeadQuotePricingDto**](DebituraWebExternalApiContractsV1LeadsLeadQuotePricingDto.md) |  | 
**currency** | **str** |  | 
**proposed_solution** | **str** |  | [optional] 
**fee_comments** | **str** |  | [optional] 
**partner_why_us_section** | **str** |  | [optional] 
**full_quote_link** | **str** |  | [optional] 
**date_created** | **datetime** |  | [optional] 
**date_updated** | **datetime** |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_leads_lead_quote_detail_dto import DebituraWebExternalApiContractsV1LeadsLeadQuoteDetailDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1LeadsLeadQuoteDetailDto from a JSON string
debitura_web_external_api_contracts_v1_leads_lead_quote_detail_dto_instance = DebituraWebExternalApiContractsV1LeadsLeadQuoteDetailDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1LeadsLeadQuoteDetailDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_leads_lead_quote_detail_dto_dict = debitura_web_external_api_contracts_v1_leads_lead_quote_detail_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1LeadsLeadQuoteDetailDto from a dict
debitura_web_external_api_contracts_v1_leads_lead_quote_detail_dto_from_dict = DebituraWebExternalApiContractsV1LeadsLeadQuoteDetailDto.from_dict(debitura_web_external_api_contracts_v1_leads_lead_quote_detail_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


