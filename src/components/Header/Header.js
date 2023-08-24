import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/About">A Propos</Link>
        </nav>
    )
}

export default Header