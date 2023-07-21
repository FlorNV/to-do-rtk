import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { addTask } from '../redux/lists/listsSlice'
import { removeSelectedTask } from '../redux/tasks/taskSlice'

const INITIAL_STATE_TASK = {
  title: '',
  description: '',
  completed: false,
  important: false
}

export const useTask = () => {
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

    const newTask = pathname.includes('important') ? { ...task, important: true } : task
    dispatch(addTask({ listId, task: newTask }))
    setTask(INITIAL_STATE_TASK)
  }

  useEffect(() => {
    setTask(INITIAL_STATE_TASK)
    dispatch(removeSelectedTask())
  }, [listId])

  return { task, handleChange, handleSubmit }
}
