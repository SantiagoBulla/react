import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio greeting.jsx* */}
        {/*<Greeting name="Santiago"></Greeting>{/**la propiedad name recibe la props para el nombre*/}
        <GreetingF name={"Santiago"}></GreetingF>
      </header>
    </div>
  );
}

export default App;
