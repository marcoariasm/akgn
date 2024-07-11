import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import data from "../data/content";

const { menu, logoUrl } = data.navigation;

const Navigation = () => {
  const [scrollOn, setScrollOn] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollOn(window.scrollY);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = (e) => {
    e.preventDefault();
    let menuBtn = document.getElementById("menu-btn");
    let menu = document.getElementById("menu");
    menuBtn.classList.toggle("open");
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
  };

  const jumpToReleventDiv = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`shadow-md sticky top-0 z-30 ${
          scrollOn > 0 ? "bg-lightGreen-80 z-40" : "bg-white"
        }`}
      >
        <div className="flex flex-row items-center justify-between mx-auto lg:max-w-[80%] h-[90px] md:h-[70px] px-8">
          {/*-- logo */}
          <a href="/">
            <img src={logoUrl} alt="" />
          </a>

          {/* menu links */}
          <div
            className="lg:items-center"
            id="top"
            style={{ scrollMarginTop: 0 }}
          >
            <ul className="list-none flex invisible lg:visible space-x-5">
              {menu.map((m) => {
                return (
                  <li key={m.id}>
                    <NavLink
                      // to={m.link}
                      className="text-darkGreen-100 font-semibold text-xl cursor:pointer hover:text-darkGreen-100 active:text-darkGreen-100 visited:text-darkGreen-100 focus:text-darkGreen-100"
                      onClick={(e) => {
                        toggleMenu(e);
                        jumpToReleventDiv(m.link);
                      }}
                    >
                      {m.item}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* hamburger menu button */}
          <div className="visible lg:invisible mr-6" onClick={toggleMenu}>
            <button
              id="menu-btn"
              type="button"
              className={`hamburger block z-40 focus:outline-none border-none${
                scrollOn > 0 ? "bg-lightGreen-80 z-40" : "bg-white"
              }`}
            >
              <span className="hamburger-top bg-darkGreen-100"></span>
              <span className="hamburger-middle bg-darkGreen-100"></span>
              <span className="hamburger-bottom bg-darkGreen-100"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* menu responsive overlay */}
      <div className="">
        <div
          id="menu"
          className={`visible lg:invisible py-4 fixed top-[70px] hidden flex-col self-end w-full h-svh text-white animate-telon bg-lemonGreen-100 text-center z-40 ${
            scrollOn ? toggleMenu : ""
          }`}
        >
          {menu
            .sort((a, b) => a.id - b.id)
            .map((m, index) => {
              return (
                <div key={index} className="mx-auto h-10 text-xl font-semibold mt-4">
                  <NavLink
                    onClick={(e) => {
                      toggleMenu(e);
                      jumpToReleventDiv(m.link);
                    }}
                  >
                    {m.item}
                  </NavLink>
                  {index === 0 && (
                    <hr className="bg-darkGreen-100 h-1 w-[280px] my-3 mx-auto" />
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Navigation;
