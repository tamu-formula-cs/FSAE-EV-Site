import Logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

export default function Footer(){
    return <footer className="footer-container">
        
        <div className="footer-left-container">
            <img src={Logo} alt="Logo" className='footer-logo-image'/>
            <h1 className='copyright'>© 2024 TAMU FSAE EV</h1>
        </div>

        <div className="footer-right-container">
            <div className="socials-container">
                <a rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a rel="noopener noreferrer" className='youtube'>
                    <FontAwesomeIcon icon={faYoutube}/>
                </a>
                <a rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </div>
            <h1 className='contact'>Contact</h1>
        </div>
    </footer>
}