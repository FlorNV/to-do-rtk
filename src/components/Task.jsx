import { useDispatch } from 'react-redux'
import { deleteTask, toggleState } from '../redux/tasks/taskSlice'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Button } from './styled/Button'

const TaskContainer = styled.div`
  display: flex;
  width: 400px;
  padding: 1rem;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.2);
`

const Div = styled.div`
  width: ${({ width }) => width || '25%'};
  ${({ width }) => width && css`
    display: flex;
    align-items: center;
  `}
`

const Content = styled.div`
  width: 100%;
  margin-left: 2rem;
`

export const Task = ({ task }) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  const handleToggle = (id) => {
    dispatch(toggleState(id))
  }

  return (
    <TaskContainer>
      <Div width='75%'>
        <Button onClick={() => handleToggle(task.id)}>
          {task.completed ? '✅' : '🔲'}
        </Button>
        <Content>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </Content>
      </Div>
      <Div>
        <Button onClick={() => handleDelete(task.id)}>🗑️</Button>
        <Button as={Link} to={`/edit/${task.id}`}>✏️</Button>
      </Div>
    </TaskContainer>
  )
}
