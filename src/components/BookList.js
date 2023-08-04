import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';
// import books from './List';

const BookList = () => {
  const books = useSelector((state) => state.books.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      {books.map((item) => (
        <Book book={item} key={item.id} id={item.id} />
      ))}
    </div>
  );
};

export default BookList;
