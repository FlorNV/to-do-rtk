import { useDispatch, useSelector } from 'react-redux'
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineCheckSquare,
  AiOutlineBorder,
  AiOutlineExclamationCircle
} from 'react-icons/ai'
import styled from 'styled-components'
import { Button } from './styled/Button'
import { IconStyled } from './styled/Icon'
import { selectedTask } from '../redux/tasks/taskSlice'
import {
  deleteTask,
  selectListById,
  toggleTask,
  toggleTaskImportant
} from '../redux/lists/listsSlice'

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.2);
  background-color: var(--light);
  color: var(--dark);
`

const Content = styled.div`
  flex: 1;
  padding: 0 2rem;
  overflow: hidden;
`

const Title = styled.h3`
  font-size: var(--text-lg);
  margin: 0.5rem 0;
`

const Description = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`

const Small = styled.small`
  font-size: var(--text-xs);
  color: rgba(var(--primary-rgb), 0.8);
`

const Div = styled.div`
  display: flex;
  gap: 10px;
`

export const Task = ({ task, listId, showList = false }) => {
  const dispatch = useDispatch()
  const list = useSelector(selectListById(listId))

  const handleDelete = () => {
    dispatch(deleteTask({ listId, taskId: task.id }))
  }

  const handleSelected = () => {
    dispatch(selectedTask(task))
  }

  const handleToggle = () => {
    dispatch(toggleTask({ listId, taskId: task.id }))
  }

  const handleToggleImportant = () => {
    dispatch(toggleTaskImportant({ listId, taskId: task.id }))
  }

  return (
    <TaskContainer>
      <Button icon='true' checked={task.completed} onClick={handleToggle}>
        {task.completed
          ? <IconStyled as={AiOutlineCheckSquare} />
          : <IconStyled as={AiOutlineBorder} />}
      </Button>
      <Content>
        <Title>{task.title}</Title>
        <Description>{task.description}</Description>
        {showList && <Small>{list.title}</Small>}
      </Content>
      <Div>
        <Button icon='true' onClick={handleDelete}>
          <IconStyled as={AiOutlineDelete} />
        </Button>
        <Button icon='true' onClick={handleSelected}>
          <IconStyled as={AiOutlineEdit} />
        </Button>
        <Button icon='true' checked={task.important} onClick={handleToggleImportant}>
          <IconStyled as={AiOutlineExclamationCircle} />
        </Button>
      </Div>
    </TaskContainer>
  )
}
