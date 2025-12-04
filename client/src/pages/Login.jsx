import { useState } from "react"
import { useNavigate } from "react-router";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

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
            navigate('/');

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <main>
            <h1>Connexion</h1>
            <section className="form-container">
                <form onSubmit={login}>
                    <div className="form-input-container">
                        <label htmlFor="email">Adresse mail</label>
                        <input type="email" name="email" id="email" placeholder="Adresse mail" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" name="password" id="password" placeholder="Mot de passe" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="center-btn">
                        <input type="submit" value="S'inscrire" />
                    </div>
                </form>
            </section>
        </main>
    )
}