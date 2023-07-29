import BookForm from './BookForm';
import BookList from './BookList';
import BookProvider from './BookContext';
import styles from '../styles.module.css';

const Books = () => (
  <>
    <div className={styles.container}>
      <BookProvider>
        <h1>Books To Read</h1>
        <BookList />
        <BookForm />
      </BookProvider>
    </div>
  </>
);
export default Books;
