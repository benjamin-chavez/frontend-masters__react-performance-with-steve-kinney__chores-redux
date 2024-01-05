// src/store/humanSlice.js

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
  }
});
