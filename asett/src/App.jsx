import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
import { WarningIcon } from '@cmsgov/design-system';

const Navbar = () => {
  const [supportDropdown, setSupportDropdown] = useState(false);

  return (
    <nav className="ds-u-fill--primary ds-u-padding-y--2">
      <div className="ds-l-container">
        <div className="ds-u-display--flex ds-u-justify-content--between ds-u-align-items--center">
          <div className="ds-u-display--flex ds-u-align-items--center ds-u-gap--3">
            <img src="https://asett.cms.gov/assets/cms-logo.png" alt="CMS Logo" className="ds-u-height--3" />
            <Link to="/" className="ds-c-button ds-c-button--solid ds-u-font-family--sans ds-u-font-size--base">Home</Link>
            <Link to="/about" className="ds-c-button ds-c-button--solid ds-u-font-family--sans ds-u-font-size--base">About ASETT</Link>
            <Link to="/contact" className="ds-c-button ds-c-button--solid ds-u-font-family--sans ds-u-font-size--base">Contact Us</Link>

            <div className="ds-u-position--relative">
              <button
                onClick={() => setSupportDropdown(!supportDropdown)}
                className="ds-u-color--white ds-u-text-decoration--none ds-u-font-family--sans ds-u-font-size--base ds-c-button ds-c-button--transparent"
              >
                Support ▼
              </button>
              {supportDropdown && (
                <div className="ds-c-dropdown ds-u-position--absolute ds-u-left--0 ds-u-margin-top--1 ds-u-bg--white ds-u-border--1 ds-u-radius--md">
                  <Link to="/faq" className="ds-c-dropdown__item ds-u-font-family--sans ds-u-font-size--base ds-u-padding--2">FAQ</Link>
                  <Link to="/guides" className="ds-c-dropdown__item ds-u-font-family--sans ds-u-font-size--base ds-u-padding--2">Guides</Link>
                </div>
              )}
            </div>
          </div>

          <div className="ds-u-display--flex ds-u-gap--2">
            <Link to="/register" className="ds-c-button ds-c-button--solid ds-u-font-family--sans ds-u-font-size--base">Register</Link>
            <Link to="/login" className="ds-c-button ds-c-button--solid ds-u-font-family--sans ds-u-font-size--base">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ComplaintType = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('');
  const [showError, setShowError] = useState(false);

  const handleNext = () => {
    if (!selectedType) {
      setShowError(true);
      return;
    }
    navigate("/complainant-details");
  };

  return (
    <div className="ds-base ds-u-fill--gray-lightest">
      <div className="ds-l-container ds-u-padding--4">
        <div className="ds-u-display--flex ds-u-justify-content--end ds-u-align-items--center ds-u-margin-bottom--2">
          <div className="ds-u-color--gray">Form Approved OMB No. 0938-0948</div>
        </div>

        <div className="ds-c-tabs">
          <div className="ds-c-tabs__item ds-c-tabs__item--active">Complaint Type</div>
          <div className="ds-c-tabs__item">Complainant Details</div>
          <div className="ds-c-tabs__item">FAE Details</div>
          <div className="ds-c-tabs__item">Complaint Details</div>
          <div className="ds-c-tabs__item">Review Complaint</div>
          <div className="ds-c-tabs__item">Submitted</div>
        </div>
        {showError && (
          <div className="ds-c-field__error-message ds-u-color--error ds-u-font-size--base ds-u-margin-top--2 ds-u-display--flex ds-u-align-items--center ds-u-font-size--2xl">
            <WarningIcon className="ds-u-margin-right--1" />
            Error: Select a Complaint Type.
          </div>
        )}
        <div className="ds-u-margin-top--1">
          <h1 className="ds-u-font-weight--bold ds-u-font-size--3xl">Complaint Type</h1>
          <h2 className="ds-u-font-weight--bold ds-u-font-size--xl ds-u-margin-top--2">Make a selection below <span className="ds-u-color--error">*</span></h2>

          <form className="ds-u-margin-top--2">
            <div className="ds-c-choice-group">
              <div className="ds-u-display--flex ds-u-align-items--flex-start">
                <input 
                  className="ds-c-choice" 
                  type="radio" 
                  name="complaint" 
                  id="transactions" 
                  checked={selectedType === 'transactions'}
                  onChange={() => setSelectedType('transactions')}
                  style={{ marginTop: '4px', borderRadius: '100%', width: '16px', height: '16px', appearance: 'none', WebkitAppearance: 'none', border: '2px solid #262626' }}
                />
                <label className="ds-c-choice__label ds-u-margin-left--2" htmlFor="transactions">
                  <span className="ds-u-font-weight--bold ds-u-font-size--lg ds-u-display--block">Transactions</span>
                  <span className="ds-u-color--gray ds-u-margin-top--1 ds-u-display--block ds-u-font-size--base">
                    Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, coordination of
                    benefits and premium payment.
                  </span>
                </label>
              </div>
            </div>

            <div className="ds-c-choice-group ds-u-margin-top--2">
              <div className="ds-u-display--flex ds-u-align-items--flex-start">
                <input 
                  className="ds-c-choice" 
                  type="radio" 
                  name="complaint" 
                  id="codeSets" 
                  checked={selectedType === 'codeSets'}
                  onChange={() => setSelectedType('codeSets')}
                  style={{ marginTop: '4px', borderRadius: '100%', width: '16px', height: '16px', appearance: 'none', WebkitAppearance: 'none', border: '2px solid #262626' }}
                />
                <label className="ds-c-choice__label ds-u-margin-left--2" htmlFor="codeSets">
                  <span className="ds-u-font-weight--bold ds-u-font-size--lg ds-u-display--block">Code Sets</span>
                  <span className="ds-u-color--gray ds-u-margin-top--1 ds-u-display--block ds-u-font-size--base">
                    Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and NDC (National Drug Codes) codes with which providers and health plan are familiar, are the adopted code sets for procedures, diagnoses, and drugs.
                  </span>
                </label>
              </div>
            </div>

            <div className="ds-c-choice-group ds-u-margin-top--2">
              <div className="ds-u-display--flex ds-u-align-items--flex-start">
                <input 
                  className="ds-c-choice" 
                  type="radio" 
                  name="complaint" 
                  id="uniqueIdentifiers" 
                  checked={selectedType === 'uniqueIdentifiers'}
                  onChange={() => setSelectedType('uniqueIdentifiers')}
                  style={{ marginTop: '4px', borderRadius: '100%', width: '16px', height: '16px', appearance: 'none', WebkitAppearance: 'none', border: '2px solid #262626' }}
                />
                <label className="ds-c-choice__label ds-u-margin-left--2" htmlFor="uniqueIdentifiers">
                  <span className="ds-u-font-weight--bold ds-u-font-size--lg ds-u-display--block">Unique Identifiers</span>
                  <span className="ds-u-color--gray ds-u-margin-top--1 ds-u-display--block ds-u-font-size--base">
                    Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN).
                  </span>
                </label>
              </div>
            </div>

            <div className="ds-c-choice-group ds-u-margin-top--2">
              <div className="ds-u-display--flex ds-u-align-items--flex-start">
                <input 
                  className="ds-c-choice" 
                  type="radio" 
                  name="complaint" 
                  id="operatingRules" 
                  checked={selectedType === 'operatingRules'}
                  onChange={() => setSelectedType('operatingRules')}
                  style={{ marginTop: '4px', borderRadius: '100%', width: '16px', height: '16px', appearance: 'none', WebkitAppearance: 'none', border: '2px solid #262626' }}
                />
                <label className="ds-c-choice__label ds-u-margin-left--2" htmlFor="operatingRules">
                  <span className="ds-u-font-weight--bold ds-u-font-size--lg ds-u-display--block">Operating Rules</span>
                  <span className="ds-u-color--gray ds-u-margin-top--1 ds-u-display--block ds-u-font-size--base">
                    Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules: Electronic Funds Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim Status, and Eligibility for a Health Plan.
                  </span>
                </label>
              </div>
            </div>
          </form>

          <div className="ds-u-display--flex ds-u-justify-content--between ds-u-margin-top--4">
            <button className="ds-c-button ds-c-button--solid">&lt; Welcome</button>
            <button className="ds-c-button ds-c-button--solid">Cancel</button>
            <button
              onClick={handleNext}
              className="ds-c-button ds-c-button--solid"
            >
              Complainant Information &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComplainantDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="ds-base ds-u-fill--gray-lightest">
      <div className="ds-l-container ds-u-padding-top--4 ds-u-padding-bottom--6">
        <div className="ds-u-display--flex ds-u-justify-content--between ds-u-align-items--center ds-u-margin-bottom--3">
          <h1 className="ds-u-font-family--sans ds-u-font-size--2xl ds-u-font-weight--normal ds-u-margin--0 ds-u-color--base">Complainant Details</h1>
          <div className="ds-u-font-family--sans ds-u-font-size--sm ds-u-color--gray">Form Approved OMB No. 0938-0948</div>
        </div>

        <div className="ds-u-border-bottom--1 ds-u-margin-bottom--4">
          <div className="ds-u-display--flex ds-u-margin-bottom--0">
            <div className="ds-u-padding-x--3 ds-u-padding-y--1 ds-u-color--gray ds-u-font-family--sans ds-u-font-size--base">
              Complaint Type
            </div>
            <div className="ds-u-padding-x--3 ds-u-padding-y--1 ds-u-border-bottom--3 ds-u-border-color--primary ds-u-font-weight--bold ds-u-font-family--sans ds-u-color--primary ds-u-font-size--base">
              Complainant Details
            </div>
            <div className="ds-u-padding-x--3 ds-u-padding-y--1 ds-u-color--gray ds-u-font-family--sans ds-u-font-size--base">
              FAE Details
            </div>
            <div className="ds-u-padding-x--3 ds-u-padding-y--1 ds-u-color--gray ds-u-font-family--sans ds-u-font-size--base">
              Complaint Details
            </div>
            <div className="ds-u-padding-x--3 ds-u-padding-y--1 ds-u-color--gray ds-u-font-family--sans ds-u-font-size--base">
              Review Complaint
            </div>
            <div className="ds-u-padding-x--3 ds-u-padding-y--1 ds-u-color--gray ds-u-font-family--sans ds-u-font-size--base">
              Submitted
            </div>
          </div>
        </div>

        <div className="ds-u-padding--4 ds-u-bg--white ds-u-border--1 ds-u-radius--md">
          <form>
            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--2">
                Do you want to remain anonymous during this process? <span className="ds-u-color--error">*</span>
              </label>
              <div className="ds-u-display--flex ds-u-align-items--center ds-u-margin-bottom--2">
                <div className="ds-u-margin-right--4">
                  <div className="ds-u-display--flex ds-u-align-items--center">
                    <input
                      type="radio"
                      name="anonymous"
                      id="yes"
                      className="ds-c-choice"
                      style={{ marginTop: '4px', borderRadius: '100%', width: '16px', height: '16px', appearance: 'none', WebkitAppearance: 'none', border: '2px solid #262626' }}
                    />
                    <label htmlFor="yes" className="ds-u-font-family--sans ds-u-font-size--base ds-u-margin-left--2">Yes</label>
                  </div>
                </div>
                <div>
                  <div className="ds-u-display--flex ds-u-align-items--center">
                    <input
                      type="radio"
                      name="anonymous"
                      id="no"
                      className="ds-c-choice"
                      style={{ marginTop: '4px', borderRadius: '100%', width: '16px', height: '16px', appearance: 'none', WebkitAppearance: 'none', border: '2px solid #262626' }}
                    />
                    <label htmlFor="no" className="ds-u-font-family--sans ds-u-font-size--base ds-u-margin-left--2">No</label>
                  </div>
                </div>
              </div>
              <div className="ds-u-font-family--sans ds-u-font-size--base ds-u-color--gray ds-u-line-height--lead ds-u-padding--3 ds-u-bg-color--gray-lightest ds-u-radius--md">
                If you select yes, CMS will not share your information with the Filed Against Entity (FAE) during the investigation process.
                However, information provided in this complaint is subject to rules and policies under the Freedom of Information Act (FOIA).
              </div>
            </div>

            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--1">
                Complainant Organization Name <span className="ds-u-color--error">*</span>
              </label>
              <input
                type="text"
                className="ds-c-field ds-u-font-family--sans ds-u-font-size--base"
                style={{ height: '40px' }}
              />
            </div>

            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--1">
                Complainant Organization Type
              </label>
              <select
                className="ds-c-field ds-u-font-family--sans ds-u-font-size--base"
                style={{ height: '40px' }}
              >
                <option value="">--None--</option>
                <option value="provider">Healthcare Provider</option>
                <option value="payer">Healthcare Payer</option>
                <option value="vendor">Healthcare Vendor</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--1">
                Complainant Organization Type (Other)
              </label>
              <input
                type="text"
                className="ds-c-field ds-u-font-family--sans ds-u-font-size--base"
                style={{ height: '40px' }}
              />
            </div>

            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--1">
                Complainant Organization Role
              </label>
              <input
                type="text"
                className="ds-c-field ds-u-font-family--sans ds-u-font-size--base"
                style={{ height: '40px' }}
              />
            </div>

            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--1">
                Complainant Organization Phone Number <span className="ds-u-color--error">*</span>
              </label>
              <input
                type="tel"
                className="ds-c-field ds-u-font-family--sans ds-u-font-size--base"
                placeholder="(xxx) xxx-xxxx"
                style={{ height: '40px' }}
              />
            </div>
            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--1">
                Complainant Title
              </label>
              <input
                type="text"
                className="ds-c-field ds-u-font-family--sans ds-u-font-size--base"
                style={{ height: '40px' }}
              />
            </div>

            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--1">
                Complainant First Name <span className="ds-u-color--error">*</span>
              </label>
              <input
                type="text"
                className="ds-c-field ds-u-font-family--sans ds-u-font-size--base"
                style={{ height: '40px' }}
              />
            </div>

            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--1">
                Complainant MI
              </label>
              <input
                type="text"
                className="ds-c-field ds-u-font-family--sans ds-u-font-size--base"
                style={{ height: '40px' }}
              />
            </div>

            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--1">
                Complainant Last Name <span className="ds-u-color--error">*</span>
              </label>
              <input
                type="text"
                className="ds-c-field ds-u-font-family--sans ds-u-font-size--base"
                style={{ height: '40px' }}
              />
            </div>

            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--1">
                Complainant Address Line 1 <span className="ds-u-color--error">*</span>
              </label>
              <input
                type="text"
                className="ds-c-field ds-u-font-family--sans ds-u-font-size--base"
                style={{ height: '40px' }}
              />
            </div>

            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--1">
                Complainant Address Line 2
              </label>
              <input
                type="text"
                className="ds-c-field ds-u-font-family--sans ds-u-font-size--base"
                style={{ height: '40px' }}
              />
            </div>

            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--1">
                Complainant City/Town <span className="ds-u-color--error">*</span>
              </label>
              <input
                type="text"
                className="ds-c-field ds-u-font-family--sans ds-u-font-size--base"
                style={{ height: '40px' }}
              />
            </div>

            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--1">
                Complainant State/Territory <span className="ds-u-color--error">*</span>
              </label>
              <select
                className="ds-c-field ds-u-font-family--sans ds-u-font-size--base"
                style={{ height: '40px' }}
              >
                <option value="">--None--</option>
              </select>
            </div>

            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--1">
                Complainant Zip Code <span className="ds-u-color--error">*</span>
              </label>
              <input
                type="text"
                className="ds-c-field ds-u-font-family--sans ds-u-font-size--base"
                style={{ height: '40px' }}
              />
            </div>

            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--1">
                Complainant Email Address <span className="ds-u-color--error">*</span>
              </label>
              <input
                type="email"
                className="ds-c-field ds-u-font-family--sans ds-u-font-size--base"
                placeholder="example@demo.com"
                style={{ height: '40px' }}
              />
            </div>

            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--1">
                Complainant Contact Phone Number <span className="ds-u-color--error">*</span>
              </label>
              <input
                type="tel"
                className="ds-c-field ds-u-font-family--sans ds-u-font-size--base"
                placeholder="(xxx) xxx-xxxx"
                style={{ height: '40px' }}
              />
            </div>

            <div className="ds-u-margin-bottom--4">
              <label className="ds-u-font-family--sans ds-u-font-size--lg ds-u-font-weight--bold ds-u-display--block ds-u-margin-bottom--1">
                Complainant Cell Phone Number
              </label>
              <input
                type="tel"
                className="ds-c-field ds-u-font-family--sans ds-u-font-size--base"
                placeholder="(xxx) xxx-xxxx"
                style={{ height: '40px' }}
              />
            </div>

            <div className="ds-u-border-top--2 ds-u-padding-top--4 ds-u-display--flex ds-u-justify-content--between">
              <button
                onClick={() => navigate("/")}
                className="ds-c-button ds-c-button--solid ds-u-font-family--sans ds-u-font-size--base ds-u-padding-x--3 ds-u-padding-y--2"
              >
                &lt; Specify Complaint Type
              </button>
              <button className="ds-c-button ds-c-button--solid ds-u-font-family--sans ds-u-font-size--base ds-u-padding-x--3 ds-u-padding-y--2 ">Cancel</button>
              <button className="ds-c-button ds-c-button--solid ds-u-font-family--sans ds-u-font-size--base ds-u-padding-x--3 ds-u-padding-y--2">
                Filed Against Entity Information &gt;
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ComplaintType />} />
        <Route path="/complainant-details" element={<ComplainantDetails />} />
        <Route path="/about" element={<h2 className="ds-l-container ds-u-padding--4">About ASETT Page</h2>} />
        <Route path="/contact" element={<h2 className="ds-l-container ds-u-padding--4">Contact Us Page</h2>} />
        <Route path="/faq" element={<h2 className="ds-l-container ds-u-padding--4">FAQ Page</h2>} />
        <Route path="/guides" element={<h2 className="ds-l-container ds-u-padding--4">Guides Page</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
