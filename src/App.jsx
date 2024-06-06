import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { OtherServices } from "./components/otherServices";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Description } from "./components/description";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";
// import "./styles.css";
import logo from "./assets/logo-blanco-small.png";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* <div className="App-bg">
        <div className="container">
          <h1>
            <img src={logo} alt="akigreen" />
            <br />
            <h4 style={{ color: "white" }}>sitio web en construcción</h4>
            <br />
          </h1>
          <Timer />
          <Optin />
          <Preloader />
        </div>
      </div> */}
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Description data={landingPageData.Description} />
      {/* <Features data={landingPageData.Features} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} /> */}
      <OtherServices data={landingPageData.OtherServices} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;
