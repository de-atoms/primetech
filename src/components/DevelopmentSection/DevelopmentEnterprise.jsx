import React from "react";
import Logo from "../logo";

const Services = [
  {
    img: "icon-development-1",
    name: "SEO best practices",
    text: "Mobile-friendly implementation, semantic HTML markup, (i.e., proper headings use – h1, h2, etc), 301 redirects, and more.",
  },
  {
    img: "icon-development-2",
    name: "Make marketing spend more efficient",
    text: "Understand where your visitors are coming from by integrating with your marketing stack, adding tracking events, and connecting forms to your CRM.",
  },
  {
    img: "icon-development-3",
    name: "Page Speed for conversion",
    text: "Page Speed is not only a powerful ranking factor in Google search, but it also enhances user experience, reduces bounce rates, and increases average time on a website—all of which leads to a higher conversion rate.",
  },
  {
    img: "icon-development-4",
    name: "Easy to update and scale",
    text: "We design the Webflow & empower marketing teams to scale and grow your website, creating powerful landing page templates and component structures.",
  },
  {
    img: "icon-development-5",
    name: "Engineering quality",
    text: "We deeply care about our code standards, and make sure that everything we do meets the highest engineering quality, from using semantic HTML and class nomenclature system, to implementing development best practices.",
  },
];

const DevelopmentEnterprise = ({ process }) => {
  return (
    <div className="developments__enterprise pt-y-big">
      <div className="container">
        <div className="row">
          {process ? (
            <>
              <div className="left developments__enterprise-left">
                <h2 className="left-title developments__enterprise-left-title">
                  <Logo /> Enterprise Partner
                </h2>
              </div>
              <div className="right developments__enterprise-right">
                <p className="developments__heading">
                  We got this one! Are we that good with Custom Softwares, i.e
                  WordPress, WebFlow etc? Yes, we are. Are we the best? Maybe, a
                  lot of people would say so.
                </p>
                <p className="developments__heading">
                  Why? How? Let’s go way back, when Webflow & WordPress just
                  started and we’ve started using it. Yes, that’s right! We’ve
                  been using Webflow since 2013 and WordPress since 2003. Yes,
                  that's many years ago! compared to when you reading this.
                </p>
                <p className="developments__text">
                  We actually started using Webflow & WordPress to build the
                  HTML/CSS which we’ve plugged with custom build backends to
                  create web applications. Sounds familiar? That’s because it’s
                  called “low-code” nowadays. But around that time it was just
                  about being smart and using cool tools. As the progrmming
                  world evolved, so did we, and we shifted our focus to creating
                  web experiences using CMS,LMS, Headless CMS and powerful fast
                  languanges using evolving softwares to its full potential and
                  building on top of it for everything else we need.
                </p>

                <div className="developments__enterprise-right-services">
                  {Services.map((service, index) => (
                    <div className={`card card-${index}`} key={index}>
                      <img
                        src={require(`../../assets/${service.img}.png`)}
                        alt={service.name}
                      />
                      <h3>{service.name}</h3>
                      <p>{service.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="left developments__enterprise-left">
                <h2 className="left-title developments__enterprise-left-title">
                  Being smart, as a process.
                </h2>
              </div>
              <div className="right developments__enterprise-right">
                <p className="developments__heading">
                  We use a Smart-Code (yes, we just coined this term) approach.
                  We basically use any programming language that suits a project
                  concept as a base for all of our projects and code anything
                  else we need on top of it. That goes from simple filters and
                  sliders to registration flows, API integrations, and even AI &
                  Machine Learning.
                </p>
                <p className="developments__heading">
                  With this approach, we reduce development cycles and enable
                  ourselves to create (even more) beautiful web experiences in a
                  fraction of the time it takes using traditional
                  methodologies—all the while without compromising quality
                  standards.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentEnterprise;
