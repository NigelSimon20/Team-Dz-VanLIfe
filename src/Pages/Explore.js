import React from "react";
import Vans from "../Components/Vans";
import Picture1 from "../images/GoldVan.png";
import Picture2 from "../images/BlueVan.png";
import Picture3 from "../images/RedVan.png";
import Picture4 from "../images/CreamVan.png";
import Picture5 from "../images/Quantam.png";
import Picture6 from "../images/GreenVan.png";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Explore = () => {
  return (
    <div className=" flex flex-col font-variant pl-5 md:pl-10">
      {/* Explore Page H2 */}
      <h2 className="font-bold text-2xl mb-3 md:mb-6 md:text-4xl">
        Explore our van options
      </h2>
      {/* Explore Page Top Buttons */}
      <div className="flex space-x-2 mb-9 md:space-x-5 text-lightGray">
        <button className="text-sm py-1 px-3 md:text-2xl bg-lightPink rounded-md hover:bg-reddish hover:text-lightPink transition duration-300">
          Simple
        </button>
        <button className="text-sm py-1 px-3 md:text-2xl bg-lightPink rounded-md hover:bg-black hover:text-lightPink transition duration-300">
          Luxury
        </button>
        <button className="text-sm py-1 px-3 md:text-2xl bg-lightPink rounded-md hover:bg-green hover:text-lightPink transition duration-300">
          Rugged
        </button>
        {/* <Link to='/'>Clear filters</Link> */}
      </div>
      {/* Component Div */}
      <div className="flex flex-wrap">
        {/* Van Components */}
        <Vans
          Picture={Picture1}
          Heading="Modest Explorer"
          Price="$60"
          Day="/day"
          Button="Simple"
        />
        <Vans
          Picture={Picture2}
          Heading="Beach Bum"
          Price="$80"
          Day="/day"
          Button="Rugged"
          hover={{
            bgColor: "hover:bg-green",
            textColor: "hover:text-lightPink"
          }}
        />

        <Vans
          Picture={Picture3}
          Heading="Reliable Red"
          Price="$100"
          Day="/day"
          Button="Luxury"
          hover={{
            bgColor: "hover:bg-black",
            textColor: "hover:text-lightPink"
          }}
        />
        <Vans
          Picture={Picture4}
          Heading="Dreamfinder"
          Price="$65"
          Day="/day"
          Button="Simple"
          hover={{
            bgColor: "hover:bg-reddish",
            textColor: "hover:text-lightPink"
          }}
        />

        <Vans
          Picture={Picture5}
          Heading="The Cruiser"
          Price="$125"
          Day="/day"
          Button="Luxury"
          hover={{
            bgColor: "hover:bg-black",
            textColor: "hover:text-lightPink"
          }}
        />
        <Vans
          Picture={Picture6}
          Heading="Green Wonder"
          Price="$70"
          Day="/day"
          Button="Rugged"
          hover={{
            bgColor: "hover:bg-green",
            textColor: "hover:text-lightPink"
          }}
        />
      </div>
    </div>
  );
};

export default Explore;