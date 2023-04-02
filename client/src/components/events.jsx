import React, { useState } from 'react';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import { motion } from 'framer-motion';
 import logo from "../../assets/.png"

const events = () => {
    const [toggle, setToggle] = useState(false);
    return(
        <div className='bg-002853'>
        <h1 className='font-bold font-tyle-manrope text-6xl text-white'>EVENTS AT E-CELL</h1>
        <div classname='' style={eventStyle}>
          <div><img className='w-40 h-40'src='' alt='Renaissance'   ></img> Renaissance  </div>
          <div><img className='w-90 h-50'src='' alt='Renaissance'   ></img> Renaissance  </div>
          <div><img className='w-40 h-40'src='' alt='Renaissance'   ></img> Renaissance  </div>
          <div><img className='w-40 h-40'src='' alt='Renaissance'   ></img> Renaissance  </div>
        </div>
         </div>
    )
    }
    export default events;