import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const ScrollToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behaviour: "smooth" });
  };

  const listenToScroll = () => {
    let height = 100;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > height) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div>
      {isVisible && (
        <div
          className="bg-stone-300 w-12 h-12 flex justify-center items-center rounded-full fixed bottom-0 right-0 mr-6 mb-6 hover:cursor-pointer z-2"
          onClick={ScrollToBtn}
        >
          <div className="">
            <motion.div
              className="flex flex-col justify-center items-center"
              whileInView={{ y: [3, -3], opacity: [0, 1] }}
              transition={{
                duration: 1,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <IconButton>
                <KeyboardDoubleArrowUpRoundedIcon
                  sx={{ color: "black" }}
                  fontSize="large"
                />
              </IconButton>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
