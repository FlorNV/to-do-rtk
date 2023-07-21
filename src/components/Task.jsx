import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  AiFillCheckCircle,
  AiOutlineExclamationCircle,
  AiFillExclamationCircle,
  RxCircle
} from '../utils/icons'
import { ButtonIcon } from './styled/Button'
import { IconStyled } from './styled/Icon'
import { selectTask } from '../redux/tasks/taskSlice'
import { selectListById, toggleTask, toggleTaskImportant } from '../redux/lists/listsSlice'

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.2);
  background-color: var(--light);
  color: var(--dark);
  cursor: pointer;
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

export const Task = ({ task, listId, showList = false }) => {
  const dispatch = useDispatch()
  const list = useSelector(selectListById(listId))

  const handleSelected = () => {
    dispatch(selectTask(task))
  }

  const handleToggle = (event) => {
    event.stopPropagation()
    dispatch(toggleTask({ listId, taskId: task.id }))
  }

  const handleToggleImportant = (event) => {
    event.stopPropagation()
    dispatch(toggleTaskImportant({ listId, taskId: task.id }))
  }

  return (
    <TaskContainer onClick={handleSelected}>
      <ButtonIcon onClick={handleToggle}>
        {task.completed
          ? <IconStyled as={AiFillCheckCircle} />
          : <IconStyled as={RxCircle} />}
      </ButtonIcon>
      <Content>
        <Title>{task.title}</Title>
        <Description>{task.description}</Description>
        {showList && <Small>{list.title}</Small>}
      </Content>
      <ButtonIcon onClick={handleToggleImportant}>
        {task.important
          ? <IconStyled as={AiFillExclamationCircle} />
          : <IconStyled as={AiOutlineExclamationCircle} />}
      </ButtonIcon>
    </TaskContainer>
  )
}
