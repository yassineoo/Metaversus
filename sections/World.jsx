'use client';

import {motion} from "framer-motion";
import { TypingText,TitleText } from "../components/CustomTexts.jsx";
import  NewFeatures from "../components/NewFeatures.jsx";

import styles from "../styles/index.js";
import {staggerContainer ,fadeIn} from "../utils/motion"
const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
      <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false , amount:0.25}}
      className={`flex flex-col mx-auto ${styles.innerWidth} `}>
        <TypingText  title = "People on the World" textStyles="text-center"/>
        <TitleText 
        title ={<>Track friends around you and invite them to play together in the same world</>}
        textStyles="text-center"
         />
        <motion.div
        variants={fadeIn("up","tween",0.3,1)}
        className="relative mt-16 flex w-full h-[550px]">
          <img src="map.png" slt="map"
          className="w-full w-full object-contain" />
          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] rounded-full p-[6px] bg-[#5d6680] ">
            <img
            src="people-01.png"
            alr ='people 01'
            className="w-full h-full object-contain"
            />

          </div>
          <div className="absolute top-20 left-20 w-[70px] h-[70px] rounded-full p-[6px] bg-[#5d6680] ">
            <img
            src="people-02.png"
            alr ='people 02'
            className="w-full h-full object-contain"
            />

          </div>
          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] rounded-full p-[6px] bg-[#5d6680] ">
            <img
            src="people-03.png"
            alr ='people 02'
            className="w-full h-full object-contain"
            />

          </div>
          <div className="absolute bottom-24 left-60 w-[196px] h-[150px]  p-[6px] bg-[#5d6680] ">
            <img
            src="card1.png"
            alr ='people 02'
            className="w-full h-full object-contain"
            />

          </div>

        </motion.div>
      </motion.div>
  </section>
);

export default World;
