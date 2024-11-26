import React, { useState, useEffect } from "react";
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
import { MdEditSquare } from "react-icons/md";  // Icone pour le bouton de modification
import { MdDeleteForever } from "react-icons/md";
import { MdGppGood } from "react-icons/md";
import { RiStickyNoteAddFill } from "react-icons/ri";
import { Button, Modal, Form } from "react-bootstrap";
import Img from "../img/male_user_30px.png";
import cloch from "../img/notification_32px.png";
import { Link } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2'; // Assurez-vous d'importer Swal



function ListEtudiant() {
  const [showModal, setShowModal] = useState(false); // Pour gérer l'affichage du modal d'ajout
  const [searchQuery, setSearchQuery] = useState(''); // recherche
  const [showEditModal, setShowEditModal] = useState(false); // Pour gérer l'affichage du modal de modification
  const [students, setStudents] = useState([]); // Pour stocker la liste des étudiants
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage, setStudentsPerPage] = useState(5); // Nombre d'étudiants par page
  const [studentForm, setStudentForm] = useState({
    matricule: "",
    nom: "",
    prenom: "",
    telephone: "",
    note: "",
    annee: "",
    classe: "",
    trimestre: "",
    matiere: ""
  });

  const [editStudentForm, setEditStudentForm] = useState({
    matricule: "",
    nom: "",
    prenom: "",
    telephone: "",
    note: "",
    annee: "",
    classe: "",
    trimestre: "",
    matiere: ""
  });

  // Fonction pour fermer le modal
  const handleClose = () => setShowModal(false);

  // Fonction pour afficher le modal d'ajout
  const handleShow = () => setShowModal(true);

  // Fonction pour fermer le modal de modification
  const handleCloseEdit = () => setShowEditModal(false);

  // Fonction pour afficher le modal de modification
  const handleShowEdit = (student) => {
    setEditStudentForm(student);  // Remplir le formulaire de modification avec les données de l'étudiant
    setShowEditModal(true);
  };

  // Fonction pour gérer les changements dans le formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentForm({
      ...studentForm,
      [name]: value,
    });
  };

  // Fonction pour gérer les changements dans le formulaire de modification
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditStudentForm({
      ...editStudentForm,
      [name]: value,
    });
  };

 // Fonction pour ajouter une note d'étudiant
