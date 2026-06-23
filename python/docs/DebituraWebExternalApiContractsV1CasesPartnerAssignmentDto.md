# DebituraWebExternalApiContractsV1CasesPartnerAssignmentDto

Information about the collection partner assigned to this case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection_partner_id** | **str** | Unique identifier for the collection partner. | [optional] 
**partner_name** | **str** | Display name of the collection partner company. | [optional] 
**partner_country** | **str** | ISO 3166-1 alpha-2 country code for the partner&#39;s primary country. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_partner_assignment_dto import DebituraWebExternalApiContractsV1CasesPartnerAssignmentDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesPartnerAssignmentDto from a JSON string
debitura_web_external_api_contracts_v1_cases_partner_assignment_dto_instance = DebituraWebExternalApiContractsV1CasesPartnerAssignmentDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesPartnerAssignmentDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_partner_assignment_dto_dict = debitura_web_external_api_contracts_v1_cases_partner_assignment_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesPartnerAssignmentDto from a dict
debitura_web_external_api_contracts_v1_cases_partner_assignment_dto_from_dict = DebituraWebExternalApiContractsV1CasesPartnerAssignmentDto.from_dict(debitura_web_external_api_contracts_v1_cases_partner_assignment_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


