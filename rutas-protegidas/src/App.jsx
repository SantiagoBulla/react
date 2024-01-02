import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Admin, Analytic, Dashboard, Home, LandingPage } from "./pages/indexPages";
import { useState } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";
const App = () => {

  const [user, setuser] = useState(null);

  const login = () => {
    setuser({
      id: 1,
      name: "Jhon",
      permissions: ['analize']
    })
  }

  const logout = () => setuser(null);

  return (
    <BrowserRouter>
      <Navigation />

      {
        user ?
          (<button onClick={logout}>Logout</button>)
          :
          (<button onClick={login}>login</button>)
      }
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/analytics" element={
          <ProtectedRoute
            isAllowed={!!user && user.permissions.includes('analize')}
            redirectTo="/home">
            <Analytic />
          </ProtectedRoute>
        } />
        <Route path="/admin" element={
          <ProtectedRoute
            isAllowed={!!user && user.permissions.includes('admin')}
            redirectTo="/home">
            <Admin />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to={'/landing'}>Landing</Link>
      </li>
      <li>
        <Link to={'/home'}>Home</Link>
      </li>
      <li>
        <Link to={'/dashboard'}>Dashboard</Link>
      </li>
      <li>
        <Link to={'/analytics'}>Analytic</Link>
      </li>
      <li>
        <Link to={'/admin'}>Admin</Link>
      </li>
    </ul>
  )
}

export default App;
