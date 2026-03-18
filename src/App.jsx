import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DifferentButton from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>

      <h1>Collector Library</h1>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Clicks: {count}
        </button>

        <p>Sistema de gestión de libros</p>

        <DifferentButton />
      </div>

      <p className="read-the-docs">
        Proyecto frontend en desarrollo
      </p>
    </>
  )
}

export default App