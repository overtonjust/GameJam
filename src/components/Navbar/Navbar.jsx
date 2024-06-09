// Tools
import './Navbar.scss'

// Assets
import logo from '/src/assets/GJLogoSansUndertaleGlow.png';



function Navbar () {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='navbar__logo' /> 
            <h4 className='navbar__title'>GameJam</h4>
        </nav>
    )
}

export default Navbar;