import React from 'react'
import e1 from "../../assets/e1.png"
import e2 from "../../assets/e2.png"
import e3 from "../../assets/e3.png"
import e4 from "../../assets/e4.png"
import e5 from "../../assets/e5.png"
import e6 from "../../assets/e6.png"
import e7 from "../../assets/e7.png"
import e8 from "../../assets/e8.png"

function Events() {
    return (
        <div className="w-screen xl:py-20 sm:py-10 py-5" id="events">
            <div className='flex flex-col xl:mx-[10%] mx-[5%] xl:flex-row'>
                <div className='flex flex-row justify-center font-bold xl:flex-col xl:justify-start'>
                    <h3 className='text-4xl sm:text-5xl xl:text-6xl text-right py-12 xl:px-12 xl:py-0'>EVENTS AT E-CELL</h3>
                </div>
                <div className="flex flex-wrap justify-center items-center flex-col ">
                    <div className="container-1 flex flex-col sm:flex-row w-full justify-between">
                        <img src={e1} alt='Renaissance' className="m-2 cursor-pointer sm:w-[50%] shadow-lg" />
                        <img src={e2} alt='B-Plan' className="m-2 cursor-pointer sm:w-[45%] shadow-lg" />
                    </div>

                    <div className="conatiner-2 flex flex-col sm:flex-row w-full justify-between">
                        <img src={e3} alt='B-Plan' className="m-2 cursor-pointer sm:w-[30%] shadow-lg" />
                        <img src={e4} alt='B-Plan' className="m-2 cursor-pointer sm:w-[30%] shadow-lg" />
                        <img src={e5} alt='B-Plan' className="m-2 cursor-pointer sm:w-[30%] shadow-lg" />
                    </div>

                    <div className="conatiner-3 flex flex-col sm:flex-row w-full justify-center">
                        <img src={e6} alt='B-Plan' className="m-2 cursor-pointer sm:w-[100%] shadow-lg" />
                    </div>

                    <div className="conataier-4 flex flex-col sm:flex-row w-full justify-between">
                        <img src={e7} alt='B-Plan' className="m-2 cursor-pointer sm:w-[45%] shadow-lg" />
                        <img src={e8} alt='B-Plan' className="m-2 cursor-pointer sm:w-[50%] shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events;
