# DebituraWebExternalApiContractsV1LeadsLeadQuotePricingDto

Nested pricing details for a lead quote

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hourly_rate** | **float** |  | [optional] 
**hourly_estimated** | **float** |  | [optional] 
**flat_fee_estimate** | **float** |  | [optional] 
**success_fee_fee** | **float** |  | [optional] 
**hybrid_estimate** | **float** |  | [optional] 
**cost_process_misc** | **float** |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_leads_lead_quote_pricing_dto import DebituraWebExternalApiContractsV1LeadsLeadQuotePricingDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1LeadsLeadQuotePricingDto from a JSON string
debitura_web_external_api_contracts_v1_leads_lead_quote_pricing_dto_instance = DebituraWebExternalApiContractsV1LeadsLeadQuotePricingDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1LeadsLeadQuotePricingDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_leads_lead_quote_pricing_dto_dict = debitura_web_external_api_contracts_v1_leads_lead_quote_pricing_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1LeadsLeadQuotePricingDto from a dict
debitura_web_external_api_contracts_v1_leads_lead_quote_pricing_dto_from_dict = DebituraWebExternalApiContractsV1LeadsLeadQuotePricingDto.from_dict(debitura_web_external_api_contracts_v1_leads_lead_quote_pricing_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


