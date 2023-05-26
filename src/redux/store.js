import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './tasks/taskSlice'
import listReducer from './lists/listsSlice'
import filteredTasksReducer from './tasks/fiteredTasksSlice'

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    lists: listReducer,
    filteredTasks: filteredTasksReducer
  }
})
