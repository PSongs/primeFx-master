import React from "react";
import About from "./About";
import Contscts from "./Contscts";
import HowItWorks from "./HowItWorks";
import Faqs from "./Faqs";
import "./home.css";
import Backgroundimage from "../assets/bangkok-city.jpg";

export const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div className="Hero">
        <img src={Backgroundimage}></img>
        <div className="Hero-Container">
          <div className="Hero-Content">
            <h1>
              Become part of the world's <br></br>
              foremost authority in financial <br></br>
              investments.
            </h1>

            <div className="Log-Sign-Con">
              <button className="Login">
                LOGIN ACCOUNT
              </button>

              <button className="Sign">
                REGISTER ACCOUNT
              </button>
            </div>
          </div>
        </div>
      </div>

      <section id="about">
        <About />
      </section>
      <section id="contacts">
        <Contscts />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="faqs">
        <Faqs />
      </section>
    </div>
  );
};
