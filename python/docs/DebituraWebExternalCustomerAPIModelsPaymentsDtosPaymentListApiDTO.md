# DebituraWebExternalCustomerAPIModelsPaymentsDtosPaymentListApiDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | [**DebituraDomainModelBasePageData**](DebituraDomainModelBasePageData.md) |  | 
**payments** | [**List[DebituraWebExternalApiContractsV1PaymentsPaymentDto]**](DebituraWebExternalApiContractsV1PaymentsPaymentDto.md) |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_customer_api_models_payments_dtos_payment_list_api_dto import DebituraWebExternalCustomerAPIModelsPaymentsDtosPaymentListApiDTO

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalCustomerAPIModelsPaymentsDtosPaymentListApiDTO from a JSON string
debitura_web_external_customer_api_models_payments_dtos_payment_list_api_dto_instance = DebituraWebExternalCustomerAPIModelsPaymentsDtosPaymentListApiDTO.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalCustomerAPIModelsPaymentsDtosPaymentListApiDTO.to_json())

# convert the object into a dict
debitura_web_external_customer_api_models_payments_dtos_payment_list_api_dto_dict = debitura_web_external_customer_api_models_payments_dtos_payment_list_api_dto_instance.to_dict()
# create an instance of DebituraWebExternalCustomerAPIModelsPaymentsDtosPaymentListApiDTO from a dict
debitura_web_external_customer_api_models_payments_dtos_payment_list_api_dto_from_dict = DebituraWebExternalCustomerAPIModelsPaymentsDtosPaymentListApiDTO.from_dict(debitura_web_external_customer_api_models_payments_dtos_payment_list_api_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


