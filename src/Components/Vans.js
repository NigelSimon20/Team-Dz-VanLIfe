import React from "react";

const Vans = (props) => {
  return (
    <div className="font-variant w-1/2 lg:w-1/3 ">
      {/* Van Image */}
      <img
        className=" rounded-md h-[70%] w-[90%] md:w-[90%] lg:w-[90%] md:h-[70%]"
        src={props.Picture}
        alt=""
      />
      {/* Van Info Div */}
      <div className="flex justify-between pt-1 w-[90%] h-[14%] lg:w-[90%] md:h-[10%]">
        {/* Van Info */}
        <p className="font-bold text-md md:text-3xl ">{props.Heading}</p>
        {/* Div With price and day */}
        <div>
          <p className="font-bold text-xs pt-1 md:text-2xl">{props.Price}</p>
          <p className="text-[10px] flex justify-end hover:line-black md:text-lg">
            {props.Day}
          </p>
        </div>
      </div>
      {/* Button */}
      <button className="py-2 px-4 text-xs bg-lightPink rounded-md text-black font-bold md:text-2xl md:py-2 md:px-6">
        {props.Button}
      </button>
    </div>
  );
};

export default Vans;
