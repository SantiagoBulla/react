import './App.css'
import { Link, Route, Routes, useParams, Outlet } from 'react-router-dom';
import {NavLink} from './components/NavLink'

const Home = () => <h1>Home</h1>

const SearchPage = () => {
  const tacos = [
    'cochinita',
    'chili',
    'carnita',
    'quesadilla'
  ]


  return (
    <div>
      <h1>Search Page</h1>
      <ul>
        {tacos.map(taco => (
          <li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>
        ))}
      </ul>
    </div>
  )
}

const Tacos = () => {
  const { tacoName } = useParams();
  return (
    <div>
      <h1>Tacos</h1>
      <h3>{tacoName}</h3>
      {/**ruta relativa puesto que details se va a pegar a la ruta: /tacos/:tacoName */}
      <button><Link to={'details'} >Go to Details</Link></button>
      <Outlet />{/**espacio reservado para la renderizacion de componentes en rutas anidadas */}
    </div>
  )
}

const TacoDetails = () => {
  const { tacoName } = useParams();
  return (
    <div>
      <h1>Taco Details: {tacoName}</h1>
    </div>
  )
}

function App() {

  return (
    <div className='App'>
      <header>
        <h1>santi router</h1>
        <nav>
          <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/search-page'}>Search Page</NavLink></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        {/**Rutas anidadas */}
        <Route path='/tacos/:tacoName' element={<Tacos />}>{/**ruta padre */}
          <Route path='details' element={<TacoDetails />} />{/**la ruta hija con ruta relativa */}
        </Route>
        <Route path='*' element={<h1>Not Found</h1>} />{/**Rutas 404 soft */}
      </Routes>

    </div >
  )
}

export default App
