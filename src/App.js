//import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Notes from './Pages/Notes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListEtudiant from './Pages/ListEtudiant';
import Home from './Pages/Home';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
    <Routes>

      {/* Notes */}
      <Route path='/notes' element={<Notes />} />
      <Route path='/listEtud' element={<ListEtudiant />} />   {/* list etudiant */}
      <Route path='/Releve-de-note' element={<Home />} />    {/* Home */}
      <Route path='/footer' element={<Footer />} />    {/* footer */}
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
