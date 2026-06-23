# DebituraWebExternalApiContractsV1DivisionsDivisionDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**company_name** | **str** |  | [optional] 
**registration_number** | **str** |  | [optional] 
**address** | **str** |  | [optional] 
**zip_code** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**country** | [**DebituraWebExternalApiContractsV1DivisionsDivisionCountryDto**](DebituraWebExternalApiContractsV1DivisionsDivisionCountryDto.md) |  | [optional] 
**office_email** | **str** |  | [optional] 
**office_phone** | **str** |  | [optional] 
**is_archived** | **bool** |  | [optional] 
**created_utc** | **datetime** |  | [optional] 
**updated_utc** | **datetime** |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_divisions_division_dto import DebituraWebExternalApiContractsV1DivisionsDivisionDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1DivisionsDivisionDto from a JSON string
debitura_web_external_api_contracts_v1_divisions_division_dto_instance = DebituraWebExternalApiContractsV1DivisionsDivisionDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1DivisionsDivisionDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_divisions_division_dto_dict = debitura_web_external_api_contracts_v1_divisions_division_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1DivisionsDivisionDto from a dict
debitura_web_external_api_contracts_v1_divisions_division_dto_from_dict = DebituraWebExternalApiContractsV1DivisionsDivisionDto.from_dict(debitura_web_external_api_contracts_v1_divisions_division_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


