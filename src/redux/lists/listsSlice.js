import { createSelector, createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from 'uuid'

const initialState = [
  {
    id: 'inbox',
    title: 'Tasks',
    taskList: []
  },
  {
    id: '1',
    title: 'List 1',
    taskList: [
      {
        id: '1',
        title: 'task 1',
        description: 'Labore mollit nulla officia minim aute irure. Veniam anim sint culpa cupidatat velit. Id velit labore quis est. Id quis tempor non culpa amet elit id eiusmod aliqua enim.',
        completed: false,
        important: true
      },
      {
        id: '2',
        title: 'task 2',
        description: 'task 2 description',
        completed: false,
        important: false
      },
      {
        id: '3',
        title: 'task 3',
        description: 'task 3 description',
        completed: false,
        important: true
      },
      {
        id: '4',
        title: 'task 4',
        description: 'task 4 description',
        completed: false,
        important: false
      },
      {
        id: '5',
        title: 'task 5',
        description: 'task 5 description',
        completed: false,
        important: false
      }
    ]
  }
]

export const listsSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    addList: (state, action) => {
      const newList = {
        id: uuid(),
        taskList: [],
        ...action.payload
      }
      state.push(newList)
    },
    deleteList: (state, action) => {
      const id = action.payload
      const listFound = state.find(list => list.id === id)
      if (listFound) {
        const index = state.indexOf(listFound)
        state.splice(index, 1)
      }
    },
    updateList: (state, action) => {
      const { id, title, taskList } = action.payload
      const listFound = state.find(list => list.id === id)
      if (listFound) {
        listFound.title = title
        listFound.taskList = taskList
      }
    },
    addTask: (state, action) => {
      const { listId, task } = action.payload
      const listFound = state.find(list => list.id === listId)
      if (listFound) {
        const newTask = {
          id: uuid(),
          ...task
        }
        listFound.taskList.push(newTask)
      }
    },
    deleteTask: (state, action) => {
      const { listId, taskId } = action.payload
      const listFound = state.find(list => list.id === listId)
      if (listFound) {
        const taskFound = listFound.taskList.find(task => task.id === taskId)
        if (taskFound) {
          listFound.taskList.splice(listFound.taskList.indexOf(taskFound), 1)
        }
      }
    },
    updateTask: (state, action) => {
      const { listId, task } = action.payload
      const listFound = state.find(list => list.id === listId)
      if (listFound) {
        const taskFound = listFound.taskList.find(taskItem => taskItem.id === task.id)
        if (taskFound) {
          taskFound.title = task.title
          taskFound.description = task.description
          taskFound.completed = task.completed
        }
      }
    },
    toggleTask: (state, action) => {
      const { listId, taskId } = action.payload
      const listFound = state.find(list => list.id === listId)
      if (listFound) {
        const taskFound = listFound.taskList.find(task => task.id === taskId)
        if (taskFound) {
          taskFound.completed = !taskFound.completed
        }
      }
    },
    toggleTaskImportant: (state, action) => {
      const { listId, taskId } = action.payload
      const listFound = state.find(list => list.id === listId)
      if (listFound) {
        const taskFound = listFound.taskList.find(task => task.id === taskId)
        if (taskFound) {
          taskFound.important = !taskFound.important
        }
      }
    }
  }
})

const selectLists = state => state.lists

export const selectListById = (listId) => createSelector(
  selectLists,
  lists => lists.find(list => list.id === listId)
)

export const selectAllTasks = () => createSelector(
  selectLists,
  lists => {
    return lists.flatMap(list => list.taskList.map(task =>
      ({ ...task, listId: list.id })))
  }
)

export const selectImportantTasks = () => createSelector(
  selectLists,
  lists => {
    const allTasks = lists.flatMap(list => list.taskList.map(task =>
      ({ ...task, listId: list.id })))
    const importantTasks = allTasks.filter(task => task.important)
    return importantTasks
  }
)

export const {
  addList,
  deleteList,
  updateList,
  addTask,
  deleteTask,
  updateTask,
  toggleTask,
  toggleTaskImportant
} = listsSlice.actions

export default listsSlice.reducer
