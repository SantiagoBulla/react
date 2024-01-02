import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/profilePage';
import TaskPage from './pages/tasks/TaskPage';
import TaskDetails from './pages/tasks/TaskDetailsPage';
import { useEffect, useRef } from 'react';
import LoginFormik from './components/pure/forms/loginFormik';
import LoginPage from './pages/auth/LoginPage';

function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first Task'
    },
    {
      id: 1,
      name: 'Task 2',
      description: 'My second Task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    
  }, []);

  return (
    <Router>{/**se definen rutas para aplicacion */}
      <div>
        <aside>
          <Link to={'/'}>|HOME|</Link>
          <Link to={'/about'}>|FAQs|</Link>
          <Link to={'/login'}>|Login|</Link>
          <Link to={'/any404'}>|Unfound route|</Link>
        </aside>
      </div>
      <main>
        <Routes>
          {/**El componente Route se utiliza para definir cómo se renderiza un componente cuando la ruta actual coincide con la ruta especificada.
          --> Indica a React Router qué componente debe mostrarse cuando la URL coincide con la ruta especificada. */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={
            logged ? (
              <HomePage />
            ) : (
              <LoginPage />
            )
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faqs" element={<AboutPage />} />
          <Route
            path="/profile"
            element={
              logged ? (
                <ProfilePage />
              ) : (
                <DelayedAlert />
              )
            }
          />
          <Route path="/tasks" element={<TaskPage />} />
          <Route exact path="/tasks/:id">

          </Route>

          {/**Not found page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Router>
  );
}

function DelayedAlert() {
  const showAlertRef = useRef(true);

  useEffect(() => {
    if (showAlertRef.current) {
      alert('You must be logged in. Redirecting to login');
      showAlertRef.current = false;
    }
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  return <Navigate to="/login" />;
}

export default AppRoutingOne;
