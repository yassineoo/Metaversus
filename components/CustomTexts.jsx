'use client';

import {motion} from "framer-motion";
import {textContainer, textVariant2} from "../utils/motion"



export const TypingText = ({title,textstyles}) => (
  <motion.p
  variants={textContainer}
  initial="hidden"
  whileInView="show"
  className={`font-normal text-[14px] text-secondary-white ${textstyles}` }
  >
 
  {Array.from(title).map((letter,index) => (
    <motion.span 
    variants={textVariant2} key={index}
    initial="hidden"
  whileInView="show"
    >
      {letter===' '? "\u00A0":letter }
     
    </motion.span>
  ) )
  }

  </motion.p>
);

export const TitleText = () => (
  <h2>Title Text</h2>
);
