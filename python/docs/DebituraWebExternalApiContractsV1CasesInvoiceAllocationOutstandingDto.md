# DebituraWebExternalApiContractsV1CasesInvoiceAllocationOutstandingDto

Additive external-API read model. Per-bucket outstanding on the debt ledger, produced by the payment allocation engine (bucket total minus Σ active stored allocations — never re-derived from a model). Mirrors the internal `Debitura.Domain.Model.Receiveables.InvoiceEconomics.EconomicalAllocationOutstanding` shape.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal** | **float** |  | [optional] 
**interest** | **float** |  | [optional] 
**reminder_fees** | **float** |  | [optional] 
**collection_fees** | **float** |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_invoice_allocation_outstanding_dto import DebituraWebExternalApiContractsV1CasesInvoiceAllocationOutstandingDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesInvoiceAllocationOutstandingDto from a JSON string
debitura_web_external_api_contracts_v1_cases_invoice_allocation_outstanding_dto_instance = DebituraWebExternalApiContractsV1CasesInvoiceAllocationOutstandingDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesInvoiceAllocationOutstandingDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_invoice_allocation_outstanding_dto_dict = debitura_web_external_api_contracts_v1_cases_invoice_allocation_outstanding_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesInvoiceAllocationOutstandingDto from a dict
debitura_web_external_api_contracts_v1_cases_invoice_allocation_outstanding_dto_from_dict = DebituraWebExternalApiContractsV1CasesInvoiceAllocationOutstandingDto.from_dict(debitura_web_external_api_contracts_v1_cases_invoice_allocation_outstanding_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


