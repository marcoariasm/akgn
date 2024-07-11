import React, { useEffect, useState } from "react";

import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Permits from './sections/Permits';
import Cta from './sections/Cta';
// import Clients from './sections/Clients';
import Faq from './sections/Faq';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import "./App.css";

const App = () => {
  const [, setScrollOn] = useState(0);
  
  useEffect(() => {
    const onScroll = () => setScrollOn(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Permits />
      <Cta />
      {/* <Clients /> */}
      <Faq />
      <Contact />
      <Footer />
        {/* {scrollOn > 0 && (
          <div className="flex justify-center items-center fixed rounded-full bg-lemonGreen-80 bottom-8 right-8 z-90 w-20 h-20 cursor-pointer">
            <div
              onClick={() => document.getElementsById("top").scrollIntoView({behavior: "smooth"})}
            >
              <img
                src="img/punta-de-flecha-hacia-arriba.png"
                alt=""
                className="w-16 h-auto"
              />
            </div>
          </div>
        )} */}
    </>
  );
};

export default App;
