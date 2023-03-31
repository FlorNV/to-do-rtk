import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    title: 'task 1',
    description: 'task 1 description',
    completed: false
  },
  {
    id: '2',
    title: 'task 2',
    description: 'task 2 description',
    completed: false
  }
]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    },
    deleteTask: (state, action) => {
      const taskFound = state.find(task => task.id === action.payload)
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1)
      }
    },
    updateTask: (state, action) => {
      const taskFound = state.find(task => task.id === action.payload.id)
      if (taskFound) {
        taskFound.title = action.payload.title
        taskFound.description = action.payload.description
        taskFound.completed = action.payload.completed
      }
    },
    toggleState: (state, action) => {
      const taskFound = state.find(task => task.id === action.payload)
      if (taskFound) {
        taskFound.completed = !taskFound.completed
      }
    }
  }
})

export const { addTask, deleteTask, updateTask, toggleState } = taskSlice.actions
export default taskSlice.reducer
