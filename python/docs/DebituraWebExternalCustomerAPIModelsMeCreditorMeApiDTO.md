# DebituraWebExternalCustomerAPIModelsMeCreditorMeApiDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**company_name** | **str** |  | 
**company_registration_number** | **str** |  | [optional] 
**address** | **str** |  | [optional] 
**zip_code** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**office_email** | **str** |  | [optional] 
**office_phone** | **str** |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_customer_api_models_me_creditor_me_api_dto import DebituraWebExternalCustomerAPIModelsMeCreditorMeApiDTO

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalCustomerAPIModelsMeCreditorMeApiDTO from a JSON string
debitura_web_external_customer_api_models_me_creditor_me_api_dto_instance = DebituraWebExternalCustomerAPIModelsMeCreditorMeApiDTO.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalCustomerAPIModelsMeCreditorMeApiDTO.to_json())

# convert the object into a dict
debitura_web_external_customer_api_models_me_creditor_me_api_dto_dict = debitura_web_external_customer_api_models_me_creditor_me_api_dto_instance.to_dict()
# create an instance of DebituraWebExternalCustomerAPIModelsMeCreditorMeApiDTO from a dict
debitura_web_external_customer_api_models_me_creditor_me_api_dto_from_dict = DebituraWebExternalCustomerAPIModelsMeCreditorMeApiDTO.from_dict(debitura_web_external_customer_api_models_me_creditor_me_api_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


