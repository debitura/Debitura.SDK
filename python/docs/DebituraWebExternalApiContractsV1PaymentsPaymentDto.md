# DebituraWebExternalApiContractsV1PaymentsPaymentDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**date_created** | **datetime** |  | [optional] 
**date_updated** | **datetime** |  | [optional] 
**var_date** | **datetime** |  | [optional] 
**gross_amount** | **float** |  | [optional] 
**recipient** | **str** |  | 
**method** | **str** |  | 
**currency** | **str** |  | 
**invoice** | [**DebituraWebExternalApiContractsV1PaymentsPaymentRelatedInvoiceDto**](DebituraWebExternalApiContractsV1PaymentsPaymentRelatedInvoiceDto.md) |  | 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_payments_payment_dto import DebituraWebExternalApiContractsV1PaymentsPaymentDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1PaymentsPaymentDto from a JSON string
debitura_web_external_api_contracts_v1_payments_payment_dto_instance = DebituraWebExternalApiContractsV1PaymentsPaymentDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1PaymentsPaymentDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_payments_payment_dto_dict = debitura_web_external_api_contracts_v1_payments_payment_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1PaymentsPaymentDto from a dict
debitura_web_external_api_contracts_v1_payments_payment_dto_from_dict = DebituraWebExternalApiContractsV1PaymentsPaymentDto.from_dict(debitura_web_external_api_contracts_v1_payments_payment_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


