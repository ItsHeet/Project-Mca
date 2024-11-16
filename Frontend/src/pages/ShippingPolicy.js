import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import '../App.css';

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shipping Policy"} />
      <BreadCrumb title="Shipping Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="shipping-policy">
          <h1 className="policy-title">Return and Domestic/International Shipping Policy</h1>
          <p className="policy-text">
            <h4>Dear Customer,</h4>
            <p>It is a continuous endeavor of Kutch Mart to make shopping as much assured and convenient for its customer.</p>

            <h4>Return Policy:</h4>
            <p>Returns are accepted within 5 days of delivery of the order. However, it is a humble request to contact us at +91-9426813531 before returning the products to enable us to try and address your concern.</p>
            <p>For locations not serviceable for return shipping, the customer is required to arrange return shipping through India Post or a mutually agreed mode. Shipping cost will be refunded upon sending the payment receipt to Kutch Mart by email or WhatsApp through mutually convenient payment modes.</p>
            <p>Refunds will be issued provided the order is returned by the customer in the original condition as delivered.</p>
            <p>For International Shipping, returns are accepted on mutually agreeable terms on a case-by-case basis.</p>

            <h4>Shipping Policy:</h4>
            <p>Orders will generally be shipped within 48 hours of order confirmation. Orders may be dispatched through private courier or India Post, depending on the delivery location and package volume. Kutch Mart is responsible for ensuring that products reach the customer safely.</p>

            <h4>Shipping Policy for International Orders:</h4>
            <p>International orders are shipped generally within 48 hours, with delivery times ranging between 7-12 days. Priority shipping can be provided on request at an additional cost.</p>
            <p>We aim to make prior contact with customers of international orders, keeping them in the loop for confirmation before packing and shipping the items.</p>
          </p>
        </div>
      </Container>
    </>
  );
};

export default ShippingPolicy;
