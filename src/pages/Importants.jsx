import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectImportantTasks } from '../redux/lists/listsSlice'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { TaskList } from '../components'

const Flex = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const Div = styled.div`
  font-size: var(--text-xxl);
  margin: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 10px;
`

const ListTitle = styled.span`
  font-weight: 600;
  margin: 0;
`

export const Importants = () => {
  const importantList = useSelector(selectImportantTasks())

  return (
    <Flex>
      <Div>
        <AiOutlineUnorderedList />
        <ListTitle>Importants</ListTitle>
      </Div>
      {/* <TaskForm /> */}
      <TaskList listId='asd' taskList={importantList} />
    </Flex>
  )
}
