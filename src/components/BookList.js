import { useSelector } from 'react-redux';
import Book from './Book';
// import books from './List';

const BookList = () => {
  const books = useSelector((state) => state.books.value);
  return (
    <div>
      {books.map((item) => (
        <Book book={item} key={item.id} id={item.id} />
      ))}
    </div>
  );
};

export default BookList;
