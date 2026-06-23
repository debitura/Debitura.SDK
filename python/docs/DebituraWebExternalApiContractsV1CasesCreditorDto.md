# DebituraWebExternalApiContractsV1CasesCreditorDto

Creditor (client) information for external partner APIs. Represents the party that the debtor owes money to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the creditor | [optional] 
**company_name** | **str** | Company name of the creditor | [optional] 
**company_registration_number** | **str** | Company registration number (CVR, VAT number, etc.) | [optional] 
**office_email** | **str** | Primary office email address | [optional] 
**office_phone** | **str** | Primary office phone number | [optional] 
**address** | **str** | Street address | [optional] 
**city** | **str** | City | [optional] 
**zip_code** | **str** | Postal/ZIP code | [optional] 
**state** | **str** | State or region (if applicable) | [optional] 
**country** | **str** | Country name | [optional] 
**division** | [**DebituraWebExternalApiContractsV1CasesCreditorDivisionDto**](DebituraWebExternalApiContractsV1CasesCreditorDivisionDto.md) |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_creditor_dto import DebituraWebExternalApiContractsV1CasesCreditorDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesCreditorDto from a JSON string
debitura_web_external_api_contracts_v1_cases_creditor_dto_instance = DebituraWebExternalApiContractsV1CasesCreditorDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesCreditorDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_creditor_dto_dict = debitura_web_external_api_contracts_v1_cases_creditor_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesCreditorDto from a dict
debitura_web_external_api_contracts_v1_cases_creditor_dto_from_dict = DebituraWebExternalApiContractsV1CasesCreditorDto.from_dict(debitura_web_external_api_contracts_v1_cases_creditor_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


