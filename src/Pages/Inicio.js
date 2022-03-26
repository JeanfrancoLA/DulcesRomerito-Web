import logo from "../assets/img/logo.png";
import ApiRest from "../Hooks/ApiRest";
import "../Styles/Inicio.css";

const Inicio = () => {
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
        <h2>title ver Api</h2>
          <h3>Aqui tiene que ir la Api</h3>
      </section>
      {/* <ApiRest/> */}
    </>
  );
};

export default Inicio;
