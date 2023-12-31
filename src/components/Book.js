import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from '../styles.module.css';
import { filterByCategory, removeBook } from '../redux/books/booksSlice';
import Button from './Button';

function Book({ book }) {
  const circularProgressBarStyle = buildStyles({
    strokeLinecap: 'butt',
    pathTransitionDuration: '2',
    pathColor: '#0290ff',
  });

  const dispatch = useDispatch();

  const handleRemove = (event) => {
    event.preventDefault();
    dispatch(removeBook(book.item_id));
  };

  const handleCategory = (event) => {
    event.preventDefault();
    dispatch(filterByCategory(book.category));
  };

  return (
    <div
      className={`${styles.container_fluid} ${styles.flex_row} ${styles.book_list}`}
    >
      <div className={styles.book_info}>
        <Button
          className={styles.book_category}
          clickEvent={handleCategory}
          InnerText={book.category}
        />
        <h2 className={styles.book_title}>
          {' '}
          {book.title}
        </h2>
        <span>
          <Link className={styles.action_author} to="/">
            {book.author}
          </Link>
        </span>
        <div className={styles.action_links_btn}>
          <nav className={styles.link_flex}>
            <Link className={styles.action_links} to="/">
              Comments
            </Link>
            <span className={styles.divider} />
            <Button
              className={styles.action_links}
              clickEvent={handleRemove}
              InnerText="Remove"
            />
            <span className={styles.divider} />
            <Link className={styles.action_links} to="/">
              Edit
            </Link>
          </nav>
        </div>
      </div>
      <div className={styles.flex_row}>
        <div className={styles.progress_btn}>
          <CircularProgressbar
            value={book.completed ? book.completed : '25'}
            styles={circularProgressBarStyle}
          />
        </div>
        <div className={styles.flex_column}>
          <h4 className={styles.completed_stat}>
            {book.completed ? book.completed : '25'}
            {' '}
            %
          </h4>
          <p className={styles.completed_val}>completed</p>
        </div>
      </div>
      <span className={styles.divider} />
      <div className={styles.chapter_info}>
        <p className={styles.current_chapter_title}>current chapter</p>
        <p className={styles.current_chapter_val}>
          Chapter
          {' '}
          {book.currentChapter}
        </p>
        <button className={styles.progress_update} type="button">
          update progress
        </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    completed: PropTypes.string,
    currentChapter: PropTypes.string,
  }).isRequired,
};

export default Book;
