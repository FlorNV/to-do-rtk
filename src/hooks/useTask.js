import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addTask } from '../redux/lists/listsSlice'

export const useTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    completed: false
  })
  const dispatch = useDispatch()
  const { id } = useParams()

  const handleChange = (event) => {
    const { name, value } = event.target
    setTask({
      ...task,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addTask({ listId: id, task }))

    setTask({
      title: '',
      description: '',
      completed: false
    })
  }

  return { task, handleChange, handleSubmit }
}
