import React from "react";
import Zoom from "react-reveal/Zoom";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  return (
    <>
      <Zoom>
        <div className="container techstack" id="tech Stack">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            technologies Stack
          </h2>
          <hr />

          <p className="pb-3 text-center">
            💻 including programming Languages, frameworks, Databses, front-end
            and back-end tools, and APIs{" "}
          </p>

          <span className="col-12 mt-3 mb-1 text-uppercase skill">
            Skills 💻
          </span>
          <hr />
        </div>

        <div className="row">
          {TechstackList.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justfy-content-center">
                      <div className="aling-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Zoom>
    </>
  );
};

export default Techstack;
