import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// BrowserRouter es el que da acceso a las rutas, historial de url de mi pagina //
import Titulo from './components/Titulo';
import Subtitulo from './components/Subtitulo';
import BottonAgregar from './components/BottonAgregar';
import FormTareas from './components/FormTareas';

function App() {
  return (
    <Router>
      {/* switch es que no permite seleccionar entre rutas */}
      <Route exact path='/'>
        <Titulo></Titulo>
        <Subtitulo></Subtitulo>
        <BottonAgregar></BottonAgregar>
      </Route>
      <Route exact path='/tareas/nueva'>
        <FormTareas></FormTareas>
      </Route>
      
    </Router>
      
    
  )
}

export default App;
