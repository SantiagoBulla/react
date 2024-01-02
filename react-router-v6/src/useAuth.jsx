import { createContext, useContext, useState } from "react";

const AuthContext = createContext();


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setisAuthenticated] = useState(false);

    const login = () => {
        setisAuthenticated(true);
    }

    const logout = () => {
        setisAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}