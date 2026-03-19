import { useState } from 'react'
import styles from './BookForm.module.css' 

const AuthorForm = ({ onClose }) => {
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      name.trim() === '' ||
      country.trim() === '' ||
      birthYear.trim() === ''
    ) {
      setError('Debes completar todos los campos')
      return
    }
    setError('')
    const newAuthor = {
      name,
      country,
      birth_year: birthYear
    }
    console.log('Autor guardado:', newAuthor)
    setName('')
    setCountry('')
    setBirthYear('')
    onClose()
  }
 return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h2 className={styles.title}>Agregar Autor</h2>

        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Nombre</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Ej: Gabriel García Márquez"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>País</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Ej: Colombia"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Año de nacimiento</label>
            <input
              className={styles.input}
              type="number"
              placeholder="Ej: 1927"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.buttons}>
            <button className={styles.saveButton} type="submit">
              Guardar
            </button>

            <button
              className={styles.cancelButton}
              type="button"
              onClick={onClose}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthorForm