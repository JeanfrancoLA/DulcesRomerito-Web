import { NavLink } from "react-router-dom";
import '../Styles/StarPage.css';

const StartPage = () => {
  return (
    <>
      <main className="main">
        <div className="info-entrada-container">
          <h2 className="info-entrada__subtitle">DULCES</h2>
          <h1 className="info-entrada__title">DETALLES ROMERITO</h1>
          <p className="info-entrada__paragraph">Pasteria Fina</p>
          <div className="button-container">
            <NavLink to="/inicio" className="button1">
              VISITANOS
            </NavLink>
          </div>
        </div>
      </main>
    </>
  );
};

export default StartPage;
