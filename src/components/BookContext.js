import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import List from './List';

const BookContext = React.createContext();

export const useTheme = () => useContext(BookContext);

const BookProvider = ({ children }) => {
  const [bookCollection, setBookCollection] = useState(List);

  return (
    <BookContext.Provider value={{ bookCollection, setBookCollection }}>
      {children}
    </BookContext.Provider>
  );
};
BookProvider.propTypes = { children: PropTypes.node.isRequired };
export default BookProvider;
