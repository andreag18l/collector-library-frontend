import { useState } from 'react'

const Form = ({ type }) => {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // VALIDACIÓN
    if (name.trim() === '') {
      setError('Este campo es obligatorio')
      return
    }

    // SI TODO BIEN
    setError('')

    if (type === 'book') {
      console.log('Creando libro:', name)
    } else {
      console.log('Creando autor:', name)
    }

    setName('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <h3>{type === 'book' ? 'Crear Libro' : 'Crear Autor'}</h3>

      <input
        type="text"
        placeholder={type === 'book' ? 'Nombre del libro' : 'Nombre del autor'}
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: '8px',
          marginRight: '18px',
          borderRadius: '6px',
          border: error ? '1px solid red' : '1px solid #ccc'
        }}
      />

      <button type="submit">
        {type === 'book' ? 'Guardar Libro' : 'Guardar Autor'}
      </button>

      {/* MENSAJE DE ERROR */}
      {error && (
        <p style={{ color: 'red', marginTop: '5px' }}>
          {error}
        </p>
      )}
    </form>
  )
}

export default Form