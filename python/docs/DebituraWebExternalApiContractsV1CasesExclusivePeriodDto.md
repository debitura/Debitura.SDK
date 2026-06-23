# DebituraWebExternalApiContractsV1CasesExclusivePeriodDto

Full exclusive collection period chain for a case. Returned by GET /cases/{id}/exclusive-period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**engagement_start_date** | **datetime** | Start date of the initial exclusivity engagement. | [optional] 
**current_end_date** | **datetime** | Current end date of the exclusive period (after any extensions). | [optional] 
**days_remaining** | **int** | Days remaining until the period ends. Negative when the period has naturally expired. Zero when the engagement was terminated early (partner change or withdrawal), regardless of the original end date. | [optional] 
**status** | **str** | Current status of the exclusive period: Active, Expired, or Terminated. Active — partner has exclusive rights. Expired — period ended naturally (time elapsed or case resolved). Terminated — period was ended early (partner change, withdrawal, etc.). | [optional] 
**extensions** | [**List[DebituraWebExternalApiContractsV1CasesExclusivePeriodExtensionDto]**](DebituraWebExternalApiContractsV1CasesExclusivePeriodExtensionDto.md) | Each extension event that occurred within the current engagement, in chronological order. Empty for cases that have never had an extension triggered. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_exclusive_period_dto import DebituraWebExternalApiContractsV1CasesExclusivePeriodDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesExclusivePeriodDto from a JSON string
debitura_web_external_api_contracts_v1_cases_exclusive_period_dto_instance = DebituraWebExternalApiContractsV1CasesExclusivePeriodDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesExclusivePeriodDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_exclusive_period_dto_dict = debitura_web_external_api_contracts_v1_cases_exclusive_period_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesExclusivePeriodDto from a dict
debitura_web_external_api_contracts_v1_cases_exclusive_period_dto_from_dict = DebituraWebExternalApiContractsV1CasesExclusivePeriodDto.from_dict(debitura_web_external_api_contracts_v1_cases_exclusive_period_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


