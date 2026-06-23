# DebituraWebExternalApiContractsV1LeadsLeadListDto

V1 Lead list response for external customer APIs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quote_requests** | [**List[DebituraWebExternalApiContractsV1LeadsLeadDto]**](DebituraWebExternalApiContractsV1LeadsLeadDto.md) |  | 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_leads_lead_list_dto import DebituraWebExternalApiContractsV1LeadsLeadListDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1LeadsLeadListDto from a JSON string
debitura_web_external_api_contracts_v1_leads_lead_list_dto_instance = DebituraWebExternalApiContractsV1LeadsLeadListDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1LeadsLeadListDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_leads_lead_list_dto_dict = debitura_web_external_api_contracts_v1_leads_lead_list_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1LeadsLeadListDto from a dict
debitura_web_external_api_contracts_v1_leads_lead_list_dto_from_dict = DebituraWebExternalApiContractsV1LeadsLeadListDto.from_dict(debitura_web_external_api_contracts_v1_leads_lead_list_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


