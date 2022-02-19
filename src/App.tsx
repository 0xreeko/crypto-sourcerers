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
import Bounties from "./pages/Bounties";

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
            <title>MVP - LP.</title>
          </Helmet>
          <header className=" flex justify-between items-center h-12 w-full py-3 px-6 md:px-12 lg:px-32 mb-6 border-b border-gray-200 dark:border-gray-800">
            <Link to={"/"}>
              <div className="logo">Project Name Deya</div>
            </Link>
            <div className="navs space-x-6 lg:space-x-12 font-medium hidden md:inline-block">
              {["Link", "Link", "Link"].map((item) => (
                <a
                  className="hover:text-gray-400  transition hover:cursor-pointer"
                  href={`${item.toLocaleLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="inline-block md:hidden  text-[#ed194a]">
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
                <button className="cta py-1 px-3 rounded text-white bg-gradient-to-tr from-[#ed194a] to-pink-500">
                  CTA
                </button>
              </Link>
              <button className="cta py-1 px-3 rounded text-white bg-gradient-to-tr from-[#6387f1] to-purple-500">
                CTA
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
              <Route path="/bounties" element={<Bounties />} />
              <Route path="/legal" />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Content>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
