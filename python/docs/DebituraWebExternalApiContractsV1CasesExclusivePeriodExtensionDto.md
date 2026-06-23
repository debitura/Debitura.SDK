# DebituraWebExternalApiContractsV1CasesExclusivePeriodExtensionDto

A single extension event in the exclusive period chain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | What triggered this extension: PromiseToPay, PaymentAgreement, Payment, or Manual. | [optional] 
**event_date** | **datetime** | When the extension period started (i.e. when the trigger event occurred). | [optional] 
**new_end_date** | **datetime** | The new period end date after this extension was applied. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_exclusive_period_extension_dto import DebituraWebExternalApiContractsV1CasesExclusivePeriodExtensionDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesExclusivePeriodExtensionDto from a JSON string
debitura_web_external_api_contracts_v1_cases_exclusive_period_extension_dto_instance = DebituraWebExternalApiContractsV1CasesExclusivePeriodExtensionDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesExclusivePeriodExtensionDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_exclusive_period_extension_dto_dict = debitura_web_external_api_contracts_v1_cases_exclusive_period_extension_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesExclusivePeriodExtensionDto from a dict
debitura_web_external_api_contracts_v1_cases_exclusive_period_extension_dto_from_dict = DebituraWebExternalApiContractsV1CasesExclusivePeriodExtensionDto.from_dict(debitura_web_external_api_contracts_v1_cases_exclusive_period_extension_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


