import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import "../RefundPolicy.css";

const RefundPolicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy-content">
              <h1 className="policy-title">Refund Policy</h1>

              <article className="policy-section">
                <header className="section-header">
                  <h4>Returns</h4>
                </header>
                <p>
                  You have 30 days from the date of purchase to request a return. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
                </p>
              </article>

              <article className="policy-section">
                <header className="section-header">
                  <h4>Refunds</h4>
                </header>
                <p>
                  Once we receive your item, we will inspect it and notify you of the status of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 7-10 business days.
                </p>
              </article>

              <article className="policy-section">
                <header className="section-header">
                  <h4>Exchanges</h4>
                </header>
                <p>
                  We only replace items if they are defective or damaged. If you need to exchange an item, please contact our support team with details and we will guide you through the process.
                </p>
              </article>

              <article className="policy-section">
                <header className="section-header">
                  <h4>Eligibility for Refunds</h4>
                </header>
                <p>
                  To be eligible for a refund, your item must be in the same condition as when you received it. Products that are used, damaged, or missing parts may not qualify for a refund. Please include the receipt or proof of purchase.
                </p>
              </article>

              <article className="policy-section">
                <header className="section-header">
                  <h4>Late or Missing Refunds</h4>
                </header>
                <p>
                  If you haven’t received a refund yet, first check your bank account. Then contact your credit card company, as it may take some time before your refund is officially posted. If you’ve done all of this and still have not received your refund, please contact us.
                </p>
              </article>

              <article className="policy-section">
                <header className="section-header">
                  <h4>Non-Refundable Items</h4>
                </header>
                <p>
                  Some items are non-refundable, such as perishable goods, custom products, and certain health and personal care items. Please refer to our full terms and conditions for a complete list of non-refundable items.
                </p>
              </article>

              <article className="policy-section">
                <header className="section-header">
                  <h4>How to Initiate a Return</h4>
                </header>
                <p>
                  To start a return, please contact our customer service team. We will provide you with instructions on how and where to send your package. Items sent back without prior authorization will not be accepted.
                </p>
              </article>

              <article className="policy-section">
                <header className="section-header">
                  <h4>Shipping Costs</h4>
                </header>
                <p>
                  Shipping costs for returns are the responsibility of the customer. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
                </p>
              </article>

              <article className="policy-section">
                <header className="section-header">
                  <h4>Contact Us</h4>
                </header>
                <p>
                  For any further questions related to refunds and returns, please contact us at support@example.com or call our customer service at 1-800-555-0199.
                </p>
              </article>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RefundPolicy;
