import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const Book = ({
  author, title, id, remove,
}) => (
  <div className={styles.bookList}>
    <h3>{title}</h3>
    <h5>{author}</h5>
    <button
      className={styles.btn}
      type="button"
      id={id}
      onClick={() => remove(id)}
    >
      Remove
    </button>
  </div>
);

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
};
export default Book;
