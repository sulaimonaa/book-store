import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

function Book({ book }) {
  const circularProgressBarStyle = buildStyles({
    strokeLinecap: 'butt',
    pathTransitionDuration: '2',
    pathColor: '#0290ff',
  });

  return (
    <div className={`${styles.container_fluid} ${styles.flex_row} ${styles.book_list}`}>
      <div className={styles.book_info}>
        <span className={styles.book_category}>{book.category}</span>
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
            <Link className={styles.action_links} to="/">
              Remove
            </Link>
            <Link className={styles.action_links} to="/">
              Edit
            </Link>
          </nav>
        </div>
      </div>
      <div className={styles.flex_row}>
        <div className={styles.progress_btn}>
          <CircularProgressbar
            value={book.completed}
            styles={circularProgressBarStyle}
          />
        </div>
        <div className={styles.flex_column}>
          <h4 className={styles.completed_stat}>
            {book.completed}
            {' '}
            %
          </h4>
          <p className={styles.completed_val}>completed</p>
        </div>
      </div>
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
  book: PropTypes.shape().isRequired,
};

export default Book;
