import React from "react";
import "../Styles/About.css";
import TitleCompo from "./TitleCompo";
import cake from '../Images/pancake.jpg'

const About = () => {
  return (
    <div className="aboutpage">
      <TitleCompo title="About Us" />
      <div className="about2div">
        <img
          src={cake}
          alt=""
          width={500}
          height={700}
        />

        <div className="about2divside">
          <div className="aboutdetails">
            <h1>About Stories</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>

          <div className="about1row">
            <div className="box">
              <h1>14</h1>
              <p>Years of Experienced</p>
            </div>

            <div className="box">
              <h1>230</h1>
              <p>Foods</p>
            </div>
          </div>

          <div className="about1row">
            <div className="box">
              <h1>280</h1>
              <p>LifeStyle</p>
            </div>

            <div className="box">
              <h1>400</h1>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
