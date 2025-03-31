import './Footer.css';
import logo from '../../assets/images/StemaBiertan_smaller60.png';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import phone from '../../assets/images/phone.png';
import email from '../../assets/images/email.png';
import location from '../../assets/images/location.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="logoFooter">
        <img src={logo} alt="Stema"></img>
        <div className="name">
          <p>Comuna</p>
          <p id="primaryName">Biertan</p>
          <p>Sibiu</p>
        </div>
      </div>

      <div className="info">
        <div className="contact">
          <img src={location} alt="location"></img>
          <p>Piața 1 Decembrie 1918 19, Biertan 557045</p>
        </div>
        <div className="contact">
          <img src={phone} alt="phone"></img>
          <p>0269 868 359</p>
        </div>
        <div className="contact">
          <img src={email} alt="email"></img>
          <p>primariabiertan@yahoo.com</p>
        </div>
        <div className="contact" id="mediaContact">
          <div className="mediaButton">
            <img src={facebook} alt="facebook"></img>
          </div>
          <div className="mediaButton">
            <img src={instagram} alt="instagram"></img>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
