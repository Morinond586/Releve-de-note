import React, { useState } from "react";
import "../css/note.css";
import { FaHome, FaSchool } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import {
  MdHome,
  MdSchool,
  MdSearch,
  MdImportExport,
  MdPrint,
  MdError,
} from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { MdEditSquare } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { MdGppGood } from "react-icons/md";
import { RiStickyNoteAddFill } from "react-icons/ri";
import { Button, Modal, Form } from "react-bootstrap"; // Import des composants de React Bootstrap
import Img from "../img/male_user_30px.png";
import cloch from "../img/notification_32px.png";
import { Link } from "react-router-dom";

function ListEtudiant() {
  const [showModal, setShowModal] = useState(false); // Pour gérer l'affichage du modal
  const [studentName, setStudentName] = useState("");
  const [studentLastName, setStudentLastName] = useState("");
  const [studentNote, setStudentNote] = useState("");

  // Fonction pour fermer le modal
  const handleClose = () => setShowModal(false);

  // Fonction pour afficher le modal
  const handleShow = () => setShowModal(true);

  // Fonction pour ajouter une note d'étudiant
  const handleAddNote = () => {
    handleClose(); // Fermer le modal après ajout
  };

  return (
    <div className="body">
      <div className="sidebar">
        <div className="logo">
          <FaSchool size={40} color="#2196F3" />
          <br />
          <p style={{ fontSize: "14px" }}>
            <span style={{ color: "#2196F3" }}>L</span>ycée{" "}
            <span style={{ color: "#2196F3" }}>A</span>kama
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
              <span>Bulletin</span>
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

        <div class="card--container">
          <div className="d-flex">
          <h3 class="main--title">Tableau de bord : </h3>
          <select id="" style={{textAlign:'center', marginTop:'-14px'}}>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
              </select>
              </div>
          <div class="card--wrapper">
            <div class="payment--card light-dark">
              <div class="card--header">
                <div class="amout">
                  <span class="title">Résultat prémière trimestres</span>
                  <span class="amout--value">25%</span>
                </div>
                <i class="fas fa-solid fa-check dark-darkblue icon">
                  <MdGppGood />
                </i>
              </div>
              <span class="card-detail">*** *** *** 3456</span>
            </div>

            <div class="payment--card light-purple">
              <div class="card--header">
                <div class="amout">
                  <span class="title">Résultat deuxième trimèstre</span>
                  <span class="amout--value">50%</span>
                </div>
                <i class="fas fa-list icon dark-purple">
                  <MdGppGood />
                </i>
              </div>
              <span class="card-detail">*** *** *** 39056</span>
            </div>

            <div class="payment--card light-green">
              <div class="card--header">
                <div class="amout">
                  <span class="title">Résultat troisièmes trimèstres</span>
                  <span class="amout--value">75%</span>
                </div>
                <i class="fas fa-users icon dark-green">
                  <MdGppGood />
                </i>
              </div>
              <span class="card-detail">*** *** *** 345666</span>
            </div>

            <div class="payment--card light-blue">
              <div class="card--header">
                <div class="amout">
                  <span class="title">Admis</span>
                  <span class="amout--value">70%</span>
                </div>
                <i class="fas fa-solid fa-check dark-blue  icon">
                  <MdSchool />
                </i>
              </div>
              <span class="card-detail">*** *** *** 3456</span>
            </div>

            <div class="payment--card light-red">
              <div class="card--header">
                <div class="amout">
                  <span class="title">Non Aquis</span>
                  <span class="amout--value">15%</span>
                </div>
                <i class="fas fa-dollar-sign icon">
                  <MdError />
                </i>
              </div>
              <span class="card-detail">*** *** *** 3456</span>
            </div>
          </div>
        </div>

        <div className="tabular--wrapper">
          <div className="header--wrapper">
            <div className="header--title">
              <h2>Liste des notes des étudiants inscrits</h2>
            </div>
            <Link
              to={"/Releve-de-note"}
              style={{ textDecoration: "none", size: "10px", color: "#26678e" }}
            >
              <MdHome size={"19px"} />
              Home
            </Link>
            <Link
              to={"/notes"}
              style={{ textDecoration: "none", size: "12px", color: "#26678e" }}
            >
              <FaClipboardList />
              Rélévée des notes
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
            <div className="search-box">
              <input type="text" placeholder="Rechercher" />
              <MdSearch />
            </div>
            <div className="user--info">
              {/* Bouton pour afficher le modal */}
              <button
                onClick={handleShow}
                className="btn btn"
                style={{ background: "#2196F3" }}
              >
                <RiStickyNoteAddFill /> Ajouter Note
              </button>
            </div>
          </div>

          {/* Modal pour ajouter les notes */}
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Ajouter une note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
              <Form.Group controlId="formStudentName">
                  <Form.Label>Matricule</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Matricule"
                
                  />
                </Form.Group>
                <Form.Group controlId="formStudentName">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nom de l'étudiant"
                  />
                </Form.Group>
                <Form.Group controlId="formStudentLastName">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Prénom de l'étudiant"
                  />
                </Form.Group>
                <Form.Group controlId="formStudentName">
                  <Form.Label>Matières</Form.Label>
                  <Form.Select>
                    <option>MLG</option>
                    <option>FRS</option>
                    <option>HG</option>
                    <option>ANG</option>
                    <option>SVT</option>
                    <option>PHIL</option>
                    <option>PC</option>
                    <option>MTH</option>
                    <option>EPS</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="formStudentNote">
                  <Form.Label>Note</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Note de l'étudiant"
                  />
                </Form.Group>
                <Form.Group controlId="formStudentName">
                  <Form.Label>Téléphone</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Téléphone"
                  />
                </Form.Group>
                <Form.Group controlId="formStudentName">
                  <Form.Label>Classe</Form.Label>
                  <Form.Select>
                    <option>Seconde</option>
                    <option>Premiere</option>
                    <option>Terminal</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="formStudentName">
                  <Form.Label>Année</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Année scolaire"
                  />
                </Form.Group>
                <Form.Group controlId="formStudentName">
                  <Form.Label>Trimèstre</Form.Label>
                  <Form.Select>
                    <option>Premiere trimestre</option>
                    <option>Deuxieme trimestre</option>
                    <option>Troisieme trimestre</option>
                  </Form.Select>
                </Form.Group>
             
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fermer
              </Button>
              <Button variant="primary" onClick={handleAddNote}>
                Ajouter
              </Button>
            </Modal.Footer>
          </Modal>

          <div id="table_wrapper">
            <table id="client_table" className="display">
              <thead>
                <tr>
                  <th>Matricule</th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Téléphone</th>
                  <th>Notes</th>
                  <th>Année</th>
                  <th>Classe</th>
                  <th>Trimèstres</th>
                  <th>Matières</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>test</td>
                  <td>
                    <a href="#" className="">
                      <MdEditSquare size={30} color="#2196F3" />
                    </a>
                    <a href="#" className="">
                      <MdDeleteForever size={30} color="#e61313" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListEtudiant;
