# DebituraWebExternalApiContractsV1DivisionsDivisionListDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | [**DebituraDomainModelBasePageData**](DebituraDomainModelBasePageData.md) |  | 
**divisions** | [**List[DebituraWebExternalApiContractsV1DivisionsDivisionDto]**](DebituraWebExternalApiContractsV1DivisionsDivisionDto.md) |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_divisions_division_list_dto import DebituraWebExternalApiContractsV1DivisionsDivisionListDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1DivisionsDivisionListDto from a JSON string
debitura_web_external_api_contracts_v1_divisions_division_list_dto_instance = DebituraWebExternalApiContractsV1DivisionsDivisionListDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1DivisionsDivisionListDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_divisions_division_list_dto_dict = debitura_web_external_api_contracts_v1_divisions_division_list_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1DivisionsDivisionListDto from a dict
debitura_web_external_api_contracts_v1_divisions_division_list_dto_from_dict = DebituraWebExternalApiContractsV1DivisionsDivisionListDto.from_dict(debitura_web_external_api_contracts_v1_divisions_division_list_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


