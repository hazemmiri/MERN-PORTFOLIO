import React from "react";
// import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume.txt";
import Zoom from "react-reveal/Zoom";
import { MdMarkEmailRead } from "react-icons/md";
// import { Fade } from "react-awesome-reveal";
// import { FaMoon } from "react-icons/fa";
// import { BsSunFill } from "react-icons/bs";
import "./Home.css";

const Home = () => {
  // const [theme, setTheme] = useTheme();
  // hedlThem;
  // const handleTheme = () => {
  //   setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  // };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        {/* <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? <FaMoon /> : <BsSunFill />}
        </div> */}
        <div className="container home-content">
          <Zoom>
            <h2>Hi 👋 I'm [ Hazem Benslimen ] </h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["Full Stack Developer !", "Mern Stack Developer !"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Zoom>
          <Zoom>
            <div className="home-buttons">
              <button className="btn btn-hire">
                <MdMarkEmailRead size={20}> </MdMarkEmailRead>
                {" Hier Me "}
              </button>

              <a className="btn btn-cv" href={Resume} download="your_name.pdf">
                My Resume
              </a>
            </div>
          </Zoom>
        </div>
      </div>
    </>
  );
};

export default Home;
