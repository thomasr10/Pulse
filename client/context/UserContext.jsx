import { createContext, useContext, useState, useEffect } from "react";
import { authFetch } from "../src/assets/js/authFetch";
const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(null);
    
    const isLogged = async () => {

        try {
            const response = await authFetch('http://localhost:3000/api/auth/me', {
                method: 'GET',
                credentials: 'include'
            });

            if (response.ok) { 
                const data = await response.json();
                setUser(data.user);
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

    return(
        <UserContext.Provider value={{ isAuth, user, isLogged }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext);
}