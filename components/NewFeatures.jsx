import styles from "../styles";
const NewFeatures = ({imgUrl,title,subtitle}) => (
  <div className =" flex-1 flex flex-col sm:max-[250px] min-w-[210px]">
    <div className={`${styles.flexCenter} w-[70px] h-[70px]  rounded-[24px] bg-[323f5d]`}>
        <img 
          src={imgUrl}
          alt="feature"
          className="object-contain w-1/2 h-1/2"
        />
         </div>
        <h1 className="mt-6 text-6 leading-7 text-white font-bold ">{title}</h1>
        <p className="flex-1 mt-4 font-normal text-[18px] text-[#b0b0b0] ">{subtitle}</p>
   
  </div>
);

export default NewFeatures;
