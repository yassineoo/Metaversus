'use client';
import {motion} from "framer-motion";
import styles from "../styles/index.js";
import {staggerContainer ,zoomIn,fadeIn } from "../utils/motion"
import { socials } from "../constants/index.js";
import { footerVariants } from "../utils/motion";
const Footer = () => (
  <motion.footer
  variants={footerVariants}
  initial="hidden"
    whileInView="show"
  className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient"/>
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between gap-5 flex-wrap">
          <h4 className="font-bold text-white text-[44px] md:text-[64px]">Enter the Metaverse</h4>
          <button type="button" className="flex items-center h-fir py-4 px-6
          rounded-[32px] gap-4 bg-[#25618b]">
            <img src='headset.svg'
              className="w-6 h-6 object-contain"
            />
            <span className="text-white  font-normal text-4">
              Enter The Metaverse
            </span>
          </button>
      </div>
      <div className="flex flex-col">
      <div className="mb-[50px] h-[2px] bg-white opacity-10"/>
      <div className="flex justify-between items-center flex-wrap gap-4">
            <h4 className="font-extrabold text-white text-6">Metaversus</h4>
            <p className="font-normal text-[14px] opacity-50 text-white">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
            <div className="flex gap-4">
              {socials.map(social =>(
                <img 
                  src={social.url}
                  alt={social.name}
                  key={social.name}
                  className='w-6 h-6 object-contain cursor-pointer'

                />
              ))}
            </div>
      </div>

      </div>
    </div>
  </motion.footer>
);

export default Footer;
