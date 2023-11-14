import { Link, Navigate, Outlet } from 'react-router-dom'
import './App.css'
import { useAuth } from './contexts/AuthContext'

function App() {
    
    const { isLoggedIn, logout } = useAuth();

    

    if (!isLoggedIn) {
        return <Navigate to='/login' />;
    }
    

    return (
        <>
        
        <header>
            <nav>
            <ul>
                <li><Link to='/'>Заявки</Link></li>
                <li><Link to='/employees'>Сотрудники</Link></li>
            </ul>
            </nav>

            <button onClick={logout}>Logout</button>
        </header>

        <main>
            <Outlet />

            
        </main>      
        </>
    );
}

export default App;
