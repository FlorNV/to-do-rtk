import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Task } from './Task'
import { Title } from './styled/Title'

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks)

  return (
    <div>
      <Title>My tasks ({tasks.length})</Title>
      <TaskContainer>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </TaskContainer>
    </div>
  )
}
