import React from "react";
import RequestQuote from "../components/RequestQuote";
import Footer from "../components/Footer";

const Request = () => {
  return (
    <div className="request">
      <div className="request-bg pt-y-big">
        <h2>Lets Build Something Amazing Together</h2>
      </div>
      <RequestQuote />
      <Footer />
    </div>
  );
};

export default Request;
