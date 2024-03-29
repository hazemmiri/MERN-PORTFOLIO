import React from "react";
import { Spin } from "react-swift-reveal";
import "./Project.css";

const Project = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROHECTS
        </h2>
        <hr />

        <p className="pb-3 text-center">
          1 E-Commerce Website (React.js, Node.js, MongoDB): Developed a
          full-stack e-commerce website where users can browse products, add
          them to their cart, and complete purchases securely. 2 Task Manager
          App (Vue.js, Node.js, Express.js, MongoDB): Built a task manager
          application to help users organize their tasks efficiently.
          Implemented features like user authentication, task creation, and task
          tracking. 3 Portfolio Website (HTML, CSS, JavaScript): Designed and
          developed my own portfolio website to showcase my skills, projects,
          and experience as a full-stack developer
        </p>
        {/* card design */}

        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4 ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://themewagon.com/wp-content/uploads/2020/12/eflyer.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-deteil-badge">Mongodb</span>
                  <span className="card-deteil-badge">Express</span>
                  <span className="card-deteil-badge">React</span>
                  <span className="card-deteil-badge">Node</span>
                </div>
                <div className="card-body text-center ">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Techinfoyt Shopping Website
                    </h5>
                  </div>
                  <a className="ad-bnt" href="#">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">MERN Stack</span>
                  <img
                    src="https://www.chanty.com/blog/wp-content/uploads/2020/12/nTask.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-deteil-badge">Mongodb</span>
                  <span className="card-deteil-badge">Express</span>
                  <span className="card-deteil-badge">React</span>
                  <span className="card-deteil-badge">Node</span>
                </div>
                <div className="card-body text-center ">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Task Manager App Website</h5>
                  </div>
                  <a className="ad-bnt" href="#">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://repository-images.githubusercontent.com/276876148/8df97f00-c21d-11ea-97e0-bdeb0ed3683d"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-deteil-badge">Mongodb</span>
                  <span className="card-deteil-badge">Express</span>
                  <span className="card-deteil-badge">React</span>
                  <span className="card-deteil-badge">Node</span>
                </div>
                <div className="card-body text-center ">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">
                      Portfolio Website Website
                    </h5>
                  </div>
                  <a className="ad-bnt" href="#">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Project;
