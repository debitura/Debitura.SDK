# DebituraWebExternalApiContractsV1DivisionsUpdateDivisionRequestDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **str** |  | 
**registration_number** | **str** |  | [optional] 
**address** | **str** |  | [optional] 
**zip_code** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**city** | **str** |  | 
**country_code** | **str** |  | 
**office_email** | **str** |  | [optional] 
**office_phone** | **str** |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_divisions_update_division_request_dto import DebituraWebExternalApiContractsV1DivisionsUpdateDivisionRequestDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1DivisionsUpdateDivisionRequestDto from a JSON string
debitura_web_external_api_contracts_v1_divisions_update_division_request_dto_instance = DebituraWebExternalApiContractsV1DivisionsUpdateDivisionRequestDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1DivisionsUpdateDivisionRequestDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_divisions_update_division_request_dto_dict = debitura_web_external_api_contracts_v1_divisions_update_division_request_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1DivisionsUpdateDivisionRequestDto from a dict
debitura_web_external_api_contracts_v1_divisions_update_division_request_dto_from_dict = DebituraWebExternalApiContractsV1DivisionsUpdateDivisionRequestDto.from_dict(debitura_web_external_api_contracts_v1_divisions_update_division_request_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


