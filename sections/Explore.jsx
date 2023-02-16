'use client';
import {motion} from "framer-motion";
import { useState } from "react";
import { TypingText,TitleText } from "../components/CustomTexts.jsx";
import { ExploreCard } from "../components";
import styles from "../styles/index.js";
import {staggerContainer} from "../utils/motion"
import {exploreWorlds} from "../constants/index.js"
const Explore = () => (
  <section className ={`${styles.paddings} `} id="explore">
     <motion.div
     variants={staggerContainer}
     initial="hidden"
    whileInView="show"
    viewport={{once:false ,amount:0.5}}
    className={`${styles.innerWidth}  flex-col flex mx-auto`}
     >

     </motion.div>
  </section>
);

export default Explore;
