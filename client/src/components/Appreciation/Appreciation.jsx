import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gary from "../../assets/Appreciation/Gary.png";
import Rajeev from "../../assets/Appreciation/Rajeev.jpg";
import Chetanya from "../../assets/Appreciation/chetanya.jpg";
import Abhilekh from "../../assets/Appreciation/Abhilekh.jpg";
import Mansi from "../../assets/Appreciation/Mansi.jpg";
import { motion } from "framer-motion";
import "./Appreciation.scss";

const Appreciation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 2, ease: "easeOut" }}
        whileTap={{ scale: 0.9 }}
        className="text-4xl text-stone-300 flex flex-col items-center"
      >
        <h3 className="text-stone-300 pt-5 text-4xl text-center">
          LINES OF APPRECIATION
        </h3>
      </motion.div>
      <motion.div
        whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Slider
          {...settings}
          className="xl:mx-60 lg:mx-40 md:mx-32 sm:mx-20 mb-10 py-6 px-4 my-2"
        >
          <div className="my-4">
            <div
              id="height"
              className="bg-stone-300 px-4 py-12 hover:cursor-pointer hover:scale-105 ease-in-out duration-300 h-full flex flex-col justify-between hover:shadow-2xl hover:shadow-black"
            >
              <div>
                <div className="mb-4 font-bold text-lg text-center">
                  Efficient Collaborating
                </div>
                <div>
                  <p className="text-center px-8">
                    I duly hope the legacy continues eternally and provide ample
                    opportunities to cater and optimistic demeanor towards being
                    an entrepreneur, surpassing the bars set by the previous
                    endeavours.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full mb-2">
                  <img
                    className="object-fit rounded-full"
                    src={Rajeev}
                    alt=""
                  />
                </div>
                <div className="pb-1 mt-8">Rajeev Tripathi</div>
                <div>Director, MNNIT Allahabad</div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <div
              id="height"
              className="bg-stone-300 px-4 py-12 hover:cursor-pointer hover:scale-105 ease-in-out duration-300 h-full flex flex-col justify-between hover:shadow-2xl hover:shadow-black"
            >
              <div>
                <div className="mb-4 font-bold text-lg text-center">
                  Intuitive Design
                </div>
                <div>
                  <p className="text-center px-8">
                    I would like to give my personal congrats to the entire team
                    of NIT Allahabad for putting up a wonderful event. The
                    attendees were more than ecstatic than what I have ever seen
                    anywhere else and it is this spirit that puts up a
                    favourable stage for people like us to speak/perform.
                  </p>
                </div>
              </div>
              <div>
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
            </div>
          </div>
          <div className="my-4">
            <div
              id="height"
              className="bg-stone-300 px-4 py-12 hover:cursor-pointer hover:scale-105 ease-in-out duration-300 h-full flex flex-col justify-between hover:shadow-2xl hover:shadow-black"
            >
              <div>
                <div className="mb-4 font-bold text-lg text-center">
                  Mindblowing Service
                </div>
                <div>
                  <p className="text-center px-8">
                    I would like to give my personal congrats to the entire team
                    of NIT Allahabad for putting up a wonderful event. The
                    attendees were more than ecstatic than what I have ever seen
                    anywhere else and it is this spirit that puts up a
                    favourable stage for people like us to speak/perform.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full mb-2">
                  <img className="object-fill rounded-full" src={Gary} alt="" />
                </div>
                <div className="pb-1 mt-2">Gary Dalal</div>
                <div>Director, Apptology FZCO</div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <div
              id="height"
              className="bg-stone-300 px-4 py-12 hover:cursor-pointer hover:scale-105 ease-in-out duration-300 h-full flex flex-col justify-between hover:shadow-2xl hover:shadow-black"
            >
              <div>
                <div className="mb-4 font-bold text-lg text-center">
                  Great Effort
                </div>
                <div>
                  <p className="text-center px-8">
                    It was a great effort by Team Renaissance. Greatly
                    appreciated coming back to college. Your hard work and
                    efforts has lead to such successful event.
                  </p>
                </div>
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
          </div>
          <div className="my-4">
            <div
              id="height"
              className="bg-stone-300 px-4 py-12 hover:cursor-pointer hover:scale-105 ease-in-out duration-300 h-full flex flex-col justify-between hover:shadow-2xl hover:shadow-black"
            >
              <div>
                <div className="mb-4 font-bold text-lg text-center">
                  Thrilling Experience
                </div>
                <div>
                  <p className="text-center px-8">
                    I was thrilled to see such an amazing audience. The events
                    were extraordinary and it surely made an impact to many
                    aspiring entrepreneurs. A platform for the genesis of great
                    ideas.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full mb-2">
                  <img
                    className="object-fill rounded-full"
                    src={Mansi}
                    alt=""
                  />
                </div>
                <div className="pb-1 mt-2">Mansi Matela</div>
                <div>Head Strategy & New Initiatives, SilverPus</div>
              </div>
            </div>
          </div>
        </Slider>
      </motion.div>
    </div>
  );
};

export default Appreciation;
