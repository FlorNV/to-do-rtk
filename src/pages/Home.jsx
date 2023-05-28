import { useSelector } from 'react-redux'
import { TaskForm, TaskList } from '../components/index'
import styled from 'styled-components'
import { AiOutlineHome } from 'react-icons/ai'

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

export const Home = () => {
  const lists = useSelector(state => state.lists)
  const [inbox] = lists

  return (
    <Flex>
      <Div>
        <AiOutlineHome />
        <ListTitle>Tasks</ListTitle>
      </Div>
      {/* <Filters /> */}
      <TaskForm />
      <TaskList list={inbox} />
    </Flex>
  )
}
