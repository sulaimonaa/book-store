import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { add } from '../redux/books/booksSlice';
import Button from './Button';
import styles from '../styles.module.css';

export default function Form() {
  const [state, setBook] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  function handleChange(event) {
    event.preventDefault();
    setBook({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  const handleAddBook = (event) => {
    event.preventDefault();
    if (state.author && state.title) {
      const newBook = {
        item_id: uuidv4(),
        title: state.title,
        author: state.author,
        category: 'not-provided',
      };
      setBook({
        title: '',
        author: '',
      });
      dispatch(add(newBook));
    }
  };

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
        <Button
          className={styles.subBtn}
          clickEvent={handleAddBook}
          InnerText="Add Book"
        />
      </form>
    </div>
  );
}
