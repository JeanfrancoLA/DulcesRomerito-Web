import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';


function App() {
  return (
    <Router>
        <NavLink to="/inicio">
          Inicio
        </NavLink>
        <br/>
        <NavLink to="/nosotros">
          Nosotros
        </NavLink>
        <br/>
        <NavLink to="/startpage">
          StartPage
        </NavLink>
        <Routes>
          <Route path="/sobre-nosotros" element={<div>Nosotros</div>} />
          <Route path="/inicio" element={<div>inicio</div>} />
          <Route path="/startpage" element={<div>startpage</div>} />
          <Route path="/" element={<div></div>} />
        </Routes>
      
    </Router>
  );
}

export default App;
