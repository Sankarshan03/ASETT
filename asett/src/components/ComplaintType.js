import React from 'react';
import { ChoiceList } from '@cmsgov/design-system';


const options = [
  {
    label: 'Transactions',
    value: 'transactions',
    description: `Select if a covered entity is in violation of the following transactions: claims and encounter information, 
    payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, 
    coordination of benefits and premium payment.`
  },
  {
    label: 'Code Sets',
    value: 'code_sets',
    description: `Select if a covered entity is in violation of the following Code Sets: HCPCS, CPT-4, CDT, ICD-9, ICD-10, 
    and NDC codes with which providers and health plans are familiar.`
  },
  {
    label: 'Unique Identifiers',
    value: 'unique_identifiers',
    description: `Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN).`
  },
  {
    label: 'Operating Rules',
    value: 'operating_rules',
    description: `Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules: EFT/ERA, Health Care Claim Status, and Eligibility for a Health Plan.`
  }
];

const ComplaintType = ({ selectedType, onTypeChange }) => {
  return (
    <section className="ds-l-container ds-u-margin-y--4">
      <h2>Complaint Type</h2>
      <p className="ds-text--lead">Make a selection below</p>
      <ChoiceList
        name="complaintType"
        value={selectedType}
        type="radio"
        choices={options.map(option => ({
          label: (
            <div>
              <strong>{option.label}</strong>
              <p className="ds-text--small">{option.description}</p>
            </div>
          ),
          value: option.value
        }))}
        onChange={(event) => onTypeChange(event.target.value)}
      />
    </section>
  );
};

export default ComplaintType;
