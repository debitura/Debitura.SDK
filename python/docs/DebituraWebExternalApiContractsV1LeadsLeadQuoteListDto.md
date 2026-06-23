# DebituraWebExternalApiContractsV1LeadsLeadQuoteListDto

V1 Lead Quote list response for external customer APIs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quotes** | [**List[DebituraWebExternalApiContractsV1LeadsLeadQuoteDto]**](DebituraWebExternalApiContractsV1LeadsLeadQuoteDto.md) |  | 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_leads_lead_quote_list_dto import DebituraWebExternalApiContractsV1LeadsLeadQuoteListDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1LeadsLeadQuoteListDto from a JSON string
debitura_web_external_api_contracts_v1_leads_lead_quote_list_dto_instance = DebituraWebExternalApiContractsV1LeadsLeadQuoteListDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1LeadsLeadQuoteListDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_leads_lead_quote_list_dto_dict = debitura_web_external_api_contracts_v1_leads_lead_quote_list_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1LeadsLeadQuoteListDto from a dict
debitura_web_external_api_contracts_v1_leads_lead_quote_list_dto_from_dict = DebituraWebExternalApiContractsV1LeadsLeadQuoteListDto.from_dict(debitura_web_external_api_contracts_v1_leads_lead_quote_list_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


