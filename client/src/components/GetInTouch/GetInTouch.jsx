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
          className="bg-black p-20 text-center"
        >
          <div className="text-3xl text-white">
            "Success is walking from failure to failure with no loss of
            enthusiasm."
          </div>
          <div className="text-stone-400 text-xl text-right mr-52 mt-2">
            - Winston Churchill
          </div>
        </motion.div>

        <div className="bg-black p-10 pr-44">
          <div className="flex justify-between items-center">
            <div>
              {" "}
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
                className="w-60 h-60 rounded-full mr-6"
              >
                <img
                  className="object-fill rounded-full border-4 border-solid border-stone-300"
                  src={TeamImg}
                  alt=""
                />
              </motion.div>

              <div className="mt-2">
                <h3 className="text-4xl font-bold pl-2 mb-3 pb-1 pt-0.5 w-80 text-black bg-stone-300">
                  GET IN TOUCH
                </h3>
                <div className="pb-2">
                  <span className="pb-40">
                    <LocationOnIcon sx={{ color: "grey" }} fontSize="large" />
                  </span>
                  <span className="ml-2 text-xl text-stone-300">
                    E-Cell, MNNIT Allahabad, India
                  </span>
                </div>
                <div className="pb-2">
                  <span className="pb-40">
                    <PhoneIcon sx={{ color: "grey" }} fontSize="large" />
                  </span>
                  <span className="ml-2 text-xl text-stone-300">
                    +91 7726924556, +91 9630929939
                  </span>
                </div>
                <div className="pb-2">
                  <span className="pb-40">
                    <EmailIcon sx={{ color: "grey" }} fontSize="large" />
                  </span>
                  <span className="ml-2 text-xl text-stone-300">
                    support@ecellmnnit.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-20 pb-8 text-stone-300 h-10 bg-black">
          Copyright &copy; E-Cell 2022. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
