import logo1 from "./Baabtra.png";
import logo2 from "./Loco.jpg";
import logo3 from "./Drivezy.png";
import logo4 from "./EveryCrave.jpg";
import logo5 from "./Kratikal.png";
import logo6 from "./SymbTechnologies.png";
import logo7 from "./Trelos.png";
import logo8 from "./Unacademy.png";
import logo9 from "./PVR.jpg";
import { motion } from "framer-motion";
const Startups = () => {
  return (
    <div className="mt-12 mb-8" id="startups">
      <div className="flex flex-col items-center">
        <div id="stick" className="flex justify-center">
          <div className="bg-stone-400 h-20 w-1 mb-8"></div>
        </div>
        <motion.div
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 2, ease: "easeOut" }}
          whileTap={{ scale: 0.9 }}
          className="text-4xl text-stone-300 flex flex-col items-center mb-4"
        >
          <div className="text-4xl text-center text-stone-300">
            STARTUPS BY MNNITians
          </div>
        </motion.div>
        <div className="flex space-x-6 justify-center w-full items-center mt-10 z-0">
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            className="bg-white rounded-2xl"
          >
            <a target="_blank" rel="noreferrer" href="https://baabtra.com/">
              <img
                className="object-contain w-40 h-40 rounded-2xl"
                src={logo1}
                alt="baabtra.com"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <a target="_blank" rel="noreferrer" href="https://loco.gg/">
              {" "}
              <img
                className="object-contain w-40 h-40 rounded-2xl"
                src={logo2}
                alt="loco.com"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            className="bg-white rounded-2xl"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://drivezy.com/Bengaluru"
            >
              <img
                className="object-contain w-40 h-40 rounded-2xl"
                src={logo3}
                alt="drivezy.com"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <a target="_blank" rel="noreferrer" href="http://everycrave.me/">
              <img
                className="object-contain w-40 h-40 rounded-2xl"
                src={logo4}
                alt="EveryCrave.com"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <a target="_blank" rel="noreferrer" href="https://kratikal.com/">
              <img
                className="object-contain w-40 h-40 rounded-2xl"
                src={logo5}
                alt="kratikal.com"
              />
            </a>
          </motion.div>
        </div>
        <div className="flex space-x-6 justify-center w-full items-center mt-6">
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.symbtechnologies.com/"
            >
              <img
                className="object-contain w-40 h-40 rounded-2xl"
                src={logo6}
                alt="symb.com"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            className="bg-white rounded-2xl"
          >
            <a target="_blank" rel="noreferrer" href="https://www.trelos.in/">
              <img
                className="object-contain w-40 h-40 rounded-2xl"
                src={logo7}
                alt="trelos.com"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            className=""
          >
            <a target="_blank" rel="noreferrer" href="https://unacademy.com/">
              <img
                className="object-contain w-40 h-40 rounded-2xl"
                src={logo8}
                alt="unacademy.com"
              />
            </a>
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            className="bg-white rounded-2xl"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.pvrcinemas.com/"
            >
              <img
                className="object-contain w-40 h-40 rounded-2xl"
                src={logo9}
                alt="pvr.com"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Startups;
