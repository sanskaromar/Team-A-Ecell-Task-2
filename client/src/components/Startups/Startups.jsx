import logo1 from "./baabtra.png";
import logo2 from "./loco.jpg";
import logo3 from "./drivezy.png";
import logo4 from "./EveryCrave.jpg";
import logo5 from "./kratikal.png";
import logo6 from "./SymbTechnologies.png";
import logo7 from "./Trelos.png";
import logo8 from "./unacademy.png";
import logo9 from "./PVR.jpg";
import { motion } from "framer-motion";
const Startups = () => {
  return (
    <div className="mt-12 relative" id="startups">
      <div className="flex flex-col items-center">
        <div className="text-4xl text-center text-white">
          STARTUPS BY MNNITians
        </div>
        <div className="flex space-x-6 justify-center w-full items-center mt-10">
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileTap={{ scale: 1.5 }}
            className="bg-white rounded-2xl"
          >
            <img
              className="object-contain w-40 h-40 rounded-2xl"
              src={logo1}
              alt="baabtra.com"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileTap={{ scale: 1.5 }}
          >
            <img
              className="object-contain w-40 h-40 rounded-2xl"
              src={logo2}
              alt="loco.com"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileTap={{ scale: 1.5 }}
            className="bg-white rounded-2xl"
          >
            <img
              className="object-contain w-40 h-40 rounded-2xl"
              src={logo3}
              alt="drivezy.com"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileTap={{ scale: 1.5 }}
          >
            <img
              className="object-contain w-40 h-40 rounded-2xl"
              src={logo4}
              alt="EveryCrave.com"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileTap={{ scale: 1.5 }}
          >
            <img
              className="object-contain w-40 h-40 rounded-2xl"
              src={logo5}
              alt="kratikal.com"
            />
          </motion.div>
        </div>
        <div className="flex space-x-6 justify-center w-full items-center mt-6">
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileTap={{ scale: 1.5 }}
          >
            <img
              className="object-contain w-40 h-40 rounded-2xl"
              src={logo6}
              alt="symb.com"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileTap={{ scale: 1.5 }}
            className="bg-white rounded-2xl"
          >
            <img
              className="object-contain w-40 h-40 rounded-2xl"
              src={logo7}
              alt="trelos.com"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileTap={{ scale: 1.5 }}
            className=""
          >
            <img
              className="object-contain w-40 h-40 rounded-2xl"
              src={logo8}
              alt="unacademy.com"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileTap={{ scale: 1.5 }}
            className="bg-white rounded-2xl"
          >
            <img
              className="object-contain w-40 h-40 rounded-2xl"
              src={logo9}
              alt="pvr.com"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Startups;
