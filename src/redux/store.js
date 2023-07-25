import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './tasks/taskSlice'
import listReducer from './lists/listsSlice'
import filteredTasksReducer from './tasks/fiteredTasksSlice'
import modalReducer from './modal/modalSlice'
import menuReducer from './modal/menuSlice'

const localStorageMiddleware = (store) => (next) => (action) => {
  next(action)
  window.localStorage.setItem('redux_state', JSON.stringify(store.getState().lists))
}

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    lists: listReducer,
    filteredTasks: filteredTasksReducer,
    modal: modalReducer,
    menu: menuReducer
  },
  middleware: [localStorageMiddleware]
})
