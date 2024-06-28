import Home from '../../../Pages/Home.jsx'
import Contacto from '../../../Pages/Contacto'
import Catalogo from '../../../Pages/Catalogo'
import Compra from '../../../Pages/Compra'
import Nosotros from '../../../Pages/Nosotros'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import './NavBar.css'

function NavBar() {

    const inlineStyle = {
        padding: 5
        }
    
    const logoSrc = '/favicon.png'


  return (
    <Router>
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#04233f', width: '100%' }}>
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/" className="navbar-brand">Blink & Bean Verona Coffe</Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalogo">Catalogo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/compra">Compra</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">Nosotros</Link>
            </li>
          </ul>
          <div className="navbar-logo mx-auto">
            <img src={logoSrc} alt="Logo" className="d-block mx-auto small-logo" />
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                <FaSearch />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <FaUser />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/compra" element={<Compra />} />
    </Routes>
  </Router>
);
}

export default NavBar;