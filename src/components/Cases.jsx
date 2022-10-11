import React from "react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    subtitle: "Design",
    title: "A custom formula for your skin’s unique needs",
    img: "prime-tech",
    link: "/web-design",
  },
  {
    id: 2,
    subtitle: "Development",
    title: "Open space floor plans for you next venture",
    img: "prime-awesome",
    link: "/web-development",
  },
  {
    id: 3,
    subtitle: "Consultancy",
    title: "For your best look ever",
    img: "prime-help",
    link: "/request-quote",
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="row overflow-hidden">
          {caseStudies.map((caseItem) => (
            <Link to={caseItem.link} exact className="case" key={caseItem.id}>
              <div className="case-details">
                <span>{caseItem.subtitle}</span>
                <h2>{caseItem.title}</h2>
              </div>
              <div className="case-image">
                <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
