import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addTask, updateTask } from '../redux/tasks/taskSlice'

export const useTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    completed: false
  })
  const tasks = useSelector(state => state.tasks.taskList)
  const dispatch = useDispatch()
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
      dispatch(addTask(task))
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
