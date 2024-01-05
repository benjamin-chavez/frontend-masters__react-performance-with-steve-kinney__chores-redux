// src/store/taskSlice.js

const { createSlice, nanoid } = require('@reduxjs/toolkit');

const createTask = (title) => ({
  id: nanoid(),
  title,
  completed: false,
  assignedTo: ''
});

const initialState = [
  createTask('Order more energy drinks'),
  createTask('Water the plans')
];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  add: (state, action) => {
    // const task = createTask(action.payload);
    // state.push(task);

    state.push(createTask(action.payload));
  }
});
