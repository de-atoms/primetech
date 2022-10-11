import React from "react";
import { stacks } from "../data";

const Stack = () => {
  return (
    <div className="stack">
      <div className="container">
        <div className="row">
          <div className="stack__details">
            <h2 className="stack__details-title">Programs and Technologies</h2>
            <p className="stack__details-description">
              We use up-to-date software and reliable technologies
            </p>
          </div>
          <div className="stack__content">
            {stacks.map((stack) => (
              <div className="stack__content-container" key={stack.id}>
                <div className="stack__svg">{stack.svg}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
