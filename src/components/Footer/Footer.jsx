// Tools
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

// Assets
import Author from '/src/assets/Author.png';


function Footer () {
    return(
        <footer className='container__footer navbar'>
            <img className='navbar__img' src={Author} alt="Photo of Justin Overton" />
            <p className='navbar__author'>Site made by Justin Overton</p>
            <div className="navbar__links">
                <NavLink to='https://github.com/overtonjust'><FontAwesomeIcon icon={faGithub} className='navbar__icon' /></NavLink>
                <NavLink to='https://www.linkedin.com/in/justin-overton/'><FontAwesomeIcon icon={faLinkedin} className='navbar__icon' /></NavLink>
            </div>
        </footer>
    )
}


export default Footer;