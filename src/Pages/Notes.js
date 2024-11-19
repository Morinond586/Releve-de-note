import React, { useState } from 'react';
import '../css/note.css';
import { FaBook, FaHome, FaItunesNote, FaSchool } from 'react-icons/fa';
import { FaClipboardList } from 'react-icons/fa'; 
import { MdSchool } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdEditSquare } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';
import { FcDiploma2 } from "react-icons/fc";
import { MdGppGood } from "react-icons/md";
import { RiStickyNoteAddFill } from "react-icons/ri";
import { Button, Modal, Form } from 'react-bootstrap';  // Import des composants de React Bootstrap

function Notes() {
  const [showModal, setShowModal] = useState(false); // Pour gérer l'affichage du modal
  const [studentName, setStudentName] = useState('');
  const [studentLastName, setStudentLastName] = useState('');
  const [studentNote, setStudentNote] = useState('');

  // Fonction pour fermer le modal
  const handleClose = () => setShowModal(false);
  
  // Fonction pour afficher le modal
  const handleShow = () => setShowModal(true);

  // Fonction pour ajouter une note d'étudiant
  const handleAddNote = () => {
  
    handleClose(); // Fermer le modal après ajout
  };

  return (
    <div className='body'>
      <div className="sidebar">
        <div className="logo"><FaSchool size={40} color="#2196F3" /></div>
        <ul className="menu">
          <li>
            <a href="#">
              <i className="fas fa-user"><FaHome size={30} color="#2196F3" /></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-list"><MdSchool size={30} color="#2196F3" /></i>
              <span>List Etudiant</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-chart-bar"><FaClipboardList size={30} color="#2196F3" /></i>
              <span>Notes</span>
            </a>
          </li>
          <li className="logout">
            <a href="">
              <i className="fas fa-sign-out-alt"><AiOutlineLogout size={30} color="#e61313" /></i>
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
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>

        <div class="card--container">
        <h3 class="main--title">Tableau de bord</h3>
        <div class="card--wrapper">
           
        <div class="payment--card light-dark">
                <div class="card--header">
                    <div class="amout">
                        <span class="title">Résultat prémière trimestres</span>
                        <span class="amout--value">25%</span>
                    </div>
                    <i class="fas fa-solid fa-check dark-darkblue icon"><MdGppGood /></i>
                </div>
                <span class="card-detail">
                        *** *** *** 3456
                    </span>
            </div>

            <div class="payment--card light-purple">
                <div class="card--header">
                    <div class="amout">
                        <span class="title">Résultat deuxième trimèstre</span>
                        <span class="amout--value">50%</span>
                    </div>
                    <i class="fas fa-list icon dark-purple"><MdGppGood /></i>
                </div>
                <span class="card-detail">
                        *** *** *** 39056
                    </span>
            </div>

            <div class="payment--card light-green">
                <div class="card--header">
                    <div class="amout">
                        <span class="title">Résultat troisièmes trimèstres</span>
                        <span class="amout--value">75%</span>
                    </div>
                    <i class="fas fa-users icon dark-green"><MdGppGood /></i>
                </div>
                <span class="card-detail">
                        *** *** *** 345666
                    </span>
            </div>

            <div class="payment--card light-blue">
                <div class="card--header">
                    <div class="amout">
                        <span class="title">Admis</span>
                        <span class="amout--value">70%</span>
                    </div>
                    <i class="fas fa-solid fa-check dark-blue  icon"><MdSchool /></i>
                </div>
                <span class="card-detail">
                        *** *** *** 3456
                    </span>
            </div>
          
            <div class="payment--card light-red">
                <div class="card--header">
                    <div class="amout">
                        <span class="title">Non Aquis</span>
                        <span class="amout--value">15%</span>
                    </div>
                    <i class="fas fa-dollar-sign icon"></i>
                </div>
                <span class="card-detail">
                        *** *** *** 3456
                    </span>
            </div>
        </div>
        </div>


        <div className="tabular--wrapper">
          <div className="header--wrapper">
            <div className="header--title">
              <h2>Liste des notes étudiants inscrits</h2>
            </div>
            <div className="user--info">
              {/* Bouton pour afficher le modal */}
              <button onClick={handleShow} className="btn btn" style={{background:"#2196F3"}}><RiStickyNoteAddFill /> Ajouter Note</button>
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
                  <Form.Label>Nom</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Nom de l'étudiant"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formStudentLastName">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Prénom de l'étudiant"
                    value={studentLastName}
                    onChange={(e) => setStudentLastName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formStudentNote">
                  <Form.Label>Note</Form.Label>
                  <Form.Control 
                    type="number" 
                    placeholder="Note de l'étudiant"
                    value={studentNote}
                    onChange={(e) => setStudentNote(e.target.value)}
                  />
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
                  <th>Classe</th>
                  <th>Mentions</th>
                  <th>Sessions</th>
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
                      <a href="#" className=""><MdEditSquare size={30} color="#2196F3"/></a>
                      <a href="#" className=""><MdDeleteForever size={30} color="#e61313"/></a>
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

export default Notes;
