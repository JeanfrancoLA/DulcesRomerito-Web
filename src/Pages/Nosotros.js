import nosotros from '../assets/img/foto1.jpg'
import '../Styles/Nosotros.css';
const Nosotros = () => {
  return (
    <>
      <article className="article-nosotros section-page">
        <div className="perfil__info-container">
          <div className="profile__info">
            <h2 className="profile__info-title">SOBRE NOSOTROS </h2>
            <p className="profile__info-description">
              Somos Dulces Detalles Romerito logrando siempre ser el proveedor
              preferido de nuestros clientes por la calidad, variedad de
              nuestros productos y sobretodo el buen servicio que les ofrecemos
            </p>
          </div>
          <div className="profile__iamgen">
            <figure className="profile__image-container">
              <img
                src={nosotros}
                alt="LisbethyKevin"
                className="profile__image"
              />
            </figure>
          </div>
        </div>
      </article>
    </>
  );
};

export default Nosotros;
