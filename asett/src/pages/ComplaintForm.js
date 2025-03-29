// pages/ComplaintForm.js
import React, { useState } from 'react';
import  ComplaintType  from '../components/ComplaintType.js';
import  NavigationBar  from '../components/NavigationBar.js';
import  Footer  from '../components/Footer.js';
import { Button } from '@cmsgov/design-system';


const ComplaintForm = () => {
    const [selectedType, setSelectedType] = useState('transactions');

    return (
        <>
            <NavigationBar />

            <main className="ds-l-container">
                <div className="ds-u-margin-y--4">
                    <div className="ds-c-step-indicator__header">
                        <ol className="ds-c-step-indicator__steps">
                            {['Complaint Type', 'Complainant Details', 'FAE Details', 'Complaint Details', 'Review Complaint', 'Submitted'].map((step, idx) => (
                                <li key={idx} className={`ds-c-step-indicator__step ${idx === 0 ? 'ds-c-step-indicator__step--current' : ''}`}>
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                <ComplaintType selectedType={selectedType} onTypeChange={setSelectedType} />

                <div className="ds-l-row ds-u-margin-top--4 ds-u-justify-content--space-between">
                    <Button variation="secondary">&lt;Welcome</Button>
                    <Button variation="danger">Cancel</Button>
                    <Button variation="primary">Complainant Information &gt;</Button>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default ComplaintForm;
