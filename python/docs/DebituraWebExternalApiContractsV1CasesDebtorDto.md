# DebituraWebExternalApiContractsV1CasesDebtorDto

V1 Debtor DTO for external partner APIs. The debtor is the party that owes the debt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Debtor type. Valid values: \&quot;Company\&quot; or \&quot;Person\&quot; | 
**name** | **str** | Debtor name (company name or person&#39;s full name) | 
**contact_person** | **str** | Contact person at the company (required for companies, not used for persons) | [optional] 
**company_registration_number** | **str** | Company registration number (VAT number, CVR, org number, etc.) | [optional] 
**address** | **str** | Street address | [optional] 
**zip_code** | **str** | Postal/ZIP code | [optional] 
**city** | **str** | City name | [optional] 
**state** | **str** | State/region/province name | [optional] 
**state_alpha2** | **str** | US state: two-letter code (e.g., \&quot;CA\&quot;), ISO 3166-2 format (e.g., \&quot;US-CA\&quot;), or full name (e.g., \&quot;California\&quot;) | [optional] 
**country_alpha2** | **str** | Country code (ISO 3166-1 alpha-2 format) | [optional] 
**country** | **str** | Country name | [optional] 
**email** | **str** | Email address for debtor contact | [optional] 
**phone** | **str** | Phone number (include country code) | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_debtor_dto import DebituraWebExternalApiContractsV1CasesDebtorDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesDebtorDto from a JSON string
debitura_web_external_api_contracts_v1_cases_debtor_dto_instance = DebituraWebExternalApiContractsV1CasesDebtorDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesDebtorDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_debtor_dto_dict = debitura_web_external_api_contracts_v1_cases_debtor_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesDebtorDto from a dict
debitura_web_external_api_contracts_v1_cases_debtor_dto_from_dict = DebituraWebExternalApiContractsV1CasesDebtorDto.from_dict(debitura_web_external_api_contracts_v1_cases_debtor_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


