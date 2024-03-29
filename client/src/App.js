import Layout from "./components/Layout/Layout";
import MobileNav from "./components/MobileNav/MobileNav";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Project";
import Techstack from "./pages/Techtstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { Swing } from "react-swift-reveal";
function App() {
  return (
    <>
      <MobileNav />
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        <WorkExp />
        <Contact />
      </div>
      <Swing>
        <div className="fouter mb-3 ms-3">
          <h4 className="text-center">Mad With Techinfoyt &copy; 2023</h4>
        </div>
      </Swing>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "aqua", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
