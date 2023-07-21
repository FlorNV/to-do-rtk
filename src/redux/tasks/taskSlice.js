import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  task: null,
  isVisible: false
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload
    },
    selectTask: (state, action) => {
      state.task = action.payload
      state.isVisible = true
    },
    removeSelectedTask: (state) => {
      state.task = null
      state.isVisible = false
    }
  }
})

export const { setFilterStatus, selectTask, removeSelectedTask } = taskSlice.actions
export default taskSlice.reducer
