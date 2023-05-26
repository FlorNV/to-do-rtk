import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const filteredTasksSlice = createSlice({
  name: 'filteredTasks',
  initialState,
  reducers: {
    setFilteredTasks: (state, action) => {
      return action.payload
    }
  }
})

export const { setFilteredTasks } = filteredTasksSlice.actions
export default filteredTasksSlice.reducer
