'use client';
import {motion} from "framer-motion";
import { TypingText,TitleText } from "../components/CustomTexts.jsx";

import styles from "../styles/index.js";
import {staggerContainer } from "../utils/motion"
import { insights } from "../constants/index.js";
import InsightCard from "../components/InsightCard.jsx";
const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div 
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{once:false , amount:0.25}}
  className={`flex flex-col mx-auto ${styles.innerWidth} `}>
    <TypingText title="| Insights" textStyles='text-center'  />
    <TitleText  title={<>Insight About Metaverse</>}  textStyles='text-center' />
    <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight,index)=> (
          <InsightCard key={index} {...insight}  index={index+1}/>
        ))}

    </div>
  </motion.div>
  </section>
);

export default Insights;
