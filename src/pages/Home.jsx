import { TaskList } from '../components/TaskList'
import { Filters } from '../components/Filters'
import styled from 'styled-components'

const Flex = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const Home = () => {
  return (
    <Flex>
      <Filters />
      <TaskList />
    </Flex>
  )
}
