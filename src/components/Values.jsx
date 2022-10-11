import React from "react";

const values = [
  {
    img: "prime-happy",
    title: "Trust",
    text: "We won’t sell you a Ferrari when what you really need is a Fiat. This will be a partnership of honesty - from start to finish.",
  },
  {
    img: "prime-mail",
    title: "Service",
    text: "Great customer service isn't hard, just hard to come by. We're 100% about service - it’s ingrained in our DNA, and that's how we like it.",
  },
  {
    img: "prime-relationship",
    title: "Relationship",
    text: "We aren’t looking for a one-night stand. We immerse ourselves in your business so deeply that we feel (almost) like employees.",
  },
];

const Values = () => {
  return (
    <div className="value">
      <div className="container">
        <div className="row">
          <h2 className="value__heading">
            Our internal values translate into brand promises.
          </h2>
          <div className="value__content grid">
            {values.map((value, index) => (
              <div className="value__content-card" key={index}>
                <img
                  src={require(`../assets/${value.img}.png`)}
                  alt={value.title}
                />
                <h2>{value.title}</h2>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
