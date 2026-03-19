import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import DifferentButton from './components/button'
import BookForm from './components/BookForm'
import AuthorForm from './components/AuthorForm'

function App() {
  const [count, setCount] = useState(0)
  const [showBookForm, setShowBookForm] = useState(false)
  const [showAuthorForm, setShowAuthorForm] = useState(false)

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

      <div style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
        
        {/* B.LIBROS */}
        <div
          onClick={() => setShowBookForm(true)}
          style={{
            padding: '20px',
            backgroundColor: '#1e1e2f',
            borderRadius: '10px',
            cursor: 'pointer',
            width: '150px',
            textAlign: 'center'
          }}
        >
          <h3>Libros</h3>
          <p style={{ fontSize: '12px' }}>
            Agregar libros
          </p>
        </div>

        <div
          onClick={() => setShowAuthorForm(true)}
          style={{
            padding: '20px',
            backgroundColor: '#1e1e2f',
            borderRadius: '10px',
            width: '150px',
            textAlign: 'center'
          }}
        >
          <h3>Autores</h3>
          <p style={{ fontSize: '12px' }}> Agregar autores
          </p>
        </div>
      </div>

      {showBookForm && (
        <BookForm onClose={() => setShowBookForm(false)} />
      )}
      {showAuthorForm &&(
        <AuthorForm onClose={() => setShowAuthorForm(false)} />
      )}
    </>
  )
}

export default App