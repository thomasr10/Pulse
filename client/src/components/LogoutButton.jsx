import { useNavigate } from "react-router";
import { useUser } from "../../context/UserContext";

export default function LogoutButton () {

    const navigate = useNavigate();
    const { isLogged } = useUser();

    const logout = async () => {
        await fetch('http://localhost:3000/api/auth/logout', {
            method: 'POST',
            credentials: 'include'
        });
        await isLogged();
        navigate('/login');
    }
    
    return <button onClick={logout}>Déconnexion</button>
}