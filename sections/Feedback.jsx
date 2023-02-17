'use client';
import {motion} from "framer-motion";
import styles from "../styles/index.js";
import {staggerContainer ,zoomIn,fadeIn } from "../utils/motion"
const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:false , amount:0.25}}
    className={`flex flex-col mx-auto lg:flex-row gap-6 ${styles.innerWidth} `}>
        <motion.div
        varient={fadeIn('right','tween',0.2,1)}
        initial="hidden"
        whileInView="show"
        className ='flex-[0.5] lg:max-w-[370px]
        rounded-[32px] border-[1px] border-[#6a6a6a] relative
         flex justify-end flex-col gradient-05 sm:p-8 p-4'>
          <div  className="feedback-gradient"/>
          <div >
            <h4 className="font-bold sm:text-8 text-[28px] sm:leading-10
            leading-9 text-white">Samantha</h4>
            <p className="mt-2 font-normal sm:text-[18px] text-[12px] leading-4 sm:leading-5 text-white" >Founder of MetaVersus</p>
          </div>
          <p className="mt-6 font-normal sm:text-[24px] text-[18px] leading-4 sm:leading-5 text-white">

          “With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”
          </p>
        </motion.div>
        <motion.div
        varient={fadeIn('left','tween',0.2,1)}
        className ='relative flex-1 flex'>
          <img 
            src ='planet-09.png'
            alt='planet'
            className="w-full  lg:h-[400px] h-auto h-min-[210px] object-cover rounded-[40px]"
          />
          <motion.div
          variants={zoomIn(0.4,1)}
          className="hidden lg:block absolute -left-[10%] top[3%]">
          <img src="/stamp.png"
            alt="stamp"
            className="w-[120px] h-[120px] object-contain"
          />


          </motion.div>
        </motion.div>
      
    </motion.div>
   
  </section>
);

export default Feedback;
