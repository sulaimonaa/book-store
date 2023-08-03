import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      id: 1,
      category: 'Classic',
      completed: 60,
      currentChapter: 8,
    },

    {
      title: 'Dune',
      author: 'Frank Herbert',
      id: 2,
      category: 'Fiction',
      completed: 80,
      currentChapter: 12,
    },

    {
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      id: 3,
      category: 'Romance',
      completed: 88,
      currentChapter: 14,
    },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      const newBook = action.payload;
      state.value.push(newBook);
    },
    remove: (state, action) => {
      const id = action.payload;
      state.value = state.value.filter((book) => book.id !== id);
    },
    filterByCategory: (state, action) => {
      const category = action.payload;
      state.value = state.value.filter((book) => book.category === category);
    },
  },
});

export const { add, remove, filterByCategory } = booksSlice.actions;

export default booksSlice.reducer;
