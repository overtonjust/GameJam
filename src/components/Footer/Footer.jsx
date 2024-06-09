// Tools
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

// Assets
import Author from '/src/assets/Author.png';


function Footer () {
    return(
        <footer className='footer'>
            <img className='footer__img' src={Author} alt="Photo of Justin Overton" />
            <p className='footer__author'>Site made by Justin Overton</p>
            <div className="footer__links">
                <NavLink to='https://github.com/overtonjust'><FontAwesomeIcon icon={faGithub} className='footer__icon' /></NavLink>
                <NavLink to='https://www.linkedin.com/in/justin-overton/'><FontAwesomeIcon icon={faLinkedin} className='footer__icon' /></NavLink>
            </div>
        </footer>
    )
}


export default Footer;