import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";

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
    <div className="flex justify-end">
      {isVisible && (
        <div
          className="bg-stone-300 w-12 h-12 flex justify-center items-center rounded-full position: fixed z-2 mr-8 hover:cursor-pointer"
          onClick={ScrollToBtn}
          id="scroll"
        >
          <div className="">
            <IconButton>
              <KeyboardDoubleArrowUpRoundedIcon
                sx={{ color: "black" }}
                fontSize="large"
              />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
