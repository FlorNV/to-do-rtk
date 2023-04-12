import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

const initialState = {
  filterStatus: 'all',
  taskList: [
    {
      id: '1',
      title: 'task 1',
      description: 'Labore mollit nulla officia minim aute irure. Veniam anim sint culpa cupidatat velit. Id velit labore quis est. Id quis tempor non culpa amet elit id eiusmod aliqua enim.',
      completed: false
      // important: false
    },
    {
      id: '2',
      title: 'task 2',
      description: 'task 2 description',
      completed: false
      // important: false
    },
    {
      id: '3',
      title: 'task 3',
      description: 'task 3 description',
      completed: false
      // important: false
    },
    {
      id: '4',
      title: 'task 4',
      description: 'task 4 description',
      completed: false
      // important: false
    },
    {
      id: '5',
      title: 'task 5',
      description: 'task 5 description',
      completed: false
      // important: false
    }
  ]
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuid(),
        ...action.payload
      }
      state.taskList.push(newTask)
    },
    deleteTask: (state, action) => {
      const taskFound = state.taskList.find(task => task.id === action.payload)
      if (taskFound) {
        state.taskList.splice(state.taskList.indexOf(taskFound), 1)
      }
    },
    updateTask: (state, action) => {
      const taskFound = state.taskList.find(task => task.id === action.payload.id)
      if (taskFound) {
        taskFound.title = action.payload.title
        taskFound.description = action.payload.description
        taskFound.completed = action.payload.completed
      }
    },
    toggleState: (state, action) => {
      const taskFound = state.taskList.find(task => task.id === action.payload)
      if (taskFound) {
        taskFound.completed = !taskFound.completed
      }
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload
    }
  }
})

export const { addTask, deleteTask, updateTask, toggleState, setFilterStatus } = taskSlice.actions
export default taskSlice.reducer
