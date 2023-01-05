import Gary from "../../assets/Appreciation/Gary.png";
import Rajeev from "../../assets/Appreciation/Rajeev.jpg";
import Chetanya from "../../assets/Appreciation/chetanya.jpg";
import Abhilekh from "../../assets/Appreciation/Abhilekh.jpg";
import Mansi from "../../assets/Appreciation/Mansi.jpg";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { motion } from "framer-motion";
const Appreciation = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");

    slider.scrollLeft = slider.scrollLeft - 1000;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");

    slider.scrollLeft = slider.scrollLeft + 1000;
  };

  return (
    <div className="pt- pb-0 bg-black">
      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 2, ease: "easeOut" }}
        whileTap={{ scale: 0.9 }}
        className="text-center"
      >
        <h3 className="text-white pb-4 font-bold text-3xl">
          LINES OF APPRECIATION
        </h3>
      </motion.div>
      <motion.div
        whileInView={{
          y: [50, 0],
          opacity: [0, 1],
          transform: "rotateX(360deg)",
        }}
        transition={{ duration: 2, ease: "easeOut" }}
        id="carousel_container"
        className="h-96 flex mx-20"
      >
        <div className="flex items-center justify-center mr-4">
          <KeyboardArrowLeftIcon
            className="opacity-100 hover:opacity-50 cursor-pointer"
            onClick={slideLeft}
            sx={{ color: "white" }}
            fontSize="large"
          />
        </div>

        <div
          id="slider"
          className="flex w-full h-full py-10 px-4 overflow-x-scroll scroll scroll-smooth whitespace-nowrap scrollbar-hide"
        >
          <div className="bg-stone-300 px-4 py-12 flex flex-col items-center rounded-3xl mr-8 hover:cursor-pointer hover:scale-105 ease-in-out duration-300 w-1/3">
            <div className="mb-4 font-bold text-lg">
              Efficient Collaborating
            </div>
            <div>
              <p className="text-center">
                I duly hope the legacy continues eternally and provide ample
                opportunities to cater and optimistic demeanor towards being an
                entrepreneur, surpassing the bars set by the previous
                endeavours. I heartily welcome everyone to be a part of 6.0
                E-summit Renaissance 2020 and make it a grand success with your
                support and enthusiasm.
              </p>
            </div>
            <div className="w-20 h-20 rounded-full mb-2">
              <img className="object-fit rounded-full" src={Rajeev} alt="" />
            </div>
            <div className="pb-1 mt-8">Rajeev Tripathi</div>
            <div>Director, MNNIT Allahabad</div>
          </div>

          <div className="bg-stone-300 px-4 py-12 flex flex-col items-center rounded-3xl mr-8 hover:cursor-pointer hover:scale-105 ease-in-out duration-300 w-1/3">
            <div className="mb-4 font-bold text-lg">Intuitive Design</div>
            <div>
              <p className="text-center">
                I would like to give my personal congrats to the entire team of
                NIT Allahabad for putting up a wonderful event. The attendees
                were more than ecstatic than what I have ever seen anywhere else
                and it is this spirit that puts up a favourable stage for people
                like us to speak/perform.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full mb-2">
                <img
                  className="object-fill rounded-full"
                  src={Chetanya}
                  alt=""
                />
              </div>
              <div className="pb-1 mt-5">Chetanya Golecha</div>
              <div>Co-Founder, Water Float</div>
            </div>
          </div>
          <div className="bg-stone-300 px-4 py-12 flex flex-col items-center rounded-3xl mr-8 hover:cursor-pointer hover:scale-105 ease-in-out duration-300 w-1/3">
            <div className="mb-4 font-bold text-lg">Mindblowing Service</div>
            <div>
              <p className="text-center">
                I would like to give my personal congrats to the entire team of
                NIT Allahabad for putting up a wonderful event. The attendees
                were more than ecstatic than what I have ever seen anywhere else
                and it is this spirit that puts up a favourable stage for people
                like us to speak/perform.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full mb-2">
                <img className="object-fill rounded-full" src={Gary} alt="" />
              </div>
              <div className="pb-1 mt-2">Gary Dalal</div>
              <div>Director, Apptology FZCO</div>
            </div>
          </div>
          <div className="bg-stone-300 px-4 py-12 flex flex-col items-center rounded-3xl mr-8 hover:cursor-pointer hover:scale-105 ease-in-out duration-300 w-1/3">
            <div className="mb-4 font-bold text-lg">Great Effort</div>
            <div>
              <p className="text-center">
                It was a great effort by Team Renaissance. Greatly appreciated
                coming back to college. Your hard work and efforts has lead to
                such successful event.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full mb-2">
                <img
                  className="object-fill rounded-full"
                  src={Abhilekh}
                  alt=""
                />
              </div>
              <div className="pb-1 mt-2">Abhilekh Agarwal</div>
              <div>CTO, Cube26</div>
            </div>
          </div>
          <div className="bg-stone-300 px-4 py-12 flex flex-col items-center rounded-3xl hover:cursor-pointer hover:scale-105 ease-in-out duration-300 w-1/3">
            <div className="mb-4 font-bold text-lg">Thrilling Experience</div>
            <div>
              <p className="text-center">
                I was thrilled to see such an amazing audience. The events were
                extraordinary and it surely made an impact to many aspiring
                entrepreneurs. A platform for the genesis of great ideas.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full mb-2">
                <img className="object-fill rounded-full" src={Mansi} alt="" />
              </div>
              <div className="pb-1 mt-2">Mansi Matela</div>
              <div>Head Strategy & New Initiatives, SilverPus</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center ml-4">
          <KeyboardArrowRightIcon
            className="opacity-100 hover:opacity-50 cursor-pointer"
            onClick={slideRight}
            sx={{ color: "white" }}
            fontSize="large"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Appreciation;
