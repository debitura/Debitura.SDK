# DebituraWebExternalApiContractsV1CasesContractItemDto

Status of an individual contract (SDCA, PoA, or Pricing Appendix).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signed** | **bool** | Whether the contract has been signed. | [optional] 
**requires_resigning** | **bool** | Whether the contract needs to be re-signed (e.g., due to contract template updates). | [optional] 
**solution_url** | **str** | URL where the creditor can sign or re-sign the contract. Null if the contract is signed and current. The URL is context-aware: referral partner tokens get referral onboarding URLs, regular API keys get standard creditor app URLs. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_contract_item_dto import DebituraWebExternalApiContractsV1CasesContractItemDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesContractItemDto from a JSON string
debitura_web_external_api_contracts_v1_cases_contract_item_dto_instance = DebituraWebExternalApiContractsV1CasesContractItemDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesContractItemDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_contract_item_dto_dict = debitura_web_external_api_contracts_v1_cases_contract_item_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesContractItemDto from a dict
debitura_web_external_api_contracts_v1_cases_contract_item_dto_from_dict = DebituraWebExternalApiContractsV1CasesContractItemDto.from_dict(debitura_web_external_api_contracts_v1_cases_contract_item_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


