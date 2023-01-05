import { motion } from "framer-motion";
const Renaissance = () => {
  return (
    <div className="" id="renaissance">
      <div className="flex flex-col items-center justify-center px-20 py-10">
        <motion.div
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 2, ease: "easeOut" }}
          whileTap={{ scale: 0.9 }}
          className="text-4xl text-white flex flex-col items-center mb-4"
        >
          <div className="bg-gray-400 mt-4 h-20 w-1 mb-6"></div>
          RENAISSANCE
        </motion.div>
        <div className="">
          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 2, ease: "easeOut" }}
            whileTap={{ scale: 0.9 }}
          >
            <p className="text-white text-center sm:mx-10 lg:mx-40">
              A conference for investors, entrepreneurs, budding entrepreneurs,
              venture capitalists. Networking and pitching ideas lie at the core
              of renaissance, renaissance means new beginnings, which is what
              startups are mainly all about.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Renaissance;
