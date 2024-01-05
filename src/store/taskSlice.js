// src/store/taskSlice.js

const { createSlice, nanoid, createAction } = require('@reduxjs/toolkit');

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

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action) => {
      // const task = createTask(action.payload);
      // state.push(task);

      state.push(createTask(action.payload));
    },
    toggle: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.completed = action.payload.completed;
    },
    assignToUser: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.assignedTo = action.payload.humanId;
    }
  }
});

export const toggleTask = createAction(
  // 'tasks/toggle',
  taskSlice.actions.toggle.toString(),
  (taskId, completed) => ({
    payload: { taskId, completed }
  })
);
