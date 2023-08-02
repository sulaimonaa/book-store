import Book from './Book';
import books from './List';

const BookList = () => (
  <div>
    {books.map((item) => (
      <Book
        book={item}
        key={item.id}
        id={item.id}
      />
    ))}
  </div>
);

export default BookList;
