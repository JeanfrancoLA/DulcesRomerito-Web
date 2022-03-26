import "./App.css";
import Header from "./Components/Header";
import Inicio from "./Pages/Inicio";
import Nosotros from "./Pages/Nosotros";
import StartPage from "./Pages/StartPage";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
      
    <Header/>
  <Routes>
    <Route path="/sobre-nosotros" element={<Nosotros/>} />
    <Route path="/inicio" element={<Inicio/>} />
    <Route path="/startpage" element={<StartPage/>} />
    <Route path="/" element={<div></div>} />
  </Routes>

</Router>
  );
}

export default App;
