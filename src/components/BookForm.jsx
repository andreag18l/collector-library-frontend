import { useState } from 'react'
import styles from './BookForm.module.css'

const BookForm = ({ onClose }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [year, setYear] = useState('')
  const [isbn, setIsbn] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      title.trim() === '' ||
      author.trim() === '' ||
      genre.trim() === '' ||
      year.trim() === '' ||
      isbn.trim() === ''
    ) {
      setError('Debes completar todos los campos')
      return
    }

    setError('')

    const newBook = {
      title,
      author,
      genre,
      publication_year: year,
      isbn
    }

    console.log('Libro guardado:', newBook)

    setTitle('')
    setAuthor('')
    setGenre('')
    setYear('')
    setIsbn('')

    onClose()
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h2 className={styles.title}>Agregar Libro</h2>

        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Título</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Ej: Cien años de soledad"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Autor</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Ej: Gabriel García Márquez"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Categoría</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Ej: Ficción"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Año de publicación</label>
            <input
              className={styles.input}
              type="number"
              placeholder="Ej: 1967"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>ISBN</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Ej: 978-0-06-088328-7"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
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

export default BookForm