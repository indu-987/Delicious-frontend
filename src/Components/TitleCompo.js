import React from "react";
import "../Styles/TitleCompo.css"
import food from "../Images/homefood.avif"
const TitleCompo = ({title}) => {
  return (
    <div>
      <div className="imgdiv2">
        <img
          src={food}          alt=""
          width={1900}
          height={1200}
        />

        <h1 className="compHead">{title}</h1>
        <p className="compspan" ><span>Home</span> <span>{title}</span></p>
        <div className="overlay"></div>
        
      </div>
    </div>
  );
};

export default TitleCompo;
