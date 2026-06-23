# DebituraWebExternalApiContractsV1CasesInvoiceListDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | [**DebituraDomainModelBasePageData**](DebituraDomainModelBasePageData.md) |  | 
**cases** | [**List[DebituraWebExternalApiContractsV1CasesInvoiceDto]**](DebituraWebExternalApiContractsV1CasesInvoiceDto.md) |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_invoice_list_dto import DebituraWebExternalApiContractsV1CasesInvoiceListDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesInvoiceListDto from a JSON string
debitura_web_external_api_contracts_v1_cases_invoice_list_dto_instance = DebituraWebExternalApiContractsV1CasesInvoiceListDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesInvoiceListDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_invoice_list_dto_dict = debitura_web_external_api_contracts_v1_cases_invoice_list_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesInvoiceListDto from a dict
debitura_web_external_api_contracts_v1_cases_invoice_list_dto_from_dict = DebituraWebExternalApiContractsV1CasesInvoiceListDto.from_dict(debitura_web_external_api_contracts_v1_cases_invoice_list_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


