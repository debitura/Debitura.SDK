# DebituraWebExternalApiContractsV1CasesCollectionPartnerDto

V1 Collection Partner DTO for external partner APIs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**office_email** | **str** |  | [optional] 
**office_phone** | **str** |  | [optional] 
**public_site** | **str** |  | [optional] 
**survey_cadence_mode** | [**DebituraDomainModelCollectionPartnerLogicsCollectionPartnersSurveyCadenceMode**](DebituraDomainModelCollectionPartnerLogicsCollectionPartnersSurveyCadenceMode.md) |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_collection_partner_dto import DebituraWebExternalApiContractsV1CasesCollectionPartnerDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesCollectionPartnerDto from a JSON string
debitura_web_external_api_contracts_v1_cases_collection_partner_dto_instance = DebituraWebExternalApiContractsV1CasesCollectionPartnerDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesCollectionPartnerDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_collection_partner_dto_dict = debitura_web_external_api_contracts_v1_cases_collection_partner_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesCollectionPartnerDto from a dict
debitura_web_external_api_contracts_v1_cases_collection_partner_dto_from_dict = DebituraWebExternalApiContractsV1CasesCollectionPartnerDto.from_dict(debitura_web_external_api_contracts_v1_cases_collection_partner_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


