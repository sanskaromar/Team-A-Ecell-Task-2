import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="xl:py-20 xl:pb-16 sm:py-10" id="about">
      <div className="xl:flex xl:flex-row xl:mx-40 md:mx-20 sm:mx-10 sm:flex sm:flex-col sm:items-center">
        <div className="xl:w-2/5 sm:flex sm:flex-col sm:items-center xl:pb-20 sm:pb-10">
          <div className="bg-stone-400 h-20 w-1 xl:mb-4 sm:mb-8"></div>
          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            transition={{ duration: 2, ease: "easeOut" }}
            whileTap={{ scale: 0.9 }}
            className="text-6xl text-stone-300"
          >
            ABOUT US
          </motion.div>
        </div>
        <motion.div
          whileInView={{ z: [-50, 20], opacity: [0, 1] }}
          transition={{ duration: 2, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          className="xl:bg-gray-300 xl:mx-10 xl:w-3/5 rounded-3xl"
        >
          <p className="xl:m-20 xl:text-black sm:text-stone-200 sm:mx-5 sm:my-5 text-center sm:text-lg xl:text-base">
            Entrepreneurship Cell started its functioning in October 2014 to
            inculcate the passion and spirit among students to pursue
            entrepreneurship and bring together the hustling minds having
            innovative solutions to the common societal problems and create
            scalable business ideas. E-Cell MNNIT comprises content, design,
            web, marketing, videography and networking teams for the
            collaborative and holistic work approach. E-Cell MNNIT actively
            hosts innumerous events and acts as a catalyst between young minds
            and brilliant ideas. Apart from this ECell MNNIT organizes
            RENAISSANCE, it's annual flagship entrepreneurial summit that
            provides a platform for aspiring entrepreneurs to encourage the
            entrepreneurial journey of translating thoughts into action through
            events like E PLAN, E TALK, PANEL DISCUSSION, MOCK IPL AUCTION, GAME
            OF STOCKS, INTERNSHIP FAIR and BUSINESS QUIZ.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
