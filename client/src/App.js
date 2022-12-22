import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
import FetchUser from './components/auth/FetchUser';
import Cats from './components/cats/Cats';
import ProtectedRoute from './components/auth/ProtectedRoute';
import CatForm from './components/cats/CatForm';
import Notes from './components/notes/Notes';
import RandomCat from './components/cats/RandomCat';

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<ProtectedRoute />}>
            {/* only routes or pages that can be access when login */}
            <Route path='/cats' element={<Cats />} />
            <Route path='/:id/updateCat' element={<CatForm />} />
            <Route path='/:catId/notes' element={<Notes />} />
            <Route path='/random' element={<RandomCat />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/*' element={<Nomatch />} />
        </Routes>
      </>
    </FetchUser>
  </>
)

export default App;
