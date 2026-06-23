# DebituraDomainServicesCaseValidationCaseValidationStatusDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**needs_info** | **bool** |  | [optional] 
**creditor_responded_at** | **datetime** |  | [optional] 
**items** | [**List[DebituraDomainServicesCaseValidationCaseValidationItemDto]**](DebituraDomainServicesCaseValidationCaseValidationItemDto.md) |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_domain_services_case_validation_case_validation_status_dto import DebituraDomainServicesCaseValidationCaseValidationStatusDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraDomainServicesCaseValidationCaseValidationStatusDto from a JSON string
debitura_domain_services_case_validation_case_validation_status_dto_instance = DebituraDomainServicesCaseValidationCaseValidationStatusDto.from_json(json)
# print the JSON string representation of the object
print(DebituraDomainServicesCaseValidationCaseValidationStatusDto.to_json())

# convert the object into a dict
debitura_domain_services_case_validation_case_validation_status_dto_dict = debitura_domain_services_case_validation_case_validation_status_dto_instance.to_dict()
# create an instance of DebituraDomainServicesCaseValidationCaseValidationStatusDto from a dict
debitura_domain_services_case_validation_case_validation_status_dto_from_dict = DebituraDomainServicesCaseValidationCaseValidationStatusDto.from_dict(debitura_domain_services_case_validation_case_validation_status_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


