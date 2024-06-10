// Tools
import './Navbar.scss'

// Assets
import logo from '/src/assets/logoBlack.png';



function Navbar () {
    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <img src={logo} alt="logo" className='navbar__logo' /> 
                <h4 className='navbar__title'>GameJam</h4>
            </div>
        </nav>
    )
}

export default Navbar;