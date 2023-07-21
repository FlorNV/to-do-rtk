import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SpecialTaskList } from '../components/index'
import { Main } from '../components/styled/Containers'

const Div = styled.div`
  margin: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 10px;
`

const ListTitle = styled.h2`
  font-size: var(--text-xxl);
  font-weight: 600;
  margin: 0;
`

const Message = styled.h3`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xxxl);
  font-weight: 600;
  text-align: center;
`

export const TasksFoundList = () => {
  const { query } = useParams()
  const tasks = useSelector(state => state.filteredTasks)

  return (
    <Main column>
      <Div>
        <ListTitle>Searching "{query}"</ListTitle>
      </Div>
      {
        query && tasks.length > 0
          ? <SpecialTaskList taskList={tasks} />
          : <Message>No search results for "{query}"</Message>
      }
    </Main>
  )
}
