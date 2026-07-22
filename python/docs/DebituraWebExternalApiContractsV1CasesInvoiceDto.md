# DebituraWebExternalApiContractsV1CasesInvoiceDto

V1 Invoice DTO for external partner APIs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**date_created** | **datetime** |  | [optional] 
**date_updated** | **datetime** |  | [optional] 
**reference** | **str** |  | [optional] 
**creditor_reference** | **str** |  | [optional] 
**creditor_comments** | **str** |  | [optional] 
**claim_description** | **str** |  | [optional] 
**gross_amount** | **float** |  | [optional] 
**remainder** | **float** |  | [optional] 
**interest_fees** | **float** |  | [optional] 
**reminder_fees** | **float** |  | [optional] 
**collection_fees** | **float** |  | [optional] 
**total_added_fees** | **float** |  | [optional] 
**currency** | **str** |  | [optional] 
**is_test_case** | **bool** |  | [optional] 
**lifecycle** | **str** |  | [optional] 
**due_date** | **datetime** |  | [optional] 
**var_date** | **datetime** |  | [optional] 
**date_finished** | **datetime** |  | [optional] 
**date_collection_started** | **datetime** |  | [optional] 
**close_code** | **str** |  | [optional] 
**current_engagement_phase** | **str** | The current phase of the case&#39;s engagement: \&quot;Pre-legal\&quot;, \&quot;Legal\&quot;, or \&quot;Enforcement\&quot;. A different axis from Debitura.Web.ExternalApi.Contracts.V1.Cases.InvoiceDto.Lifecycle/Debitura.Web.ExternalApi.Contracts.V1.Cases.InvoiceDto.CloseCode — an Active case can be in any of the three phases.              Null means \&quot;no active engagement\&quot; (e.g. lead / quoting / pre-contract-signing / unassigned, or a data-consistency gap) — this is a distinct third state, NOT a synonym for Pre-legal. Most cases legitimately read Pre-legal; phase only leaves Pre-legal on legal/enforcement quote flows.              Not guaranteed to be monotonic: an admin correction can move phase backwards (e.g. Legal back to Pre-legal).              Persists after case closure — reflects the case&#39;s last-known engagement phase, not the current Lifecycle. Note: this is a different field from a lead quote&#39;s own offered phase (the phase a partner&#39;s quote proposes to work the case at, if this case ever went through a quote flow) — this field is the case-level phase of its actual engagement, not a quote&#39;s terms. | [optional] 
**claim_type** | **str** | The type of claim for this case (e.g. \&quot;Unpaid Invoice\&quot;, \&quot;Loan Repayment\&quot;, \&quot;Breach of Contract\&quot;). Null if not set. | [optional] 
**creditor_division_id** | **str** |  | [optional] 
**debtor** | [**DebituraWebExternalApiContractsV1CasesDebtorDto**](DebituraWebExternalApiContractsV1CasesDebtorDto.md) |  | [optional] 
**collection_partner** | [**DebituraWebExternalApiContractsV1CasesCollectionPartnerDto**](DebituraWebExternalApiContractsV1CasesCollectionPartnerDto.md) |  | [optional] 
**creditor** | [**DebituraWebExternalApiContractsV1CasesCreditorDto**](DebituraWebExternalApiContractsV1CasesCreditorDto.md) |  | [optional] 
**bank_account** | [**DebituraWebExternalApiContractsV1CasesBankAccountDto**](DebituraWebExternalApiContractsV1CasesBankAccountDto.md) |  | [optional] 
**blended_age_uplift_points** | **float** | MULTI-INVOICE AGE BUCKET PRICING Calculated blended age uplift percentage points (0-20) for multi-invoice cases. Shows the additional fee percentage added due to invoice age. Formula: ((A12-A24)×10 + A24×20) / Total Principal Null for single-invoice cases (age uplift is calculated from due date instead). | [optional] 
**pre_legal_success_fee** | **float** | PRE-LEGAL SUCCESS FEE The total pre-legal success fee percentage for this case. Includes base fee + age-based uplift (blended or single-invoice). Null if pricing has not been calculated yet or if case is not in pre-legal phase. Example: 20.5 represents 20.5% success fee. | [optional] 
**solution_url** | **str** | When the case is created with allowPendingContracts&#x3D;true and required contracts are unsigned, this URL points to the signing page. Null when contracts are already signed or not applicable. | [optional] 
**signing_handoff** | [**DebituraWebExternalApiContractsV1CasesSigningHandoffDto**](DebituraWebExternalApiContractsV1CasesSigningHandoffDto.md) |  | [optional] 
**exclusive_period_end_date** | **datetime** | The date the exclusive collection period ends (or ended). Null if no collection period has been created for this case (e.g. custom-terms cases). Use GET /cases/{id}/exclusive-period for the full chain including extensions. | [optional] 
**dispute_status** | **str** | Whether the claim is disputed by the debtor. Returns the description of Debitura.Domain.Model.Receiveables.Invoices.Enums.ClaimDisputeStatus: \&quot;Yes, the claim is disputed\&quot;, \&quot;No, the claim is not disputed\&quot;, or \&quot;Don&#39;t Know\&quot;. Null when the dispute status has not been set on the case. | [optional] 
**validation** | [**DebituraDomainServicesCaseValidationCaseValidationLeanDto**](DebituraDomainServicesCaseValidationCaseValidationLeanDto.md) |  | [optional] 
**assigned_user** | [**DebituraWebExternalApiContractsV1CasesAssignedUserDto**](DebituraWebExternalApiContractsV1CasesAssignedUserDto.md) |  | [optional] 
**allocation_outstanding** | [**DebituraWebExternalApiContractsV1CasesInvoiceAllocationOutstandingDto**](DebituraWebExternalApiContractsV1CasesInvoiceAllocationOutstandingDto.md) |  | [optional] 

## Example

```python
from debitura_debt_collection.models.debitura_web_external_api_contracts_v1_cases_invoice_dto import DebituraWebExternalApiContractsV1CasesInvoiceDto

# TODO update the JSON string below
json = "{}"
# create an instance of DebituraWebExternalApiContractsV1CasesInvoiceDto from a JSON string
debitura_web_external_api_contracts_v1_cases_invoice_dto_instance = DebituraWebExternalApiContractsV1CasesInvoiceDto.from_json(json)
# print the JSON string representation of the object
print(DebituraWebExternalApiContractsV1CasesInvoiceDto.to_json())

# convert the object into a dict
debitura_web_external_api_contracts_v1_cases_invoice_dto_dict = debitura_web_external_api_contracts_v1_cases_invoice_dto_instance.to_dict()
# create an instance of DebituraWebExternalApiContractsV1CasesInvoiceDto from a dict
debitura_web_external_api_contracts_v1_cases_invoice_dto_from_dict = DebituraWebExternalApiContractsV1CasesInvoiceDto.from_dict(debitura_web_external_api_contracts_v1_cases_invoice_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


