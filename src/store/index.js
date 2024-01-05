import { configureStore } from '@reduxjs/toolkit';
import { tasksSlice } from './tasksSlice';
import { humanSlice } from './humanSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    humans: humanSlice.reducer
  }
});
