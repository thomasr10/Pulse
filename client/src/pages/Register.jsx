import { useState } from "react"

export default function Register () {

    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async (e) => {
        e.preventDefault();
        
        console.log(pseudo, email, password);
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