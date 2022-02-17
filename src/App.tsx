import { menuIcon, themeIcon } from "./components/Icons";
import "./index.css";
import { useToggleHook } from "./hooks/useToggleHook";
import Footer from "./components/Footer";
import Content from "./components/Content";
import WarningBanner from "./components/WarningBanner";
import { useEffect, useState } from "react";
import About from "./pages/About";

import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import LiveRoles from "./pages/LiveRoles";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import { Helmet } from "react-helmet-async";
import Login from "./pages/Login";

const App = () => {
  const theme = localStorage.getItem("isDarkMode");
  let [isToggled, toggle] = useToggleHook(theme !== "true");

  let [banner, setBanner] = useState<string>(
    `${localStorage.getItem("isBannerHidden")}`
  );
  let hasBanner = localStorage.getItem("isBannerHidden");
  // console.log(banner);

  const handleBanner = (): void => {
    localStorage.setItem("isBannerHidden", "true");
    setBanner(`${localStorage.getItem("isBannerHidden")}`);
  };

  // getters
  useEffect(() => {
    if (!hasBanner) {
      localStorage.setItem("isBannerHidden", "false");
      let temp = localStorage.getItem("isBannerHidden");
      setBanner(`${temp}`);
    } else {
      setBanner(`${localStorage.getItem("isBannerHidden")}`);
      hasBanner = localStorage.getItem("isBannerHidden");
    }
  }, []);

  // setters
  useEffect(() => {
    hasBanner = localStorage.getItem("isBannerHidden");
  }, [banner]);

  return (
    <Router>
      <div className={`${isToggled ? "" : "dark transition transform"} `}>
        <div
          className={`font-lato w-full h-full overflow-hidden bg-[#F3F6F9] bg-gradient-to-tr dark:from-[#060508] dark:to-[#1a1a1c] dark:text-white `}
        >
          {banner === "false" ? (
            <WarningBanner handleBanner={handleBanner} />
          ) : null}
          <Helmet>
            <title>
              CryptoSourcerers - The World's #1 Source for Blockchain Talent.
            </title>
          </Helmet>
          <header className="flex justify-between items-center h-12 w-full py-3 px-6 md:px-12 lg:px-32 mb-6 border-b border-gray-200 dark:border-gray-800">
            <Link to={"/"}>
              <div className="logo">Crypto Sourcerers</div>
            </Link>
            <div className="navs space-x-6 lg:space-x-12 font-medium hidden md:inline-block">
              {[
                "Live Roles",
                "Bounty Roles",
                "Careers",
                "Insights",
                "Learning",
              ].map((item) => (
                <a
                  className="hover:text-gray-400  transition hover:cursor-pointer"
                  href={`${item.toLocaleLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="inline-block md:hidden  text-indigo-500">
              {menuIcon}
            </div>
            <div className="ctaSection hidden md:flex items-center space-x-3">
              <div
                className="text-gray-400 transition hover:text-purple-600 dark:hover:text-amber-300"
                onClick={toggle}
              >
                {themeIcon}
              </div>
              <Link to={"/login"}>
                <button className="cta py-1 px-3 rounded text-white bg-gradient-to-tr from-[#ed194a] to-pink-500 transition transform hover:scale-105 outline-none">
                  Roleseekers
                </button>
              </Link>
              <button className="cta py-1 px-3 rounded text-white bg-gradient-to-tr from-[#6387f1] to-purple-500 transition transform hover:scale-105 outline-none">
                Recruiters
              </button>
            </div>
          </header>
          <Content>
            <Routes>
              <Route path="/careers" element={<Careers />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" />
              <Route path="/insights" element={<Insights />} />
              <Route path="/learning" />
              <Route path="/roles" element={<LiveRoles />} />
              <Route path="/legal" />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Content>
          <section className="newsletter text-white">
            {/* newsletter */}
            newsletter
          </section>
          <section className="hero relative h-screen bg-gradient-to-tr from-[#060508] to-[#1a1a1c] dark:from-gray-200 dark:to-gray-200">
            {/* Hero */}
            <div className="absolute -top-6 left-[50%] p-6 rounded-full bg-[#ed194a]"></div>
            Hero
          </section>
          <section>
            {/* Feature */}
            Feature
          </section>
          <section>
            {/* Stats */}
            Stats
          </section>
          <section>
            {/* Testimonials */}
            Testimonials
          </section>
          <section>
            {/* Contact */}
            Contact
          </section>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
