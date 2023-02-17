'use client';
import {motion} from "framer-motion";
import { useState } from "react";
import { TypingText,TitleText } from "../components/CustomTexts.jsx";
import { ExploreCard } from "../components";
import styles from "../styles/index.js";
import {staggerContainer} from "../utils/motion"
import {exploreWorlds} from "../constants/index.js"
const Explore = () =>{
  const [active, setActive] = useState("world-2")
  return (
  <section className ={`${styles.paddings} `} id="explore">
     <motion.div
     variants={staggerContainer}
     initial="hidden"
    whileInView="show"
    viewport={{once:false ,amount:0.5}}
    className={`${styles.innerWidth}  flex-col flex mx-auto`}
     >
       <TypingText title="|the World" textStyles="text-center"/>
       <TitleText title = {<>choose the World you want
        <br className="md:block hidden"/> to explore</>} textStyles="text-center" />
       <div className="mt-[50px] flex flex-col lg:flex-row min-h-[70vh] gap-5 ">
          {exploreWorlds.map((world,index) => (
            <ExploreCard key={world.id}  {...world} index={index} active={active} handleClick={setActive} />
       
          ))}

       </div>
     </motion.div>
  </section>
);
          }

export default Explore;
