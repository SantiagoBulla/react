import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/profilePage';
import TaskPage from './pages/tasks/TaskPage';
import TaskDetails from './pages/tasks/TaskDetailsPage';

function AppRoutingOne() {
  return (
    <Router>{/**se definen rutas para aplicacion */}
      <div>
        <aside>
          <Link to={'/'}>|HOME|</Link>
          <Link to={'/about'}>|FAQs|</Link>
          <Link to={'/any404'}>|Unfound route|</Link>
        </aside>
      </div>
      <main>
        <Routes>
          {/**El componente Route se utiliza para definir cómo se renderiza un componente cuando la ruta actual coincide con la ruta especificada.
          --> Indica a React Router qué componente debe mostrarse cuando la URL coincide con la ruta especificada. */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faqs" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />

          {/**Not found page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default AppRoutingOne;
