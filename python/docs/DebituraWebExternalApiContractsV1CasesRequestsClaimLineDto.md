# DebituraWebExternalApiContractsV1CasesRequestsClaimLineDto

A single unpaid invoice belonging to the claim. Claim lines are a pricing input only: they are used to derive the claim total and the cumulative age buckets, and are then discarded. They are not stored and are never shown to the collecting partner — put a per-invoice breakdown in Comments if the partner needs one.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**due_date** | **datetime** | Payment deadline of this invoice. Provide date only without time component. Must be on or after 2000-01-01 and must not be in the future. | 
**amount** | **float** | The outstanding balance on this invoice in the case currency — what the debtor still owes on it, already net of any payments the debtor has made and net of any credit notes issued against it. This is not the invoice&#39;s original face value. Must be greater than zero with at most 2 decimal places; omit invoices that are fully settled. | 
**reference** | **str** | Optional: your own invoice number for this line. Used only to make validation errors readable and to reject the same invoice being sent twice. It is not stored and not shown to anyone. | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_requests_claim_line_dto import DebituraWebExternalApiContractsV1CasesRequestsClaimLineDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesRequestsClaimLineDto from a JSON string
debitura_web_external_api_contracts_v1_cases_requests_claim_line_dto_instance = DebituraWebExternalApiContractsV1CasesRequestsClaimLineDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesRequestsClaimLineDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_requests_claim_line_dto_dict = debitura_web_external_api_contracts_v1_cases_requests_claim_line_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesRequestsClaimLineDto from a dict
debitura_web_external_api_contracts_v1_cases_requests_claim_line_dto_from_dict = DebituraWebExternalApiContractsV1CasesRequestsClaimLineDto.from_dict(debitura_web_external_api_contracts_v1_cases_requests_claim_line_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


