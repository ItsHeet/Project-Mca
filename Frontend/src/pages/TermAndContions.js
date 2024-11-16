// src/pages/TermsAndConditions.js

import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import "../TermAndCondition.css";


const TermsAndConditions = () => {
  return (
    <>
      <Meta title={"Terms and Conditions"} />
      <BreadCrumb title="Terms and Conditions" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="terms-conditions">
          <h1 className="policy-title">Terms and Conditions</h1>
          <div className="policy-text">
            <h5>Welcome to Kutch Mart!</h5>
            <p>
              These terms and conditions outline the rules and regulations for the use of Ethnics of Kutch’s website.
            </p>

            <h4>Acceptance of Terms</h4>
            <p>
              By accessing this website, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h4>Use of Site</h4>
            <p>
              The content provided on this site is for informational purposes only. Unauthorized use of this website may give rise to a claim for damages.
            </p>

            <h4>Privacy Policy</h4>
            <p>
              Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and disclose your personal data.
            </p>


            <h4>Governing Law</h4>
            <p>
              These terms shall be governed and construed in accordance with the laws of India.
            </p>

            <h4>Modifications</h4>
            <p>
              Ethnics of Kutch reserves the right to change, modify, or revise these terms at any time.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermsAndConditions;
