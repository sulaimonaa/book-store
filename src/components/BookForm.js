import { useState } from 'react';
import styles from '../styles.module.css';

export default function Form() {
  const [state, setBook] = useState({
    title: '',
    author: '',
  });

  function handleChange(event) {
    setBook({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className={styles.form_container}>
      <form>
        <h2 className={styles.add_new_book}>Add new Book</h2>
        <input
          type="text"
          value={state.title}
          name="title"
          onChange={handleChange}
          className={styles.add_new_book_input}
        />
        <input
          type="text"
          name="author"
          onChange={handleChange}
          className={styles.add_new_author}
        />
        <button type="submit" className={styles.subBtn}>
          Add Book
        </button>
      </form>
    </div>
  );
}
