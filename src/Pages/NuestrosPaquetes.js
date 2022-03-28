import Paquetes from "../Cards/Paquetes";
import Footer from "../Components/Footer";

const NuestrosPaquetes = () => {
    const credits = {
        company: 'Dulces Detalles "ROMERITO"',
        currentYear: new Date().getFullYear()
      };
    return (
        <>
            <section>
                <Paquetes /> 
                <Footer credits={credits} />
            </section>
        </>
    );
}

export default NuestrosPaquetes;