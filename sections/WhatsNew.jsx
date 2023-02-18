'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components/CustomTexts.jsx';
import NewFeatures from '../components/NewFeatures.jsx';

import styles from '../styles/index.js';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { newFeatures } from '../constants/index.js';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`flex gap-8 mx-auto ${styles.innerWidth} lg:flex-row-reverse flex-col-reverse `}
    >
      <motion.div
        variants={planetVariants('right')}
        className={`${styles.flexCenter} flex-1`}
      >
        <img src="./whats-new.png"
          alt="getStarted"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex flex-col flex-[0.75] justify-cneter"
      >
        <TypingText title="| Whats New" />
        <TitleText title={<>What's new About Metaversus</>} />
        <div
          className="flex flex-wrap justify-between  mt-12 gap-6"
        >

          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
