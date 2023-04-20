import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './tasks/taskSlice'
import listReducer from './lists/listsSlice'

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    lists: listReducer
  }
})
