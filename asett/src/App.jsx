import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const [supportDropdown, setSupportDropdown] = useState(false);

  return (
    <nav className="ds-u-fill--primary ds-u-padding--2 ds-u-color--white ds-u-display--flex ds-u-justify-content--between ds-u-align-items--center">
      <div className="ds-u-display--flex ds-u-align-items--center ds-u-gap--2">
        <img src="https://asett.cms.gov/assets/cms-logo.png" alt="CMS Logo" className="ds-u-height--3" />
        <Link to="/" className="ds-u-color--white ds-u-text-decoration--none ds-u-hover--text-decoration">Home</Link>
        <Link to="/about" className="ds-u-color--white ds-u-text-decoration--none ds-u-hover--text-decoration">About ASETT</Link>
        <Link to="/contact" className="ds-u-color--white ds-u-text-decoration--none ds-u-hover--text-decoration">Contact Us</Link>

        <div className="ds-u-position--relative">
          <button 
            onClick={() => setSupportDropdown(!supportDropdown)} 
            className="ds-u-color--white ds-u-text-decoration--none ds-u-hover--text-decoration ds-c-button ds-c-button--transparent"
          >
            Support ▼
          </button>
          {supportDropdown && (
            <div className="ds-c-dropdown ds-u-position--absolute ds-u-left--0 ds-u-margin-top--1 ds-u-bg--white ds-u-color--base ds-u-shadow--2">
              <Link to="/faq" className="ds-c-dropdown__item">FAQ</Link>
              <Link to="/guides" className="ds-c-dropdown__item">Guides</Link>
            </div>
          )}
        </div>
      </div>

      <div className="ds-u-display--flex ds-u-gap--2">
        <Link to="/register" className="ds-c-button">Register</Link>
        <Link to="/login" className="ds-c-button ds-c-button--primary">Login</Link>
      </div>
    </nav>
  );
};

const ComplaintType = () => {
  const navigate = useNavigate();
  
  return (
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

      <div className="ds-u-margin-top--3">
      <h1 className="ds-h1">Complaint Type</h1>
        <h2 className="ds-h2">Make a selection below</h2>
        
        <form className="ds-u-margin-top--2">
          <div className="ds-c-choice-group">
            <input className="ds-c-choice" type="radio" name="complaint" id="transactions" />
            <label className="ds-c-choice__label" htmlFor="transactions">
              <span className="ds-u-font-weight--bold">Transactions</span>
              <span className="ds-u-color--gray ds-u-margin-top--1 ds-u-display--block">
                Select if a covered entity is in violation of the following transactions: claims and encounter information,
                payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations,
                coordination of benefits and premium payment.
              </span>
            </label>
          </div>

          <div className="ds-c-choice-group ds-u-margin-top--2">
            <input className="ds-c-choice" type="radio" name="complaint" id="codeSets" />
            <label className="ds-c-choice__label" htmlFor="codeSets">
              <span className="ds-u-font-weight--bold">Code Sets</span>
              <span className="ds-u-color--gray ds-u-margin-top--1 ds-u-display--block">
                Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures),
                CPT-4 (Physicians Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures),
                ICD-10 (As of October 1, 2015) and NDC (National Drug Codes) codes with which providers and health plan are familiar.
              </span>
            </label>
          </div>

          <div className="ds-c-choice-group ds-u-margin-top--2">
            <input className="ds-c-choice" type="radio" name="complaint" id="uniqueIdentifiers" />
            <label className="ds-c-choice__label" htmlFor="uniqueIdentifiers">
              <span className="ds-u-font-weight--bold">Unique Identifiers</span>
              <span className="ds-u-color--gray ds-u-margin-top--1 ds-u-display--block">
                Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI),
                Employer Identification Number (EIN).
              </span>
            </label>
          </div>

          <div className="ds-c-choice-group ds-u-margin-top--2">
            <input className="ds-c-choice" type="radio" name="complaint" id="operatingRules" />
            <label className="ds-c-choice__label" htmlFor="operatingRules">
              <span className="ds-u-font-weight--bold">Operating Rules</span>
              <span className="ds-u-color--gray ds-u-margin-top--1 ds-u-display--block">
                Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules:
                Electronic Funds Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim Status, and Eligibility for a Health Plan.
              </span>
            </label>
          </div>
        </form>

        <div className="ds-u-display--flex ds-u-justify-content--between ds-u-margin-top--4">
          <button className="ds-c-button ds-c-button--outline">&lt; Welcome</button>
          <button className="ds-c-button ds-c-button--outline">Cancel</button>
          <button 
            onClick={() => navigate("/complainant-details")} 
            className="ds-c-button ds-c-button--primary"
          >
            Complainant Information &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

const ComplainantDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="ds-l-container ds-u-padding--4">
      <div className="ds-u-display--flex ds-u-justify-content--between ds-u-align-items--center ds-u-margin-bottom--2">
        <h1 className="ds-h2">Complainant Details</h1>
        <div className="ds-u-color--gray">Form Approved OMB No. 0938-0948</div>
      </div>

      <div className="ds-c-tabs">
        <div className="ds-c-tabs__item">Complaint Type</div>
        <div className="ds-c-tabs__item ds-c-tabs__item--active">Complainant Details</div>
        <div className="ds-c-tabs__item">FAE Details</div>
        <div className="ds-c-tabs__item">Complaint Details</div>
        <div className="ds-c-tabs__item">Review Complaint</div>
        <div className="ds-c-tabs__item">Submitted</div>
      </div>

      <form className="ds-u-margin-top--3">
        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label" htmlFor="anonymous">
            Do you want to remain anonymous during this process? *
          </label>
          <div className="ds-c-choice-group">
            <input className="ds-c-choice" type="radio" name="anonymous" id="yes" />
            <label className="ds-c-choice__label" htmlFor="yes">Yes</label>
            <input className="ds-c-choice" type="radio" name="anonymous" id="no" />
            <label className="ds-c-choice__label" htmlFor="no">No</label>
          </div>
          <div className="ds-c-help-text">
            If you select yes, CMS will not share your information with the Filed Against Entity (FAE) during the investigation process.
            However, information provided in this complaint is subject to rules and policies under the Freedom of Information Act (FOIA).
          </div>
        </div>

        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label" htmlFor="orgName">
            Complainant Organization Name *
            <input className="ds-c-field" id="orgName" type="text" />
          </label>
        </div>

        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label" htmlFor="orgType">
            Complainant Organization Type
            <select className="ds-c-field" id="orgType">
              <option value="">--None--</option>
            </select>
          </label>
        </div>

        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label" htmlFor="orgRole">
            Complainant Organization Role
            <input className="ds-c-field" id="orgRole" type="text" />
          </label>
        </div>

        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label" htmlFor="orgPhone">
            Complainant Organization Phone Number *
            <input className="ds-c-field" id="orgPhone" type="tel" placeholder="(xxx) xxx-xxxx" />
          </label>
        </div>

        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label" htmlFor="firstName">
            Complainant First Name *
            <input className="ds-c-field" id="firstName" type="text" />
          </label>
        </div>

        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label" htmlFor="mi">
            Complainant MI
            <input className="ds-c-field" id="mi" type="text" />
          </label>
        </div>

        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label" htmlFor="lastName">
            Complainant Last Name *
            <input className="ds-c-field" id="lastName" type="text" />
          </label>
        </div>

        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label" htmlFor="address1">
            Complainant Address Line 1 *
            <input className="ds-c-field" id="address1" type="text" />
          </label>
        </div>

        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label" htmlFor="address2">
            Complainant Address Line 2
            <input className="ds-c-field" id="address2" type="text" />
          </label>
        </div>

        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label" htmlFor="city">
            Complainant City/Town *
            <input className="ds-c-field" id="city" type="text" />
          </label>
        </div>

        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label" htmlFor="state">
            Complainant State/Territory *
            <select className="ds-c-field" id="state">
              <option value="">--None--</option>
            </select>
          </label>
        </div>

        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label" htmlFor="zip">
            Complainant Zip Code *
            <input className="ds-c-field" id="zip" type="text" />
          </label>
        </div>

        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label" htmlFor="email">
            Complainant Email Address *
            <input className="ds-c-field" id="email" type="email" placeholder="example@demo.com" />
          </label>
        </div>

        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label" htmlFor="phone">
            Complainant Contact Phone Number *
            <input className="ds-c-field" id="phone" type="tel" placeholder="(xxx) xxx-xxxx" />
          </label>
        </div>

        <div className="ds-u-margin-bottom--3">
          <label className="ds-c-label" htmlFor="cell">
            Complainant Cell Phone Number
            <input className="ds-c-field" id="cell" type="tel" placeholder="(xxx) xxx-xxxx" />
          </label>
        </div>

        <div className="ds-u-display--flex ds-u-justify-content--between ds-u-margin-top--4">
          <button 
            onClick={() => navigate("/")} 
            className="ds-c-button ds-c-button--outline"
          >
            &lt; Specify Complaint Type
          </button>
          <button className="ds-c-button ds-c-button--outline">Cancel</button>
          <button className="ds-c-button ds-c-button--primary">
            Filed Against Entity Information &gt;
          </button>
        </div>
      </form>
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
