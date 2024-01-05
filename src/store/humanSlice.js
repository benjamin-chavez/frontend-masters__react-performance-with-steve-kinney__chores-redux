// src/store/humanSlice.js
import { taskSlice } from './taskSlice';

const { createSlice, nanoid } = require('@reduxjs/toolkit');

const createHuman = (name) => ({
  id: nanoid(),
  name,
  taskIds: []
});

const initialState = [
  createHuman('Steve Kinney'),
  createHuman('Ben Chavez'),
  createHuman('Tony Jones')
];

export const humanSlice = createSlice({
  name: 'humans',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createHuman(action.payload));
    }
  },

  // extraReducers: {
  //   [someAction]: (state, action)=>
  // }

  extraReducers: (builder) => {
    builder.addCase(taskSlice.actions.assignToUser, (state, action) => {
      for (const human of state) {
        if (human.id === action.payload.humanId) {
          human.taskIds.push(action.payload.taskId);
        } else {
          human.taskIds = human.taskIds.filter(
            (id) => id !== action.payload.taskId
          );
        }
      }
    });
  }
});
