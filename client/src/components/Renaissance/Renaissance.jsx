import logo from './Renaissance.png';
const Renaissance = () => {
    return (
      <div className="xl:py-20 sm:py-10 " id="renaissance">

        <div className="bg-'#040C18' xl:flex xl:flex-row xl:mx-40 md:mx-20 sm:mx-10 sm:flex sm:flex-col sm:items-center">
       
          <div className="text-6xl font-bold xl:w-2/5 sm:flex sm:flex-row sm:items-center xl:pb-20 sm:pb-10">
          <div className="bg-gray-400 h-20 w-1 xl:mb-4 sm:mb-8"></div>
          RENAISSANCE
        </div>
        <div className='xl:flex xl:flex-col xl:mx-40 md:mx-20 sm:mx-10 sm:flex sm:flex-row sm:items-center'>
          <div>
            <img className="w-180 h-90  " src={logo} alt="Renaissance"/>
           
          </div>
          <div className="xl:bg-040C18 xl:mx-10 xl:w-3/5 rounded-3xl">
            <p className="xl:m-20 sm:mx-5 sm:my-5 text-right sm:text-lg xl:text-base text- black">
            A conference for investors, entrepreneurs, budding entrepreneurs, venture capitalists. Networking and pitching ideas lie at the core of renaissance, renaissance means new beginnings, which is what startups are mainly all about.
            </p>
          </div>
          </div>
        </div>
        </div>
        
      
    );
  };
  export default Renaissance;