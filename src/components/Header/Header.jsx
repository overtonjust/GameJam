import logo from '/Users/overtonjust/GameJam/GameJam/src/assets/GJLogoSansUndertaleGlow.png';
import './Header.scss';




function Header () {
    return (
        <>
            <div className="header">
                <h2 className='header__title'>GameJam</h2>
                <img src={logo} alt="logo" className='header__logo' />
            </div>
        </>
    )
}

export default Header;