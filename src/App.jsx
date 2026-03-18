import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

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

        <p>
          Sistema de gestión de libros
        </p>
      </div>
      <a 
  href="https://github.com/andreag18l/collector-library-frontend" 
  target="_blank"
>
  <button
    style={{
      backgroundColor:"blue",
      border: "none",
      padding: "8px 15px",
      borderRadius: "8px",
      color: "white",
      cursor: "pointer",
      marginTop:"10px",
      marginLeft:"18px",
      display:"flex",
      alignItems:"center",
      gap:"8pxs"
    }}
  >
    <img
     src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
     alt="github"
     style={{width:"18px"}}
    />
    Ver en GitHub
  </button>
</a>

      <p className="read-the-docs">
        Proyecto frontend en desarrollo
      </p>
    </>
  )
}

export default App