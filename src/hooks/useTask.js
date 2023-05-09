import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addTask, updateTask } from '../redux/lists/listsSlice'
import { removeSelectedTask } from '../redux/tasks/taskSlice'

export const useTask = () => {
  const taskSelected = useSelector(state => state.tasks)
  const [isEditing, setIsEditing] = useState(false)
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

    if (!taskSelected.id) {
      dispatch(addTask({ listId: id, task }))
    } else {
      dispatch(updateTask({ listId: id, task: { id: taskSelected.id, ...task } }))
      dispatch(removeSelectedTask())
    }

    setIsEditing(false)
    setTask({
      title: '',
      description: '',
      completed: false
    })
  }

  useEffect(() => {
    if (taskSelected.id) {
      setTask(taskSelected)
      setIsEditing(true)
    }
  }, [id, taskSelected])

  useEffect(() => {
    setIsEditing(false)
    setTask({
      title: '',
      description: '',
      completed: false
    })
    dispatch(removeSelectedTask())
  }, [id])

  return { task, isEditing, handleChange, handleSubmit }
}
