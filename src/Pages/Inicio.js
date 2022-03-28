import logo from "../assets/img/logo.png";
import Galeria from "../Cards/Galeria";
import Footer from "../Components/Footer";
import "../Styles/Inicio.css";

const Inicio = () => {
  const credits = {
    company: 'Dulces Detalles "ROMERITO"',
    currentYear: new Date().getFullYear()
  };
  return (
    <>
      <section className="banner-container section-page">
        <div className="banner-presentacion">
          <h1 className="banner-title">"DULCES DETALLES ROMERITO"</h1>
          <div className="banner__logo-container">
            <img src={logo} alt="logo" className="banner__logo-image" />
          </div>
        </div>
      </section>
      <section>
        <Galeria />
      </section>
      <Footer credits={credits} />
    </>
  );
};

export default Inicio;
