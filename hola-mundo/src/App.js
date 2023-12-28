
import logo from './logo.svg';
import './App.css';
//import Greeting from './components/pure/greeting';
//import GreetingF from './components/pure/greetingF';
//import GreetingStyled from './components/pure/greetingStyled';
import TaskListComponent from './components/containers/task_list';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import { MiComponenteConContexto } from './hooks/Ejemplo3';
// import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/*Componente propio greeting.jsx* */}
        {/*<Greeting name="Santiago"></Greeting>{/**la propiedad name recibe la props para el nombre*/}
        {/* <GreetingF name={"Santiago"}></GreetingF> */}
        <TaskListComponent></TaskListComponent>
        {/**Ejemplo de uso de Hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre='Santiago'>
          /**todo el contenido pintado entre apartura/cierre del componente sera tratado como props.children 
          <h3>Contenido del props.children</h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name='Santiago'></GreetingStyled> */}
      {/* </header> */}
    </div>
  );
}

export default App;