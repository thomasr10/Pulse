import { useNavigate } from "react-router";

export default function LogoutButton () {

    const navigate = useNavigate();

    const logout = async () => {
        await fetch('http://localhost:3000/api/auth/logout', {
            method: 'POST',
            credentials: 'include'
        });

        navigate('/login');
    }
    
    return <button onClick={logout}>Déconnexion</button>
}