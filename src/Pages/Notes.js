import React from "react";
import "../css/note.css";
import {
  FaHome,
  FaSchool,
} from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import {
  MdHome,
  MdImportExport,
  MdPrint,
  MdSchool,
  MdSearch,
} from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import Img from "../img/male_user_30px.png";
import cloch from "../img/notification_32px.png";
function Notes() {
  return (
    <div className="body">
      <div className="sidebar">
        <div className="logo">
          <FaSchool size={40} color="#2196F3" />
          <br />
          <p style={{ fontSize: "14px" }}>
              <span style={{ color: "#2196F3" }}>U</span>nivairsité{" "}
              <span style={{ color: "#2196F3" }}>A</span>kamasoa
          </p>
        </div>
        <ul className="menu" style={{marginTop:'20px'}}>
          <li>
            <a href="/Releve-de-note">
              <i className="fas fa-user">
                <FaHome size={30} color="#2196F3" />
              </i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/listetud">
              <i className="fas fa-list">
                <MdSchool size={30} color="#2196F3" />
              </i>
              <span>List Etudiant</span>
            </a>
          </li>
          <li>
            <a href="/notes">
              <i className="fas fa-chart-bar">
                <FaClipboardList size={30} color="#2196F3" />
              </i>
              <span>Notes</span>
            </a>
          </li>
          <li className="logout">
            <a href="">
              <i className="fas fa-sign-out-alt">
                <AiOutlineLogout size={30} color="#e61313" />
              </i>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="main--content">
        <div className="header--wrapper">
          <div className="header--title">
            <h2>Géstion des rélevées des notes</h2>
          </div>
          <div className="user--info">
            <div className="search-box">
              <i className="fa solid fa-search"></i>
              <img src={cloch}></img>
              <img src={Img}></img>
            </div>
          </div>
        </div>

        <div className="tabular--wrapper">
          <div className="header--wrapper">
            <div className="header--title"></div>
            <Link
              to={"/listetud"}
              style={{ textDecoration: "none", size: "12px", color: "#26678e" }}
            >
              <MdSchool /> Etudiant
            </Link>
            <Link
              to={"/Releve-de-note"}
              style={{ textDecoration: "none", size: "12px", color: "#26678e" }}
            >
              <MdHome /> Home
            </Link>
            <Link
              to={"#"}
              style={{ textDecoration: "none", size: "12px", color: "#26678e" }}
            >
              <MdPrint /> Imprimer
            </Link>
            <Link
              to={"#"}
              style={{ textDecoration: "none", size: "12px", color: "#26678e" }}
            >
              <MdImportExport /> Exporter
            </Link>
              <select id="" >
                  <option>L1</option>
                  <option>L2</option>
                  <option>L3</option>
              </select>
            <div className="search-box">
              <i className="fa solid fa-search"></i>
              <input type="text" placeholder="Rechercher nom ou Matricule" />
              <MdSearch />
            </div>
          </div>
          <div className="relever">
            <div className="d-flex tete">
              <div className="logo" style={{ paddingLeft: "150px" }}>
                <FaSchool size={50} color="#2196F3" />
                <br />
                <p style={{ fontSize: "14px" }}>
                <span style={{ color: "#2196F3" }}>U</span>nivairsité{" "}
                <span style={{ color: "#2196F3" }}>A</span>kamasoa
                </p>
              </div>

              <h3 style={{ paddingLeft: "20%", textTransform: "uppercase" }}>
                Rélevée de notes et resultat
              </h3>
              <p style={{ paddingLeft: "20%", paddingRight: "150px", marginTop:"40px" }}>
                Année: 2024-2025
              </p>
            </div>
            <ul
              style={{
                textAlign: "left",
                marginTop: "30px",
                paddingLeft: "250px",
              }}
            >
              <p>
                Nom: <span>FITAHIANJANAHARY Andriantsiorimpitiavana</span>
              </p>
              <p>
                Prenom: <span>Morinond Vital</span>
              </p>
              <p>
                Matricule: <span>34M</span>
              </p>
            </ul>
            <p>Inscrit en classe de : Prémière Au lycée AKAMA</p>
            <p>à obtenu les notes suivants:</p>
            <div id="table_wrapper">
              <table id="client_table" className="display">
                <thead>
                  <tr>
                    <th>Matières</th>
                    <th>Notes</th>
                    <th>Coefficient</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MLG</td>
                    <td>12</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>FRS</td>
                    <td>12</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>PC</td>
                    <td>12</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>HG</td>
                    <td>12</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>PHIL</td>
                    <td>12</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>SVT</td>
                    <td>12</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>ANG</td>
                    <td>12</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>EPS</td>
                    <td>12</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>MATH</td>
                    <td>12</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "20px" }}>Total</td>
                    <td style={{ fontSize: "20px" }}>12</td>
                    <td style={{ fontSize: "20px" }}>21</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: "20px" }}>Moyenne</td>
                    <td style={{ fontSize: "20px" }}>12</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ marginTop: "20px" }}>
                Resultat d'admission de la prémiere trimèstre : 12{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
