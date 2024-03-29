import React from "react";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-awesome-reveal";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <Zoom>
            <div className="col-md-6 about-img">
              <img
                src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/347228787_988620425646364_6465496557404408124_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DRHcfFG9fo0AX-WcYud&_nc_ht=scontent.ftun16-1.fna&oh=00_AfAD3Yf6FXWOWdJvAWeMgxzNGyjedJ4wDlnLDuSyMY3d0Q&oe=6603B999"
                alt=""
              />
            </div>
          </Zoom>

          <div className="col-md-6 about-content">
            <Fade left>
              <h1>About me</h1>
              <p>
                Hello ! 👋 I'm [ Hazem Benslimen ], a passionate junior
                full-stack JavaScript developer eager to make a mark in the
                world of web development. With a strong foundation in both
                front-end and back-end technologies, I love building intuitive
                and robust web applications that delight users and solve
                real-world problems.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
