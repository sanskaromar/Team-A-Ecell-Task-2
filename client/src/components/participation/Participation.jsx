import React from 'react'
import Box from './box';
import { motion } from "framer-motion";


const p1 = "https://img.icons8.com/external-flat-icons-pack-pongsakorn-tan/1000/000000/external-architecture-back-to-school-flat-icons-pack-pongsakorn-tan-2.png";
const p2 = "https://img.icons8.com/color/1000/000000/conference-call--v2.png";
const p3 = "https://img.icons8.com/color/1000/000000/project-management.png";
const p4 = "https://img.icons8.com/color/1000/000000/man-in-a-tuxedo-skin-type-2.png";

function Participation() {
    return (
        <div className="w-screen xl:py-20 sm:py-10 py-5">
            <motion.div 
                className="flex flex-col sm:flex-row xl:mx-[10%] mx-[5%] bg-pink-100 p-10 rounded-3xl" 
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ delay:1 ,duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Box img={p1} num={80} data="Colleges" />
                <Box img={p2} num={15000} data="Participants" />
                <Box img={p3} num={120} data="Startups" />
                <Box img={p4} num={40} data="Speakers" />
            </motion.div>
        </div>
    )
}

export default Participation;
