import React from "react";
import "./header.scss";
import { motion } from "framer-motion";

import logo from "../../assets/logo1.png";

function Header() {
  return (
    <div className="header__background-image" id="home">
      <div className="header__center">
        <motion.div
          className="display-flex"
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 3, ease: "easeOut" }}
          whileHover={{ scale: 0.9 }}
        >
          <img src={logo} alt="ecell logo" />
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center"
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 3, ease: "easeOut" }}
          whileTap={{ scale: 0.9 }}
        >
          <h1 className="inner">THE ENTREPRENEURSHIP CELL</h1>
          <h1 className="inner">MNNIT ALLAHABAD</h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