const handleAddNote = async () => {
  // Afficher la modale de confirmation avec Swal
  const result = await Swal.fire({
    title: 'Êtes-vous sûr?',
    text: "Vous allez ajouter cette note pour l'étudiant.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Oui, ajouter!',
    cancelButtonText: 'Annuler',
    reverseButtons: true, // Inverser les boutons pour une meilleure UX
  });

  // Si l'utilisateur clique sur "Oui, ajouter!"
  if (result.isConfirmed) {
    try {
      // Envoyer la requête POST pour ajouter l'étudiant
      await axios.post("http://localhost:8081/ajouter", studentForm);

      // Afficher une notification de succès
      Swal.fire({
        title: 'Succès!',
        text: 'L\'étudiant a été ajouté avec succès.',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      // Fermer la modale de l'étudiant
      setShowModal(false);

      // Recharger les étudiants après l'ajout
      loadStudents();
    } catch (error) {
      // En cas d'erreur, afficher un message d'erreur
      console.error("Erreur lors de l'ajout de l'étudiant", error);
      Swal.fire({
        title: 'Erreur!',
        text: 'Il y a eu une erreur lors de l\'ajout de l\'étudiant.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  }
};

 // Fonction pour modifier un étudiant
const handleEditNote = async () => {
  // Afficher une fenêtre de confirmation avec SweetAlert2
  const result = await Swal.fire({
    title: 'Êtes-vous sûr de vouloir modifier cet étudiant ?',
    text: "Vous ne pourrez pas revenir en arrière après la modification.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, modifier!',
    cancelButtonText: 'Annuler'
  });

  if (result.isConfirmed) {
    try {
      // Si l'utilisateur confirme, procéder à la mise à jour
      const response = await axios.put(`http://localhost:8081/update/${editStudentForm.Id}`, editStudentForm);
      if (response.data.updated) {
        setShowEditModal(false);
        loadStudents(); // Recharger les étudiants après modification
        Swal.fire(
          'Modifié!',
          'Les informations de l\'étudiant ont été mises à jour.',
          'success'
        );
      } else {
        console.log("Erreur de mise à jour");
        Swal.fire(
          'Erreur!',
          'Il y a eu une erreur lors de la modification.',
          'error'
        );
      }
    } catch (error) {
      console.error("Erreur lors de la modification de l'étudiant", error);
      Swal.fire(
        'Erreur!',
        'Une erreur s\'est produite lors de la mise à jour.',
        'error'
      );
    }
  }
};

  // Fonction pour charger la liste des étudiants
  const loadStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8081/etudiants");
      setStudents(response.data);
    } catch (error) {
      console.error("Erreur lors du chargement des étudiants", error);
    }
  };


// Fonction pour supprimer un étudiant
const handleDeleteStudent = async (id) => {
  try {
    if (!id) {
      console.error("ID manquant pour la suppression.");
      return; // Arrêtez l'exécution si l'ID est manquant
    }

    // Afficher une fenêtre de confirmation avec SweetAlert2
    const result = await Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer cet étudiant ?',
      text: "Cette action est irréversible.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler'
    });

    if (result.isConfirmed) {
      console.log(`Suppression de l'étudiant avec l'ID: ${id}`);
      
      // Si l'utilisateur confirme, procéder à la suppression
      await axios.delete(`http://localhost:8081/deleteetudiant/${id}`);
      loadStudents(); // Recharger la liste des étudiants après suppression

      // Afficher un message de succès après la suppression
      Swal.fire(
        'Supprimé!',
        'L\'étudiant a été supprimé.',
        'success'
      );
    } else {
      console.log("Suppression annulée");
    }
  } catch (error) {
    console.error("Erreur lors de la suppression de l'étudiant", error);
    Swal.fire(
      'Erreur!',
      'Une erreur est survenue lors de la suppression.',
      'error'
    );
  }
};

  // Fonction pour rechercher dans le tableau d'étudiants
  const filteredStudents = students.filter((student) =>
    Object.values(student).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Pagination - Trouver l'index de départ et de fin pour la page actuelle
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  // Changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  

  // Charger les étudiants au démarrage
  useEffect(() => {
    loadStudents();
  }, []);

  const handleMatriculeChange = (e) => {
    const { value } = e.target;
    setStudentForm((prevState) => ({
      ...prevState,
      matricule: value,
    }));

    // Recherche d'un étudiant par matricule
    const student = students.find((student) => student.matricule === value);
    if (student) {
      // Si l'étudiant existe, remplir les autres champs automatiquement
      setStudentForm((prevState) => ({
        ...prevState,
        nom: student.nom,
        prenom: student.prenom,
        telephone: student.telephone,
      }));
    } else {
      // Si l'étudiant n'existe pas, réinitialiser les autres champs
      setStudentForm((prevState) => ({
        ...prevState,
        nom: "",
        prenom: "",
        telephone: "",
      }));
    }
  };

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
        <ul className="menu" style={{ marginTop: '20px' }}>
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
            <h2>Gestion des rélevées des notes</h2>
          </div>
          <div className="user--info">
            <div className="search-box">
              <i className="fa solid fa-search"></i>
              <img src={cloch}></img>
              <img src={Img}></img>
            </div>
          </div>
        </div>
        <div className="card--container">
          <div className="d-flex">
            <h3 className="main--title">Tableau de bord : </h3>
            <select id="" style={{ textAlign: 'center', marginTop: '-14px' }}>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>
          {/* Tableau des cartes */}
          <div className="card--wrapper">
            <div className="payment--card light-dark">
              <div className="card--header">
                <div className="amout">
                  <span className="title">Résultat L1</span>
                  <span className="amout--value">25%</span>
                </div>
                <i className="fas fa-solid fa-check dark-darkblue icon">
                  <MdGppGood />
                </i>
              </div>
              <span className="card-detail">*** *** *** 3456</span>
            </div>

            <div className="payment--card light-purple">
              <div className="card--header">
                <div className="amout">
                  <span className="title">Résultat L2</span>
                  <span className="amout--value">50%</span>
                </div>
                <i className="fas fa-list icon dark-purple">
                  <MdGppGood />
                </i>
              </div>
              <span className="card-detail">*** *** *** 39056</span>
            </div>

            <div className="payment--card light-green">
              <div className="card--header">
                <div className="amout">
                  <span className="title">Résultat L3</span>
                  <span className="amout--value">75%</span>
                </div>
                <i className="fas fa-users icon dark-green">
                  <MdGppGood />
                </i>
              </div>
              <span className="card-detail">*** *** *** 345666</span>
            </div>

            <div className="payment--card light-blue">
              <div className="card--header">
                <div className="amout">
                  <span className="title">Meilleur note</span>
                  <span className="amout--value">70%</span>
                </div>
                <i className="fas fa-solid fa-check dark-blue  icon">
                  <MdSchool />
                </i>
              </div>
              <span className="card-detail">*** *** *** 3456</span>
            </div>

            <div className="payment--card light-red">
              <div className="card--header">
                <div className="amout">
                  <span className="title">Note minimale</span>
                  <span className="amout--value">15%</span>
                </div>
                <i className="fas fa-dollar-sign icon">
                  <MdError />
                </i>
              </div>
              <span className="card-detail">*** *** *** 3456</span>
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
             {/* Boîte de recherche */}
            <div className="search-box">
              <input
                type="text"
                placeholder="Rechercher"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <MdSearch />
            </div>
            <div className="user--info">
              <button
                onClick={handleShow}
                className="btn btn"
                style={{ background: "#2196F3" }}
              >
                <RiStickyNoteAddFill /> Ajouter Note
              </button>
            </div>
          </div>

           {/* Tableau des étudiants */}
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Matricule</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Téléphone</th>
              <th>Note</th>
              <th>Année</th>
              <th>Niveau</th>
              <th>Session</th>
              <th>Matière</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.matricule}</td>
                <td>{student.nom}</td>
                <td>{student.prenom}</td>
                <td>{student.telephone}</td>
                <td>{student.note}</td>
                <td>{student.annee}</td>
                <td>{student.classe}</td>
                <td>{student.trimestre}</td>
                <td>{student.matiere}</td>
                <td>
                  <Button
                    variant=""
                    onClick={() => handleShowEdit(student)}
                  >
                    <MdEditSquare color="#2196F3" size={20} /> Modifier
                  </Button>
                  <Button
                    variant=""
                    onClick={() => handleDeleteStudent(student.Id)}
                  >
                    <MdDeleteForever color="#e10d0d" size={20} /> Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
         {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Précédent
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Suivant
        </button>
      </div>
      </div>
    </div>
        {/* Modale d'ajouut */}
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
              name="matricule"
              value={studentForm.matricule}
              onChange={handleMatriculeChange}
              placeholder="Matricule"
            />
          </Form.Group>

          <Form.Group controlId="formStudentLastName">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              name="nom"
              value={studentForm.nom}
              onChange={handleInputChange}
              placeholder="Nom"
            />
          </Form.Group>

          <Form.Group controlId="formStudentFirstName">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              type="text"
              name="prenom"
              value={studentForm.prenom}
              onChange={handleInputChange}
              placeholder="Prénom"
            />
          </Form.Group>

          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control
              type="text"
              name="telephone"
              value={studentForm.telephone}
              onChange={handleInputChange}
              placeholder="Numéro de téléphone"
            />
          </Form.Group>
                <Form.Group controlId="formGrade">
                  <Form.Label>Note</Form.Label>
                  <Form.Control
                    type="text"
                    name="note"
                    value={studentForm.note}
                    onChange={handleInputChange}
                    placeholder="Note"
                  />
                </Form.Group>
                <Form.Group controlId="formYear">
                  <Form.Label>Année</Form.Label>
                  <Form.Control
                    type="text"
                    name="annee"
                    value={studentForm.annee}
                    onChange={handleInputChange}
                    placeholder="Année"
                  />
                </Form.Group>
                <Form.Group controlId="formClass">
                <Form.Label>Niveau</Form.Label>
                <Form.Select
                  name="classe"
                  value={studentForm.classe}
                  onChange={handleInputChange}
                >
                  <option value="">Choisir un niveau</option> {/* Option par défaut */}
                  <option value="L1">L1</option>
                  <option value="L2">L2</option>
                  <option value="L3">L3</option>
                </Form.Select>
              </Form.Group>

                <Form.Group controlId="formTerm">
                  <Form.Label>Session</Form.Label>
                  <Form.Select
                    name="trimestre"
                    value={studentForm.trimestre}
                    onChange={handleInputChange}
                  >
                    <option value="">Choisir un session</option> {/* Option par défaut */}
                    <option value="S1">S1</option>
                    <option value="S2">S2</option>
                    <option value="S3">S3</option>
                    <option value="S4">S4</option>
                    <option value="S5">S5</option>
                    <option value="S6">S6</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="formSubject">
                  <Form.Label>Matière</Form.Label>
                  <Form.Select
                    name="matiere"
                    value={studentForm.matiere}
                    onChange={handleInputChange}
                  >
                      <option value="">Choisir de matière</option> {/* Option par défaut */}
                      <option value="ANG">ANG</option>
                      <option value="FRS">FRS</option>
                      <option value="MATH">MATH</option>
                      <option value="MTU">MTU</option>
                      <option value="COMPTA.G">COMPTA.G</option>
                      <option value="JAVA">JAVA</option>
                      <option value="ABD">ABD</option>
                      <option value="ALGORITHME">ALGORITHME</option>
                      <option value="PYTHON">PYTHON</option>
                      <option value="PHP">PHP</option>
                      <option value="HTML/CSS">HTML/CSS</option>
                      <option value="C#">C#</option>
                      <option value="JS">JS</option>
                      <option value="Mobile">Mobile</option>
                      <option value="Systèem Reseau">Systèem Reseau</option>
                      <option value="Architecture Ordi">Architecture Ordi</option>
                      <option value="OIF">OIF</option>
                      <option value="RO">RO</option>
                      <option value="DS">DS</option>
                      <option value="GENIE Log">GENIE Log</option>
                      <option value="C++">C++</option>
                      <option value="S.E">S.E</option>
                      <option value="PROG.RESEAU">PROG.RESEAU</option>
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

          {/* Modal de modification */}
          <Modal show={showEditModal} onHide={handleCloseEdit}>
            <Modal.Header closeButton>
              <Modal.Title>Modifier une note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formStudentName">
                  <Form.Label>Matricule</Form.Label>
                  <Form.Control
                    type="text"
                    name="matricule"
                    value={editStudentForm.matricule}
                    onChange={handleEditInputChange}
                    placeholder="Matricule"
                  />
                </Form.Group>
                <Form.Group controlId="formStudentLastName">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    name="nom"
                    value={editStudentForm.nom}
                    onChange={handleEditInputChange}
                    placeholder="Nom"
                  />
                </Form.Group>
                <Form.Group controlId="formStudentFirstName">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control
                    type="text"
                    name="prenom"
                    value={editStudentForm.prenom}
                    onChange={handleEditInputChange}
                    placeholder="Prénom"
                  />
                </Form.Group>
                <Form.Group controlId="formPhoneNumber">
                  <Form.Label>Téléphone</Form.Label>
                  <Form.Control
                    type="text"
                    name="telephone"
                    value={editStudentForm.telephone}
                    onChange={handleEditInputChange}
                    placeholder="Numéro de téléphone"
                  />
                </Form.Group>
                <Form.Group controlId="formGrade">
                  <Form.Label>Note</Form.Label>
                  <Form.Control
                    type="text"
                    name="note"
                    value={editStudentForm.note}
                    onChange={handleEditInputChange}
                    placeholder="Note"
                  />
                </Form.Group>
                <Form.Group controlId="formYear">
                  <Form.Label>Année</Form.Label>
                  <Form.Control
                    type="text"
                    name="annee"
                    value={editStudentForm.annee}
                    onChange={handleEditInputChange}
                    placeholder="Année"
                  />
                </Form.Group>
                <Form.Group controlId="formClass">
                  <Form.Label>Niveau</Form.Label>
                  <Form.Select
                    name="classe"
                    value={editStudentForm.classe}
                    onChange={handleEditInputChange}
                  >
                  <option value="">Choisir un niveau</option> {/* Option par défaut */}
                  <option value="L1">L1</option>
                  <option value="L2">L2</option>
                  <option value="L3">L3</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group controlId="formTerm">
                  <Form.Label>Session</Form.Label>
                  <Form.Select
                    name="trimestre"
                    value={editStudentForm.trimestre}
                    onChange={handleEditInputChange}
                    >
                    <option value="">Choisir un session</option> {/* Option par défaut */}
                    <option value="S1">S1</option>
                    <option value="S2">S2</option>
                    <option value="S3">S3</option>
                    <option value="S4">S4</option>
                    <option value="S5">S5</option>
                    <option value="S6">S6</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formSubject">
                  <Form.Label>Matière</Form.Label>
                  <Form.Select
                    name="matiere"
                    value={editStudentForm.matiere}
                    onChange={handleEditInputChange}
                 >
                      <option value="">Choisir de matière</option> {/* Option par défaut */}
                      <option value="ANG">ANG</option>
                      <option value="FRS">FRS</option>
                      <option value="MATH">MATH</option>
                      <option value="MTU">MTU</option>
                      <option value="COMPTA.G">COMPTA.G</option>
                      <option value="JAVA">JAVA</option>
                      <option value="ABD">ABD</option>
                      <option value="ALGORITHME">ALGORITHME</option>
                      <option value="PYTHON">PYTHON</option>
                      <option value="PHP">PHP</option>
                      <option value="HTML/CSS">HTML/CSS</option>
                      <option value="C#">C#</option>
                      <option value="JS">JS</option>
                      <option value="Mobile">Mobile</option>
                      <option value="Systèem Reseau">Systèem Reseau</option>
                      <option value="Architecture Ordi">Architecture Ordi</option>
                      <option value="OIF">OIF</option>
                      <option value="RO">RO</option>
                      <option value="DS">DS</option>
                      <option value="GENIE Log">GENIE Log</option>
                      <option value="C++">C++</option>
                      <option value="S.E">S.E</option>
                      <option value="PROG.RESEAU">PROG.RESEAU</option>
                 </Form.Select>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEdit}>
                Fermer
              </Button>
              <Button variant="primary" onClick={handleEditNote}>
                Modifier
              </Button>
            </Modal.Footer>
          </Modal>
      </div>
    </div>
  );
}

export default ListEtudiant;
