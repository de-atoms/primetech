import React from "react";

const cards = [
  {
    id: 1,
    title: "Web Apps & Software",
    desc: "Your team needs internal software. Your customers want functional apps. We prototype, user test, and build high performing solutions that are both beautiful and scalable.",
    img: "Webdevelopment",
  },
  {
    id: 2,
    title: "Web Design",
    desc: "Create an engaging web presence worthy of your business. We can design modern websites which will help you reach your conversion goal.",
    img: "webdesign",
  },
  {
    id: 3,
    title: "UI/UX Design",
    desc: "We provide UI/UX Design services, and of course with the best quality. we can help craft your story and design the brand assets to elevate your business.",
    img: "UIdesign",
  },
  {
    id: 4,
    title: "Mobile Development",
    desc: "Mobile apps are now a must for most of businesses. We can design and develop mobile apps that your users will fall in love with.",
    img: "Mobiledevelopment",
  },
  {
    id: 5,
    title: "Graphics design",
    desc: "We can help you with the designing the graphics of your assets which will really convert and urge people to click your ad to see more.",
    img: "Graphicdesign",
  },
  {
    id: 6,
    title: "Server management & maintenance",
    desc: "We Ensure Your Servers Are Stable, Fast & Secure So You Can Focus On Your Business. 24/7 monitoring, Backup Management, Security Hardening, Service tune-up & much more.",
    img: "Server",
  },
];

const Service = () => {
  return (
    <section className="services">
      <img
        src={require("../assets/bucket-gradient.png")}
        alt="prime-bucket"
        className="services-bucket"
      />
      <div className="container">
        <div className="row">
          <div className="services__wrapper">
            <h4 className="services__wrapper-subheading">Our Services</h4>
            <p className="services__wrapper-description">
              Determine the service you need ever.
            </p>
            <div className="services__wrapper-cards">
              {cards.map((card, index) => (
                <div className="card" key={index.toString()}>
                  <div className="card__image">
                    <img
                      src={require(`../assets/icons/service/${card.img}.png`)}
                      alt={card.title}
                      className="services-img"
                    />
                  </div>
                  <h2 className="card__title">{card.title}</h2>
                  <p className="card__desc">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
