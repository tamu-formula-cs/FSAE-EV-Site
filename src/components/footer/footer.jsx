import Logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

export default function Footer(){
    return <footer className="footer-container">
        
        <div className="footer-left-container">
            <img src={Logo} alt="Logo" className='footer-logo-image'/>
            <h1 className='copyright'>© 2024 TAMU FSAE EV</h1>
        </div>

        <div className="footer-right-container">
            <div className="socials-container">
                <a rel="noopener noreferrer" className="icon" href="https://www.instagram.com/tamuformulaelectric/">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a rel="noopener noreferrer" className='icon' href="https://www.youtube.com/@tamuformulaelectric">
                    <FontAwesomeIcon icon={faYoutube}/>
                </a>
                <a rel="noopener noreferrer" className="icon" href="https://github.com/TAMU-Formula-SAE-EV"> 
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                <a rel="noopener noreferrer" className="icon" href="https://www.linkedin.com/company/texas-a-m-fsae-electric-racing/"> 
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </div>
            <h1 className='contact'> <a href="mailto:tamuformulaelectric@gmail.com">Contact</a></h1>
        </div>
    </footer>
}