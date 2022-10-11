import React from "react";

const Client = () => {
  return (
    <section className="client">
      <div className="container">
        <div className="row">
          <div className="client__wrapper">
            <h4 className="client__wrapper-subheading">Meet our Clients</h4>
            <p className="client__wrapper-description">
              This guys are using our service and they're more than happier
              ever.
            </p>
            <div className="client__wrapper-clients">
              <img
                src="https://eset-up-host.surge.sh/assets/images/image%2011.png"
                alt="uber"
              />
              <img
                src="https://eset-up-host.surge.sh/assets/images/image%2012.png"
                alt="google"
              />
              <img
                src="https://eset-up-host.surge.sh/assets/images/image%2013.png"
                alt="paypal"
              />
              <img
                src="https://eset-up-host.surge.sh/assets/images/image%2014.png"
                alt="microsoft"
              />
              <img
                src="https://eset-up-host.surge.sh/assets/images/image%2015.png"
                alt="dribble"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
