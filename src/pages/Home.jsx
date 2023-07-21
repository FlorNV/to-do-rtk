import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { AiOutlineHome } from '../utils/icons'
import { TaskForm, TaskList } from '../components/index'
import { TaskDetails } from '../components/TaskDetails'
import { Main, ToolBar } from '../components/styled/Containers'
import { Layer } from '../components/styled/Layer'

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const ListTitle = styled.span`
  font-weight: 600;
  margin: 0;
`

export const Home = () => {
  const showMenu = useSelector(state => state.menu.showMenu)
  const selectedTask = useSelector(state => state.tasks)
  const lists = useSelector(state => state.lists)
  const [inbox] = lists

  return (
    <Main>
      <LeftColumn>
        <Layer isVisible={showMenu} />
        <ToolBar>
          <AiOutlineHome />
          <ListTitle>Tasks</ListTitle>
        </ToolBar>
        {/* <Filters /> */}
        <TaskForm />
        <TaskList list={inbox} />
      </LeftColumn>
      {selectedTask.isVisible &&
        <TaskDetails listId={inbox.id} selectedTask={selectedTask} />}
    </Main>
  )
}
