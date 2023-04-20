import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCheckSquare, AiOutlineBorder } from 'react-icons/ai'
import styled from 'styled-components'
// import { deleteTask, toggleState } from '../redux/tasks/taskSlice'
import { toggleTask } from '../redux/lists/listsSlice'

import { Button } from './styled/Button'
import { IconStyled } from './styled/Icon'

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

  & p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const Div = styled.div`
  display: flex;
  gap: 10px;
`

export const Task = ({ task, listId }) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    // dispatch(deleteTask(id))
  }

  const handleToggle = (taskId) => {
    console.log(listId)
    dispatch(toggleTask({ listId, taskId }))
  }

  return (
    <TaskContainer>
      <Button icon='true' checked={task.completed} onClick={() => handleToggle(task.id)}>
        {task.completed
          ? <IconStyled as={AiOutlineCheckSquare} />
          : <IconStyled as={AiOutlineBorder} />}
      </Button>
      <Content>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </Content>
      <Div>
        <Button icon='true' onClick={() => handleDelete(task.id)}>
          <IconStyled as={AiOutlineDelete} />
        </Button>
        <Button icon='true' as={Link} to={`task/${task.id}`}>
          <IconStyled as={AiOutlineEdit} />
        </Button>
      </Div>
    </TaskContainer>
  )
}
