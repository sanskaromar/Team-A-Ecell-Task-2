import React from 'react'
import { motion } from "framer-motion";
import { useSpring ,animated } from 'react-spring';

function Number({n}){
    const {number} = useSpring({
        from : {number : 0},
        number : n,
        dealy : 200,
        config : {mass : 1 , tension : 20 , friction : 10}
    });
    return <animated.div>{number.to((n)=>n.toFixed(0))}</animated.div>
}

function Box(props) {
    return (
        <motion.div className='flex flex-col justify-between items-center w-full my-6' whileInView={{ y: [50, 0], opacity: [0, 1] }}
        transition={{delay:1.3, duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}>
            <motion.img src={props.img } className="w-[30%] " whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} />
            <p className='flex font-bold xl:text-2xl sm:text-xl text-2xl'><Number n={props.num}/>+</p>
            <p className='xl:text-2xl sm:text-xl text-2xl'>{props.data}</p>
        </motion.div>
    )
}

export default Box;
