// components/NavigationBar.js
import React from 'react';
import { Button } from '@cmsgov/design-system';

const NavigationBar = () => {
  return (
    <header className="ds-l-container">
      <div className="ds-u-display--flex ds-u-justify-content--between ds-u-align-items--center ds-u-padding-y--2">
        <img src="https://design.cms.gov/assets/images/logo-cms.png" alt="CMS Logo" style={{ height: '50px' }} />
        <nav className="ds-u-display--flex ds-u-gap--2">
          <a href="/" className="ds-c-button ds-c-button--transparent">Home</a>
          <a href="/" className="ds-c-button ds-c-button--transparent">About ASETT</a>
          <a href="/" className="ds-c-button ds-c-button--transparent">Contact Us</a>
          <a href="/" className="ds-c-button ds-c-button--transparent">Support</a>
          <Button variation="primary">Register</Button>
          <Button variation="primary">Login</Button>
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;
