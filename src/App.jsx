import './App.css'
import Home from './Pages/Home'
import Contacto from './Pages/Contacto'
import Catalogo from './Pages/Catalogo'
import Compra from './Pages/Compra'
import Nosotros from "./Pages/Nosotros"
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

function App() {

  const inlineStyle = {
      padding: 5
      }

  return (
    <Router>
      <header>
        <Link to="/"  style={inlineStyle}>
          Home
        </Link>
        <Link to="/catalogo"  style={inlineStyle}>
          Catalogo
        </Link>
        <Link to="/contacto" style={inlineStyle}>
          Contacto
        </Link>
        <Link to="/compra" style={inlineStyle}>
          Compra
        </Link>
        <Link to="/nosotros"  style={inlineStyle}>
          Nosotros
        </Link>

      </header>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/catalogo'>
          <Catalogo/>
        </Route>
        <Route path='/nosotros'>
          <Nosotros/>
        </Route>
        <Route path='/contacto'>
          <Contacto/>
        </Route>
        <Route path='/compra'>
          <Compra/>
        </Route>
      </Switch>
          <h3>Pagina de prueba</h3>

    </Router>
  )
}

export default App
