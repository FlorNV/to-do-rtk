import styled from 'styled-components'
import { Task } from './Task'

const Tasks = styled.div`
  overflow-y: auto;
`

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 1.5rem 2rem 2rem;
  z-index: 1;
`

export const SpecialTaskList = ({ taskList }) => {
  return (
    <Tasks>
      <TaskContainer>
        {taskList?.map((task) => (
          <Task key={task.id} task={task} listId={task.listId} showList />
        ))}
      </TaskContainer>
    </Tasks>
  )
}
