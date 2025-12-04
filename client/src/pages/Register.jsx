import { useState } from "react"

export default function Register () {

    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState(null);

    const registerUser = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ pseudo, email, password, birthDate })
            });

            const data = await response.json();
            const message = data.message;

            if (!response.ok) {
                alert(message);
                throw new Error(`Erreur HTTP : ${response.status}`);
            }

            alert(message);

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <main>
            <h1>Inscription</h1>
            <section className="form-container">
                <form onSubmit={registerUser}>
                    <div className="form-input-container">
                        <label htmlFor="name">Pseudo</label>
                        <input type="text" name="name" id="name" placeholder="Pseudo" required value={pseudo} onChange={(e) => setPseudo(e.target.value)}/>
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="email">Adresse mail</label>
                        <input type="email" name="email" id="email" placeholder="Adresse mail" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="birthDate">Date de naissance</label>
                        <input type="date" name="birthDate" id="birthDate" placeholder="Date de naissance" required value={birthDate} onChange={(e) => setBirthDate(e.target.value)}/>
                    </div>
                    <div className="form-input-container">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" name="password" id="password" placeholder="Mot de passe" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="center-btn">
                        <input type="submit" value="S'inscrire" />
                    </div>
                </form>
            </section>
        </main>
    )
}