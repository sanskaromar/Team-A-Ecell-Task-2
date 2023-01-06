import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";
import TeamImg from "../../assets/TshirtLogo.jpg";
import { motion } from "framer-motion";
const GetInTouch = () => {
  return (
    <div id="contact">
      <div className="">
        <motion.div
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-center"
        >
          <div className="md:text-3xl sm:text-lg text-white">
            "Success is walking from failure to failure with no loss of
            enthusiasm."
          </div>
          <div className="text-stone-300 text-xl text-right md:mr-52 sm:mr-32 mt-2">
            - Winston Churchill
          </div>
        </motion.div>

        <div className="py-10 px-10 pr-44 sm:pr-20 md:pr-20">
          <div className="flex justify-between items-center">
            <div className="lg:mr-20 md:mr-10">
              <ul className="mt-1">
                <motion.div
                  whileInView={{ y: [5, 0], opacity: [0, 1] }}
                  whileTap={{ scale: 1.5 }}
                >
                  {" "}
                  <li className="mb-1">
                    <a href="https://www.facebook.com/mnnitecell">
                      <IconButton>
                        <FacebookIcon
                          sx={{ color: "white" }}
                          fontSize="large"
                        />
                      </IconButton>
                    </a>
                  </li>
                </motion.div>
                <motion.div
                  whileInView={{ y: [5, 0], opacity: [0, 1] }}
                  whileTap={{ scale: 1.5 }}
                >
                  {" "}
                  <li className="mb-1">
                    <a href="https://www.instagram.com/ecellmnnit/">
                      <IconButton>
                        <InstagramIcon
                          sx={{ color: "white" }}
                          fontSize="large"
                        />
                      </IconButton>
                    </a>
                  </li>{" "}
                </motion.div>
                <motion.div
                  whileInView={{ y: [5, 0], opacity: [0, 1] }}
                  whileTap={{ scale: 1.5 }}
                >
                  {" "}
                  <li className="mb-1">
                    <a href="https://twitter.com/ecellmnnit">
                      <IconButton>
                        <TwitterIcon sx={{ color: "white" }} fontSize="large" />
                      </IconButton>
                    </a>
                  </li>
                </motion.div>
                <motion.div
                  whileInView={{ y: [5, 0], opacity: [0, 1] }}
                  whileTap={{ scale: 1.5 }}
                >
                  {" "}
                  <li className="mb-1">
                    <a href="https://www.linkedin.com/company/entrepreneurship-cell-nit-allahabad/?original_referer=">
                      <IconButton>
                        <LinkedInIcon
                          sx={{ color: "white" }}
                          fontSize="large"
                        />
                      </IconButton>
                    </a>
                  </li>
                </motion.div>
              </ul>
            </div>
            <div className="flex items-center">
              <motion.div
                whileInView={{ y: [5, 0], opacity: [0, 1] }}
                whileTap={{ scale: 1.2 }}
                className="lg:w-60 lg:h-60 sm:w-40 sm:h-40 rounded-full mr-6"
              >
                <img
                  className="object-fill rounded-full border-4 border-solid border-stone-400"
                  src={TeamImg}
                  alt=""
                />
              </motion.div>

              <div className="mt-2 relative">
                <h3 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold pl-2 mb-3 pb-1 pt-0.5 lg:w-80 md:w-72 sm:w-60 text-black bg-stone-300">
                  GET IN TOUCH
                </h3>
                <div className="pb-2">
                  <span className="pb-40">
                    <LocationOnIcon sx={{ color: "grey" }} fontSize="large" />
                  </span>
                  <span className="ml-2 md:text-lg lg:text-xl sm:text-sm text-stone-300">
                    E-Cell, MNNIT Allahabad, India
                  </span>
                </div>
                <div className="pb-2">
                  <span className="pb-40">
                    <PhoneIcon sx={{ color: "grey" }} fontSize="large" />
                  </span>
                  <span className="ml-2 md:text-lg lg:text-xl sm:text-sm text-stone-300">
                    +91 7726924556, +91 9630929939
                  </span>
                </div>
                <div className="pb-2">
                  <span className="pb-40">
                    <EmailIcon sx={{ color: "grey" }} fontSize="large" />
                  </span>
                  <span className="ml-2 md:text-lg lg:text-xl sm:text-sm text-stone-300">
                    support@ecellmnnit.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-20 pb-8 text-stone-300 h-10">
          Copyright &copy; E-Cell 2022. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
