# DebituraWebExternalApiContractsV1CasesInvoiceAllocationOutstandingDto

What is still open on the case in each part of the claim: principal, interest, reminder fees and collection fees. Each part is its total on the case minus the payments allocated to it, never below 0. Every payment is split across the parts in proportion to what is open in each just before it; a payment that clears the whole balance clears every part, and any excess counts as principal. Before any payment, principal equals grossAmount. Filled only on the Customer API's single-case reads (GET /cases/{id}, by creditor reference, by case reference); always null elsewhere. Also null when a payment on the case was recorded before this split was stored; such a case is normally filled from its next payment on.

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


