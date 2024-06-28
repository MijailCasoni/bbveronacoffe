import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <h1>Esto es otra prueba</h1>
        </a>
        <a href="https://react.dev" target="_blank">
          <h1>Esto es una prueba</h1>
        </a>
      </div>
      <h3>Tienda de café</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Agregar producto
        </button>
        <p>
          {count}
        </p>
      </div>
      <p className="read-the-docs">
        
      </p>
    </>
  )
}

export default App
