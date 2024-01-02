import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';

function AppRoutingFinal() {

  //TODO change to value from session storage {or something dynamic}
  const loggedIn = true;

  return (
    <Router>
      <Routes>
        {/**Redirections to protect our routes */}
        <Route path='/' element={
          loggedIn ?
            <Navigate to={'dashboard'} />
            :
            <Navigate to={'/login'} />
        } />
        {/**Login route */}
        <Route path='/login' element={<LoginPage />} />
        {/**DashBoard route */}
        <Route path='/dashboard' element={
          loggedIn ?
            <DashBoard />
            :
            <Navigate to={'/login'} />
        } />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
