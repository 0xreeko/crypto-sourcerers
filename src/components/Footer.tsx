import { Link } from "react-router-dom";
import { etherIcon, maticIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white text-center space-y-4 sm:space-y-0 space-x-6 flex flex-col sm:flex-row justify-center items-center h-full w-full py-24 px-4">
      <div className="logo">
        copyright © 2022 Web3Source, all rights reserved.
      </div>
      <div className="catchphrase">The #1 Gateway for Web3 Jobs & Talent.</div>
      <Link to={"/donations"}>
        <div className="bmakbw flex items-center space-x-1 hover:text-gray-400 transition outline-none">
          <span className="fill-indigo-500 w-5 h-5 transform transition hover:scale-105">
            {maticIcon}{" "}
          </span>{" "}
          <span className="text-sky-500 transform transition hover:scale-105">
            {etherIcon}
          </span>{" "}
          Donations
        </div>
      </Link>
      <div className="navs grid grid-cols-3 gap-x-4">
        <Link to={"/careers"}>
          <span className="hover:text-gray-400 transition outline-none">
            Careers
          </span>
        </Link>
        <Link to={"/about"}>
          <span className="hover:text-gray-400 transition outline-none">
            About
          </span>
        </Link>
        <a
          target={`_blank`}
          href="https://twitter.com/web3Source"
          className="hover:text-gray-400 transition outline-none"
        >
          Twitter
        </a>
        <Link to={"/startups"}>
          <span>Startups</span>
        </Link>
        <span className="hover:text-gray-400 transition outline-none">
          Learning
        </span>

        <Link to={"/contact"}>
          <span className="hover:text-gray-400 transition outline-none">
            Contact
          </span>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
