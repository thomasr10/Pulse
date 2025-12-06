import { Link } from "react-router";

export default function Header () {
    
    return (
        <nav className="header">
            <Link to='/' className="home-link">Pulse</Link>
            <Link to='/login' className="header-login-btn">Se connecter</Link>
        </nav>
    )
}