'use client';

import {motion} from "framer-motion";
import styles from "../styles/index.js";
import {fadeIn} from "../utils/motion"

const ExploreCard = ({id,imgUrl,title,index,active,handleClick}) => (
  <motion.div
      variants={fadeIn("right","spring",index * 0.1,0.75)}
     initial="hidden"
    whileInView="show"
    viewport={{once:false ,amount:0.5}}
    className={`${active ===id ? "lg:flex-[3.5] flex-[10] ":"lg:[0.5] flex-[2]"} 
    flex items-center justify-center min-w-[170px] h-[350px] transition-[flex] duration-[0.75s]
    ease-out-flex cursor-pointer
     relative`}
     onClick={()=>handleClick(id)}
  >
  <img  
    src={imgUrl}
    alt="image-world"
    className="absolute w-full h-full object-cover rounded-[24px]"
  />
  {active !==id ? (
    <h2 className="text-white absolute z-0 text-[18px] font-semibold sm:text-[26px]
    lg:rotate-[-90deg] lg:origin-[0,0] ">
      {title}
    </h2>
  ):
  <div className="absolute bottom-0  p-8 justify-center items-center w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] ">
  <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-3xl glassmorphism mb-4 `}>
      <img  src="./headset.svg"
        alt="head set"
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
    <p className="font-normal leading-5 text-4 text-white uppercase ">
        Enter the MetaVerse
    </p>
    <h2 className="mt-6 font-semibold  sm:text-8 text-6 text-white">
 {title}
    </h2>
  </div>}

  </motion.div>
);

export default ExploreCard;
