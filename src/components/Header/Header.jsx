// Tools
import './Header.scss';

// Assets
import logo from '/src/assets/GJLogoSansUndertaleGlow.png';



function Header () {
    return (
        <div className="container__header header">
            <h2 className='header__title'>GameJam</h2>
            <img src={logo} alt="logo" className='header__logo' />
        </div>
    )
}

export default Header;