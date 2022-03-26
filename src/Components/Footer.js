import '../Styles/Footer.css';
const Footer = ({credits}) => {
    const { company, currentYear } = credits;

  return (
    <footer className="footer">
      <div className="footer-container">
        <h4 className="footer__credits">🧁Copyright &copy; {currentYear} {company}. Todos los derechos reservados.🧁</h4>
      </div>
    </footer>
  );
}
 
export default Footer;
