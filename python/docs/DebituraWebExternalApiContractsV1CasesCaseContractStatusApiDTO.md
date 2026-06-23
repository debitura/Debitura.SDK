# DebituraWebExternalApiContractsV1CasesCaseContractStatusApiDTO

Contract signing status for a case, showing SDCA and PoA status with signing URLs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sdca** | [**DebituraWebExternalApiContractsV1CasesContractItemDto**](DebituraWebExternalApiContractsV1CasesContractItemDto.md) |  | [optional] 
**poa** | [**DebituraWebExternalApiContractsV1CasesContractItemDto**](DebituraWebExternalApiContractsV1CasesContractItemDto.md) |  | [optional] 
**pricing_appendix** | [**DebituraWebExternalApiContractsV1CasesContractItemDto**](DebituraWebExternalApiContractsV1CasesContractItemDto.md) |  | [optional] 
**collection_partner_name** | **str** | Name of the assigned collection partner, if any. | [optional] 
**needs_poa_signing** | **bool** | Whether the creditor needs to sign (or re-sign) a Power of Attorney. True when: POA is missing or stale, OR the debtor&#39;s country has an active jurisdiction pricing zone and the Jurisdiction Pricing Appendix (presented as POA) is missing or stale. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_case_contract_status_api_dto import DebituraWebExternalApiContractsV1CasesCaseContractStatusApiDTO

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesCaseContractStatusApiDTO from a JSON string
debitura_web_external_api_contracts_v1_cases_case_contract_status_api_dto_instance = DebituraWebExternalApiContractsV1CasesCaseContractStatusApiDTO.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesCaseContractStatusApiDTO.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_case_contract_status_api_dto_dict = debitura_web_external_api_contracts_v1_cases_case_contract_status_api_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesCaseContractStatusApiDTO from a dict
debitura_web_external_api_contracts_v1_cases_case_contract_status_api_dto_from_dict = DebituraWebExternalApiContractsV1CasesCaseContractStatusApiDTO.from_dict(debitura_web_external_api_contracts_v1_cases_case_contract_status_api_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


