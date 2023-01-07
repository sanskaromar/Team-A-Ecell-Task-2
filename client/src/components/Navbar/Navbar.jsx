import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import logo from "../../assets/logo1.png";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav id="app__navbar" className="">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {[
          "home",
          "about",
          "events",
          "startups",
          "webinars",
          "team",
          "contact",
        ].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <Link to={`${item}`} smooth={true} duration={500}>
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                "home",
                "about",
                "events",
                "startups",
                "webinars",
                "team",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    onClick={() => setToggle(false)}
                    to={`${item}`}
                    smooth={true}
                    duration={500}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
