import React, { Fragment } from "react";
import foodbg from "../asset/food bg.jpg";
import ButtonHeader from "./ButtonHeader";

import './divider.css'

const Header = (props) => {
  
  return (
    <Fragment>
      <header className="flex z-10 justify-between w-screen h-20 items-center px-[5%] fixed bg-gradient-to-r from-yellow-100 to-orange-300 rounded-br-[3rem] rounded-bl-[3rem] shadow-xl shadow-slate-900 lg:rounded-br-full lg:rounded-bl-full">
        <h1 className="text-3xl md:text-5xl font-cinzel font-extrabold">Da Food</h1>
        <ButtonHeader onClick={props.onClick} />
      </header>
      <div className="w-screen h-screen brightness-50">
        <img src={foodbg} className="object-cover h-full w-full overflow-hidden" alt="foodbg"></img>
        
      </div>
      <div className="custom-shape-divider-bottom-1673008116 -mb-10">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
    </Fragment>
  );
};

export default Header;
