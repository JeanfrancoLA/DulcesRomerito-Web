import "../Styles/Galeria.css";
import { useState, useEffect } from "react";

const Galeria = () => {
  const [gallery, setGallery] = useState([]);
  // const recurso = `galeria`;

  useEffect(() => {
    const apiRomerito = async () => {
      try {
        const response = await fetch(
          "https://jeanfrancola.github.io/bd_Romerito/bdRomerito/paquetes.json"
        );
        const data = await response.json();
        setGallery(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("se consultó la api");
      }
    };
    apiRomerito();
  }, []);

  return (
    <>
      <section className="galeria-page">
        <div className="galeria-container">
          <h2 className="galeria__title">Galeria</h2>
          {gallery.length === 0 ? (
            <section className="spinner-container">
              <div className="lds-heart">
                <div></div>
              </div>
              <h3 className="spinner-load">L o a d i n g . . .</h3>
            </section>
          ) : (
            <div className="galeria-despliegue" >
              {gallery.map(({ id, name, img }) => {
                return (
                  <article className="galeria-list-container" key={id}>
                    <figure className="galeria-image-container">
                      <img src={img} alt={name} className="galeria-image zoom" />
                    </figure>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Galeria;