import { Link } from 'react-router-dom'
import './Header.scss';

function Header() {
    return (
        
        <nav className="header-nav">
        <div className="logo-container">
            <img src="/logo-kasa.png" alt="Logo Kasa" />
        </div>
        <div className="links-container">
            <Link to="/">Accueil</Link>
            <Link to="/About">A Propos</Link>
        </div>
    </nav>
    )
}

export default Header