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
          transition={{delay :0.3, duration: 0.3, ease: "easeOut" }}
          whileTap={{ scale: 0.9 }}
          viewport={{ once: true }}
        >
          <img src={logo} alt="ecell logo" />
        </motion.div>
        <motion.div
          className="display-flex"
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{delay:0.8, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1>THE ENTREPRENEURSHIP CELL MNNIT ALLAHABAD</h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
