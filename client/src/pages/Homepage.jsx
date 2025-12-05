import { useState, useEffect } from "react";
import HomeConnected from "./HomeConnected";
import LandingPage from "./LandingPage";

export default function Homepage() {

    const [isAuth, setIsAuth] = useState(null);

    const isLogged = async () => {

        try {
            const response = await fetch('http://localhost:3000/api/auth/me', {
                method: 'GET',
                credentials: 'include'
            });

            if (response.ok) {
                setIsAuth(true);
            } else {
                setIsAuth(false);
            }
        } catch (e) {
            setIsAuth(false);
            throw new Error(e);
        }

    }

    useEffect(() => {
        isLogged();
    }, []);

    if (isAuth === null) return (
        <p>Chargement...</p>
    )

    return isAuth ? <HomeConnected /> : <LandingPage />
}