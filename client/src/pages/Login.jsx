import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router";
import FormButton from "../components/FormButton";
import { useUser } from "../../context/UserContext";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { isAuth, isLogged } = useUser();

    const login = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            const message = data.message;

            if (!response.ok) {
                alert(message);
                throw new Error(`Erreur HTTP : ${response.status}`);
            }

            
            alert(message);
            await isLogged();
            navigate('/');

        } catch (e) {
            console.error(e);
        }
    }

    return isAuth ? <Navigate to='/' /> :

        (
            <main className="section-wrapper">
                <h1 className="mt-32">Bon retour parmi nous !</h1>
                <section className="form-container mt-48">
                    <form onSubmit={login} className="auth-form">
                        <div className="form-input-container">
                            <label htmlFor="email">Adresse mail</label>
                            <input type="email" name="email" id="email" placeholder="Adresse mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-input-container mt-16">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" name="password" id="password" placeholder="Mot de passe" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="center mt-32">
                            <FormButton>Se connecter</FormButton>
                        </div>
                        <div className="form-footer-link mt-48">
                            <span>Pas encore inscrit(e) ?</span><Link to={'/register'}>Crée ton compte</Link>
                        </div>
                    </form>
                </section>
            </main>
        )
}