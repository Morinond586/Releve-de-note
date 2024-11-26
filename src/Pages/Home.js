import React from "react";
import "../css/home.css";
import Footer from "../Footer/Footer";
import { FaSchool } from "react-icons/fa";
import { MdPages } from "react-icons/md";

function Home() {
  return (
    <div>
      <header class="header">
        <div className="header__logo-box">
          <div className="logo">
            <FaSchool size={100} color="#2196F3" />
            <br />
            <p style={{ fontSize: "14px", color: '#fff' }}>
              <span style={{ color: "#2196F3" }}>U</span>nivairsité{" "}
              <span style={{ color: "#2196F3" }}>A</span>kamasoa
            </p>
          </div>
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Gestion</span>
            <span className="heading-primary--sub">de Relevée des notes</span>
          </h1>

          <a href="/listetud" className="btn btn--white btn--animated">
           <MdPages /> Pages
          </a>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default Home;
