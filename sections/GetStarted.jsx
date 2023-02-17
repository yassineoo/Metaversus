'use client';

import {motion} from "framer-motion";
import { TypingText,TitleText } from "../components/CustomTexts.jsx";
import StartSteps  from "../components/StartSteps.jsx";

import styles from "../styles/index.js";
import {staggerContainer ,fadeIn,planetVariants} from "../utils/motion"
import {startingFeatures} from "../constants/index.js"

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false , amount:0.25}}
    className={`flex gap-8 mx-auto ${styles.innerWidth} lg:flex-row flex-col `}>
        <motion.div 
        variants={planetVariants('left')}
        className={`${styles.flexCenter} flex-1`}>
          <img src="./get-started.png"
          alt="getStarted" 
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
        variants={fadeIn('left','tween',0.2,1)}
        className='flex flex-col flex-[0.75] justify-cneter'
        >
          <TypingText title='| How metaversus Work' />
          <TitleText title ={<>Get Started  With just few Clicks</>} 
           />
           <div
           className  ="flex flex-col max-width-[370px] mt-8 gap-6">

              {startingFeatures.map((feature,index) => (
                <StartSteps key={feature.id} number={index+1} text={feature} />
              ))}
           </div>
          
        </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
