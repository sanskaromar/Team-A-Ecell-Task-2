const About = () => {
  return (
    <div className="w-screen xl:py-20 sm:py-10 py-5 bg-yellow-500" id="about">
      <div className="xl:flex xl:flex-row xl:mx-40 md:mx-20 mx-10 flex flex-col items-center">
        <div className="text-5xl sm:text-6xl font-bold xl:w-2/5 flex flex-col items-center xl:pb-20 pb-10">
          <div className="bg-gray-400 h-20 w-1 xl:mb-4 mb-8"></div>
          ABOUT US
        </div>
        <div className="bg-gray-300 xl:mx-10 xl:w-3/5 rounded-3xl">
          <p className="xl:m-20 mx-5 my-5 text-center text-lg xl:text-base">
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
        </div>
      </div>
    </div>
  );
};

export default About;
