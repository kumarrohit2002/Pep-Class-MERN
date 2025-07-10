import {BrowserRouter,Routes,Route} from 'react-router'
import HomePage from './pages/HomePage';
import ViewPage from './pages/ViewPage';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/view' element={<ViewPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;