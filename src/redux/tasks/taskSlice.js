import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // filterStatus: 'all',
  // taskList: [
  //   {
  //     id: '1',
  //     title: 'task 1',
  //     description: 'Labore mollit nulla officia minim aute irure. Veniam anim sint culpa cupidatat velit. Id velit labore quis est. Id quis tempor non culpa amet elit id eiusmod aliqua enim.',
  //     completed: false
  //   },
  //   {
  //     id: '2',
  //     title: 'task 2',
  //     description: 'task 2 description',
  //     completed: false
  //   },
  //   {
  //     id: '3',
  //     title: 'task 3',
  //     description: 'task 3 description',
  //     completed: false
  //   },
  //   {
  //     id: '4',
  //     title: 'task 4',
  //     description: 'task 4 description',
  //     completed: false
  //   },
  //   {
  //     id: '5',
  //     title: 'task 5',
  //     description: 'task 5 description',
  //     completed: false
  //   }
  // ]
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload
    },
    selectedTask: (state, action) => {
      Object.assign(state, action.payload)
    },
    removeSelectedTask: () => {
      return {}
    }
  }
})

export const { setFilterStatus, selectedTask, removeSelectedTask } = taskSlice.actions
export default taskSlice.reducer
