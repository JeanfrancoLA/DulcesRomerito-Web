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
      <section className="paquete-page">
        <div className="paquete-container">
          <h2 className="paquete__title">NUESTROS PAQUETES ROMERITO</h2>
          {producto.length === 0 ? (
            <section className="spinner-container">
              <div className="lds-heart">
                <div></div>
              </div>
              <h3 className="spinner-load">L o a d i n g . . .</h3>
            </section>
          ) : (
            <div className="paquete-despliegue" >
              {producto.map(({ id, name, img, products,price }) => { 
                return (
                  <article className="paquete-list-container" key={id}>
                    <figure className="paquete-image-container">
                      <img src={img} alt={name} className="paquete-image zoom" />
                    </figure>
                    <div className="product-list">
                      <ul>
                        <li>{products.it1}</li>
                        <li>{products.it2}</li>
                        <li>{products.it3}</li>
                        <li>{products.it4}</li>
                        <li>{products.it5}</li>
                        <li>{products.it6}</li>
                      </ul>
                    </div>
                    <p className="products-container">{price}</p>
                    <div className="button__buy-container">
                    < a href="https://api.whatsapp.com/send?phone=51970486444"><button className="buy_button">Comprar</button></a>
                    </div>
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