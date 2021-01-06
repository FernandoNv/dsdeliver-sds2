import './Navbar.styles.css';
import { ReactComponent as Logo } from '../../images/logo.svg';
function Navbar(){
    return(
        <nav className="main-navbar">
            <Logo />
            <a className="logo-text" href="logo">DS Delivery</a>
        </nav>
    )
}

export default Navbar;