import React, { useState }from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from "react-router-dom";
const Navbar = () => {
  const [supportDropdown, setSupportDropdown] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="https://asett.cms.gov/assets/cms-logo.png" alt="CMS Logo" className="h-8" />
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About ASETT</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>

        {/* Support Dropdown */}
        <div className="relative">
          <button onClick={() => setSupportDropdown(!supportDropdown)} className="hover:underline">
            Support ⌄
          </button>
          {supportDropdown && (
            <div className="absolute left-0 mt-2 bg-white text-black shadow-lg p-2 rounded">
              <Link to="/faq" className="block px-4 py-2 hover:bg-gray-200">FAQ</Link>
              <Link to="/guides" className="block px-4 py-2 hover:bg-gray-200">Guides</Link>
            </div>
          )}
        </div>
      </div>

      <div className="space-x-4">
        <button className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-200">Register</button>
        <button className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-200">Login</button>
      </div>
    </nav>
  );
};
const ComplaintType = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Complaint Type</h2>
      <p className="mb-2">Make a selection below</p>
      <form className="space-y-4">
        <label className="block">
          <input type="radio" name="complaint" className="mr-2" /> Transactions
          <p className="text-sm text-gray-600 ml-6">
            Select if a covered entity is in violation of the following transactions: claims and encounter information,
            payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations,
            coordination of benefits and premium payment.
          </p>
        </label>
        <label className="block">
          <input type="radio" name="complaint" className="mr-2" /> Code Sets
          <p className="text-sm text-gray-600 ml-6">
            Select if a covered entity is in violation of the following Code Sets: HCPCS, CPT-4, CDT, ICD-9, ICD-10,
            and NDC codes with which providers and health plans are familiar.
          </p>
        </label>
        <label className="block">
          <input type="radio" name="complaint" className="mr-2" /> Unique Identifiers
          <p className="text-sm text-gray-600 ml-6">
            Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN).
          </p>
        </label>
        <label className="block">
          <input type="radio" name="complaint" className="mr-2" /> Operating Rules
          <p className="text-sm text-gray-600 ml-6">
            Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules: EFT/ERA, Health Care Claim Status, and Eligibility for a Health Plan.
          </p>
        </label>
      </form>
      <div className="mt-6 flex justify-between">
        <button className="bg-gray-300 px-4 py-2 rounded">Welcome</button>
        <button className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
        <button onClick={() => navigate("/complainant-details")} className="bg-blue-500 text-white px-4 py-2 rounded">
          Complainant Information &gt;
        </button>
      </div>
    </div>
  );
};

const ComplainantDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Complainant Details</h1>
      
      <div className="mb-4">
        <label className="font-semibold">Do you want to remain anonymous during this process?</label>
        <div>
          <input type="radio" id="yes" name="anonymous" value="yes" />
          <label htmlFor="yes" className="ml-2">Yes</label>
          <input type="radio" id="no" name="anonymous" value="no" className="ml-4" />
          <label htmlFor="no" className="ml-2">No</label>
        </div>
      </div>
      
      <div className="mb-4">
        <label className="font-semibold">Complainant Organization Name *</label>
        <input type="text" className="border p-2 w-full rounded" placeholder="Enter Organization Name" />
      </div>
      
      <div className="mb-4">
        <label className="font-semibold">Complainant Email Address *</label>
        <input type="email" className="border p-2 w-full rounded" placeholder="example@demo.com" />
      </div>
      
      <div className="mb-4">
        <label className="font-semibold">Complainant Contact Phone Number *</label>
        <input type="tel" className="border p-2 w-full rounded" placeholder="(xxx) xxx-xxxx" />
      </div>
      
      <div className="flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate("/")}>&lt; Specify Complaint Type</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Filed Against Entity Information &gt;</button>
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
        <Route path="/about" element={<h2 className="p-6 text-center">About ASETT Page</h2>} />
        <Route path="/contact" element={<h2 className="p-6 text-center">Contact Us Page</h2>} />
        <Route path="/faq" element={<h2 className="p-6 text-center">FAQ Page</h2>} />
        <Route path="/guides" element={<h2 className="p-6 text-center">Guides Page</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
