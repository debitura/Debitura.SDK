# DebituraWebExternalApiContractsV1CasesCaseTimelineResponse

Response envelope for GET /cases/{id}/timeline. Wraps the chronological event list with case-level context that cannot be expressed as a single timeline entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[DebituraWebExternalApiContractsV1CasesTimelineItemDto]**](DebituraWebExternalApiContractsV1CasesTimelineItemDto.md) | Chronological list of events on the case. | 
**current_engagement_phase** | **str** | The current engagement phase of the case, sourced from CaseEngagement.CurrentPhase. Possible values: \&quot;Pre-legal\&quot;, \&quot;Legal\&quot;, \&quot;Enforcement\&quot;. Null when no active engagement exists (e.g. case not yet assigned to a partner). | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_case_timeline_response import DebituraWebExternalApiContractsV1CasesCaseTimelineResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesCaseTimelineResponse from a JSON string
debitura_web_external_api_contracts_v1_cases_case_timeline_response_instance = DebituraWebExternalApiContractsV1CasesCaseTimelineResponse.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesCaseTimelineResponse.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_case_timeline_response_dict = debitura_web_external_api_contracts_v1_cases_case_timeline_response_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesCaseTimelineResponse from a dict
debitura_web_external_api_contracts_v1_cases_case_timeline_response_from_dict = DebituraWebExternalApiContractsV1CasesCaseTimelineResponse.from_dict(debitura_web_external_api_contracts_v1_cases_case_timeline_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


