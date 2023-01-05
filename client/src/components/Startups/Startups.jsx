import logo1 from "./baabtra.png";
import logo2 from "./loco.jpg";
import logo3 from "./drivezy.png";
import logo4 from "./EveryCrave.jpg";
import logo5 from "./kratikal.png";
import logo6 from "./symb.png";
import logo7 from "./trelos.jpeg";
import logo8 from "./unacademy.png";
import logo9 from "./pvr.jpeg";
import { motion } from "framer-motion";
const Startups = () => {
  return (
    <div className=" bg-gray-700 xl:py-20 sm:py-10" id="startups">
      <div className="xl:flex xl:flex-row xl:mx-40 md:mx-20 sm:mx-10 sm:flex sm:flex-col sm:items-center">
        <div className="text-6xl font-bold xl:w-2/5 sm:flex sm:flex-col sm:items-center xl:pb-20 sm:pb-10">
          <div className="bg-gray-400 h-20 w-1 xl:mb-4 sm:mb-8"></div>
          STARTUPS BY MNNITians
        </div>
        <div className="xl: m-6 p-4 xl:bg-gray-300 xl:mx-10 xl:w-3/5 rounded-3xl display-flex flex-wrap display-inline space-x-6">
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileTap={{ scale: 1.5 }}
          >
            <img
              className="w-40 h-40 rounded-lg  "
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
              className="w-40 h-30  rounded-lg "
              src={logo2}
              alt="loco.com"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileTap={{ scale: 1.5 }}
          >
            <img
              className="w-40 h-40 rounded-lg  "
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
              className="w-40 h-30 rounded-lg  "
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
              className="w-40 h-30 rounded-lg  "
              src={logo5}
              alt="kratikal.com"
            />
          </motion.div>
        </div>
        <div className="m-4 p-4 xl:bg-gray-300 xl:mx-10 xl:w-3/5 rounded-3xl display-flex flex-wrap display-inline space-x-6 ">
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileTap={{ scale: 1.5 }}
          >
            <img
              className="w-40 h-30 rounded-lg  "
              src={logo6}
              alt="symb.com"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileTap={{ scale: 1.5 }}
          >
            <img
              className="w-40 h-40 rounded-lg  "
              src={logo7}
              alt="trelos.com"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileTap={{ scale: 1.5 }}
          >
            <img
              className="w-40 h-30 rounded-lg  "
              src={logo8}
              alt="unacademy.com"
            />
          </motion.div>
          <motion.div
            whileInView={{ x: [-20, 20], opacity: [0, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileTap={{ scale: 1.5 }}
          >
            <img className="w-40 h-40 rounded-lg  " src={logo9} alt="pvr.com" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Startups;
