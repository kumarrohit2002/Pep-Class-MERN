import {BrowserRouter,Routes,Route} from 'react-router'

import { useContext } from 'react';
import { MyContext } from './context/Mycontext';
import SignUp from './pages/SignUp'
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/Profile';
import ViewPage from './pages/ViewPage';
import CartPage from './pages/CartPage';

const App = () => {
   const { user, appLoading } = useContext(MyContext);

    if (appLoading) {
        return (
            <div className="min-h-[100vh] flex items-center content-center">
                <div className="text-purple-600 text-3xl">Loading...</div>
            </div>
        );
    }

    const { isAuthenticated } = user;

    if (!isAuthenticated) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        );
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/view" element={<ViewPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;