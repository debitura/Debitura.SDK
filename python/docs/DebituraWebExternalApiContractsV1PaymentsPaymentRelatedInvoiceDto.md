# DebituraWebExternalApiContractsV1PaymentsPaymentRelatedInvoiceDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** |  | 
**reference** | **str** |  | 
**invoice_id** | **str** |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_payments_payment_related_invoice_dto import DebituraWebExternalApiContractsV1PaymentsPaymentRelatedInvoiceDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1PaymentsPaymentRelatedInvoiceDto from a JSON string
debitura_web_external_api_contracts_v1_payments_payment_related_invoice_dto_instance = DebituraWebExternalApiContractsV1PaymentsPaymentRelatedInvoiceDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1PaymentsPaymentRelatedInvoiceDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_payments_payment_related_invoice_dto_dict = debitura_web_external_api_contracts_v1_payments_payment_related_invoice_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1PaymentsPaymentRelatedInvoiceDto from a dict
debitura_web_external_api_contracts_v1_payments_payment_related_invoice_dto_from_dict = DebituraWebExternalApiContractsV1PaymentsPaymentRelatedInvoiceDto.from_dict(debitura_web_external_api_contracts_v1_payments_payment_related_invoice_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


