import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import appService from '../common/api/AppService'
import { AuthData } from '../common/interfaces/AuthData'
import pubSub from '../common/services/PubSub'
import tokenService from '../common/services/TokenService'

interface AuthContextValue {
    isLoggedIn: boolean;
    login: (authData: AuthData) => void;
    logout: () => void;
    checkAuth: () => Promise<void>;
    
}


const AuthContext = createContext<AuthContextValue>(null);

function AuthProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(tokenService.isTokenValid());
    const navigate = useNavigate();

    const login = async (authData: AuthData) => {
        try {
            const token = await appService.login(authData);
            tokenService.setToken(token.access_token);
            setIsLoggedIn(true);
        } catch (e) {
            console.error(e);
        }
        
    }

    const logout = () => {
        tokenService.removeToken()
        setIsLoggedIn(false);
    }

    const checkAuth = async () => {
        try {
            const token = await appService.refresh();
            tokenService.setToken(token.access_token);
            setIsLoggedIn(true);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    pubSub.on('logout', logout)

    const value: AuthContextValue = {
        isLoggedIn,
        login,
        logout,
        checkAuth
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthContext, AuthProvider, useAuth }

