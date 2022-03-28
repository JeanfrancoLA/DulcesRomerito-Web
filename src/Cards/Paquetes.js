import "../Styles/Paquetes.css";
import { useState, useEffect } from "react";

const Paquetes = () => {
  const [producto, setProduct] = useState([]);
  // const recurso = `paquete`;

  useEffect(() => {
    const apiRomerito = async () => {
      try {
        const response = await fetch(
          "https://jeanfrancola.github.io/bd_Romerito/bdRomerito/"
        );
        const data = await response.json();
        setProduct(data.paquetes);
         //console.log(data.paquetes);
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
          <h2 className="galeria__title">NUESTROS PAQUETES ROMERTO</h2>
          {producto.length === 0 ? (
            <section className="spinner-container">
              <div className="lds-heart">
                <div></div>
              </div>
              <h3 className="spinner-load">L o a d i n g . . .</h3>
            </section>
          ) : (
            <div className="galeria-despliegue" >
              {producto.map(({ id, name, img, title }) => {
                return (
                  <article className="galeria-list-container" key={id}>
                    <figure className="galeria-image-container">
                      <img src={img} alt={name} className="galeria-image zoom" />
                    </figure>
                    <button class="buy_button">Comprar {id}</button>
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

export default Paquetes;