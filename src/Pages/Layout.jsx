import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Inicio</Link>
          </li>
          <li>
            <Link to="/Catalogo">Productos</Link>
          </li>
          <li>
            <Link to="/Nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/Contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <hr/>
      <Outlet />
    </div>
  )
}

export default Layout;