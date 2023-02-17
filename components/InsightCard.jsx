'use client';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const InsightCard = ({imgUrl,title,subtitle,index}) => (
  <motion.div 
  variants={fadeIn("up","spring",index*0.5,1)}

  className='flex felx-col md:flex-row gap-3'>
      <img src={imgUrl} 
        alt='card'
        className="md:w-[230px] w-full h-[200px] rounded-[32px] object-cover"
      />
      <div className="flex justify-center items-center w-full">
          <div className="flex-1 md:ml-[63px] flex-col max-w-[650px]">
              <h4 className="text-white font-normal lg:text-8 text-6 ">{title}</h4>
              <p className="mt-4 font-normal text[14px] lg:text-[20px] text-secondary-white">{subtitle}</p>
          </div>
          <div className="lg:flex hidden justify-center items-center w-[100px] h-[100px] rounded-full border-white border-[1px] bg-transparent">
              <img src="arrow.svg"
              alt="arrow"
              className="h-[40%] w-[40%] object-contain" />

          </div>
      </div>
    
  </motion.div>
);

export default InsightCard;
