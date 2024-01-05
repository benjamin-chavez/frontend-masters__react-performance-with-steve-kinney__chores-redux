import { configureStore } from '@reduxjs/toolkit';
import { taskSlice } from './taskSlice';
import { humanSlice } from './humanSlice';

export const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    humans: humanSlice.reducer
  }
});
