

import styles from "../styles/index.js";

const StartSteps = ({number ,text}) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] mr-4 bg-[#323f5d]`}>
        <p className="font-bold text-[20px] text-white ">0{number}</p>
      
    </div>
    <p className="flex-1 mr-8 font-normal text-[18px] text-[#b0b0b0] leading-8">
      {text}
    </p>
  </div>
);

export default StartSteps;
