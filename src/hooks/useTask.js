import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { addTask, updateTask } from '../redux/lists/listsSlice'
import { removeSelectedTask } from '../redux/tasks/taskSlice'

const INITIAL_STATE_TASK = {
  title: '',
  description: '',
  completed: false,
  important: false
}

export const useTask = () => {
  const taskSelected = useSelector(state => state.tasks)
  const [isEditing, setIsEditing] = useState(false)
  const [task, setTask] = useState(INITIAL_STATE_TASK)
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const { id } = useParams()
  const listId = id || 'inbox'

  const handleChange = (event) => {
    const { name, value } = event.target
    setTask({
      ...task,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!taskSelected.id) {
      const newTask = pathname.includes('important') ? { ...task, important: true } : task
      dispatch(addTask({ listId, task: newTask }))
    } else {
      dispatch(updateTask({ listId, task: { id: taskSelected.id, ...task } }))
      dispatch(removeSelectedTask())
    }

    setIsEditing(false)
    setTask(INITIAL_STATE_TASK)
  }

  useEffect(() => {
    if (taskSelected.id) {
      setTask(taskSelected)
      setIsEditing(true)
    }
  }, [listId, taskSelected])

  useEffect(() => {
    setIsEditing(false)
    setTask(INITIAL_STATE_TASK)
    dispatch(removeSelectedTask())
  }, [listId])

  return { task, isEditing, handleChange, handleSubmit }
}
