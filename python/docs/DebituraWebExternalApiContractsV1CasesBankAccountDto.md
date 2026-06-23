# DebituraWebExternalApiContractsV1CasesBankAccountDto

Bank account information for partner API. Full details provided as partners need this to: 1. Provide payment instructions to debtors (when debtor pays client directly) 2. Execute payouts to clients (when partner receives payment and pays out remainder)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | Bank account identifier | [optional] 
**label** | **str** | User-friendly label (e.g., \&quot;Main EUR Account\&quot;) | [optional] 
**scheme** | **str** | Account scheme: IBAN, SWIFT, or LOCAL | [optional] 
**currency_code** | **str** | Currency code (ISO 4217) | [optional] 
**bank_country_code** | **str** | Bank country code (ISO Alpha-2) | [optional] 
**account_holder_name** | **str** | Account holder name (beneficiary) | [optional] 
**iban** | **str** | IBAN (for IBAN scheme accounts) | [optional] 
**bic** | **str** | BIC/SWIFT code (for IBAN and SWIFT scheme accounts) | [optional] 
**account_number** | **str** | Account number (for SWIFT and LOCAL scheme accounts) | [optional] 
**local_identifier** | **str** | Local identifier (for LOCAL scheme accounts, e.g., sort code + account number) | [optional] 
**local_identifier_type** | **str** | Type of local identifier (e.g., \&quot;Sort Code\&quot;, \&quot;Routing Number\&quot;) | [optional] 
**bank_name** | **str** | Bank name (optional) | [optional] 
**bank_address** | **str** | Bank address (optional) | [optional] 
**bank_city** | **str** | Bank city (optional) | [optional] 
**bank_zip_code** | **str** | Bank zip/postal code (optional) | [optional] 
**bank_state** | **str** | Bank state/region (optional) | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_bank_account_dto import DebituraWebExternalApiContractsV1CasesBankAccountDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesBankAccountDto from a JSON string
debitura_web_external_api_contracts_v1_cases_bank_account_dto_instance = DebituraWebExternalApiContractsV1CasesBankAccountDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesBankAccountDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_bank_account_dto_dict = debitura_web_external_api_contracts_v1_cases_bank_account_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesBankAccountDto from a dict
debitura_web_external_api_contracts_v1_cases_bank_account_dto_from_dict = DebituraWebExternalApiContractsV1CasesBankAccountDto.from_dict(debitura_web_external_api_contracts_v1_cases_bank_account_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


