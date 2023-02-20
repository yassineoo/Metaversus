import React from 'react';

const WorldCard = ({ cardName, styleCard, num }) => (
  <div className={`absolute ${styleCard} w-[196px] rounded-lg h-[150px] shadow-lg shadow-fuchsia-700  p-[6px] bg-[#5d6680] `}>

    <img
      src={cardName}
      alt="people 02"
      className="w-full h-full object-contain"
    />
    <div className="absolute top-[50%] left-[10%] z-20 w-[30px] h-[30px] p-[2px] rounded-full bg-[#5d6680]">

      <img
        src="people-03.png"
        alt="people 02"
        className="w-full h-full object-contain"
      />

    </div>
    <div className="absolute top-[50%] left-[18%] z-20 w-[30px] h-[30px]  p-[2px] rounded-full bg-[#5d6680]">

      <img
        src="people-03.png"
        alt="people 02"
        className="w-full h-full object-contain"
      />

    </div>
    <div className="absolute top-[50%] left-[26%] z-20 w-[30px] h-[30px] p-[2px] rounded-full bg-[#5d6680]">

      <img
        src="people-03.png"
        alt="people 02"
        className="w-full h-full object-contain"
      />

    </div>
    <div className="text-white pt-2 py-auto font-normal text-[14px] w-[60%] absolute top-[50%] left-[40%]">
      <p> + {num}  has joined</p>
    </div>
    

  </div>
);

export default WorldCard;
