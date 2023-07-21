import { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {
  AiFillCheckCircle,
  AiFillExclamationCircle,
  AiOutlineDelete,
  AiOutlineExclamationCircle,
  AiOutlineEyeInvisible,
  RxCircle
} from '../utils/icons'
import { removeSelectedTask } from '../redux/tasks/taskSlice'
import { deleteTask, toggleTask, toggleTaskImportant, updateTask } from '../redux/lists/listsSlice'
import { ButtonIcon, DarkButton, LightButtonIcon } from './styled/Button'
import { IconStyled } from './styled/Icon'

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 360px;
  padding: 2rem;
  background-color: var(--secondary);
  box-shadow: -4px 0 6px -2px rgba(0, 0, 0, 0.2);
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: var(--border-radius);
  background-color: var(--light);
  color: var(--dark);
`

const Input = styled.input`
  border: none;
  background-color: var(--light);
  font-size: var(--text-md);
  font-weight: 700;
  color: var(--dark);
`

const Textarea = styled.textarea`
  resize: none;
  height: 150px;
  border: none;
  padding: 1rem;
  border-radius: var(--border-radius);
  background-color: var(--light);
  font-family: inherit;
  color: var(--dark);
`

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid rgba(var(--dark-rgb), 0.2);
`

export const TaskDetails = ({ listId, selectedTask }) => {
  const dispatch = useDispatch()
  const { task } = selectedTask
  const [taskForm, setTaskForm] = useState(task)
  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (event) => {
    setIsEditing(true)
    const { name, value } = event.target
    setTaskForm({
      ...taskForm,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (isEditing) {
      dispatch(updateTask({
        listId,
        task: { id: task.id, ...taskForm }
      }))
      setIsEditing(false)
    }
  }

  const handleClick = () => {
    dispatch(removeSelectedTask())
  }

  const handleToggle = () => {
    setTaskForm({
      ...taskForm,
      completed: !taskForm.completed
    })
    dispatch(toggleTask({ listId, taskId: task.id }))
  }

  const handleToggleImportant = () => {
    setTaskForm({
      ...taskForm,
      important: !taskForm.important
    })
    dispatch(toggleTaskImportant({ listId, taskId: task.id }))
  }

  const handleDelete = () => {
    dispatch(deleteTask({ listId, taskId: task.id }))
    dispatch(removeSelectedTask())
  }

  useEffect(() => {
    setTaskForm(task)
    setIsEditing(false)
  }, [selectedTask])

  return (
    <RightColumn>
      <Form onSubmit={handleSubmit}>
        <TaskContainer>
          <ButtonIcon onClick={handleToggle}>
            {taskForm.completed
              ? <IconStyled as={AiFillCheckCircle} />
              : <IconStyled as={RxCircle} />}
          </ButtonIcon>
          <Input
            type='text'
            name='title'
            placeholder='Title'
            onChange={handleChange}
            value={taskForm.title}
            size={taskForm.title.length}
          />
          <ButtonIcon onClick={handleToggleImportant} left>
            {taskForm.important
              ? <IconStyled as={AiFillExclamationCircle} />
              : <IconStyled as={AiOutlineExclamationCircle} />}
          </ButtonIcon>
        </TaskContainer>
        <Textarea
          name='description'
          placeholder='Add a description'
          onChange={handleChange}
          value={taskForm.description}
        />
        {isEditing && <DarkButton type='submit'>Save</DarkButton>}
      </Form>
      <Actions>
        <LightButtonIcon onClick={handleClick}>
          <AiOutlineEyeInvisible />
        </LightButtonIcon>
        <LightButtonIcon onClick={handleDelete}>
          <AiOutlineDelete />
        </LightButtonIcon>
      </Actions>
    </RightColumn>
  )
}
