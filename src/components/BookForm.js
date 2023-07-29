import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTheme } from './BookContext';
import styles from '../styles.module.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { bookCollection, setBookCollection } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      id: uuidv4(),
    };

    setBookCollection([...bookCollection, newBook]);
  };

  return (
    <div className={styles.form_container}>
      <h2>Add new book</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="title"
          id=""
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="author"
          id=""
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className={styles.subBtn} type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};
export default BookForm;
