import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { addTask, updateTask } from '../redux/tasks/taskSlice'

export const useTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    completed: false
  })
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks)
  const navigate = useNavigate()
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

    if (id) {
      dispatch(updateTask({
        id,
        ...task
      }))
    } else {
      dispatch(addTask({
        id: uuid(),
        ...task
      }))
    }

    navigate('/')
  }

  useEffect(() => {
    if (id) {
      const taskFound = tasks.find(task => task.id === id)
      if (taskFound) {
        setTask(taskFound)
      }
    }
  }, [])

  return { task, handleChange, handleSubmit, id }
}
