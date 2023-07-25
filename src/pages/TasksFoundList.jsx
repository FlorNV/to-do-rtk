import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TaskDetails, TaskList } from '../components/index'
import { Main, ToolBar } from '../components/styled/Containers'
import { toggleMenuVisibility } from '../redux/modal/menuSlice'
import { Layer } from '../components/styled/Layer'
import { MenuButton } from '../components/styled/Button'
import { AiOutlineMenu } from '../utils/icons'

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const ListTitle = styled.h2`
  font-weight: 600;
  font-size: inherit;
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
  const selectedTask = useSelector(state => state.tasks)
  const isVisibleMenu = useSelector(state => state.menu.isVisibleMenu)
  const dispatch = useDispatch()

  const toggleButton = () => dispatch(toggleMenuVisibility())

  return (
    <Main>
      <LeftColumn>
        <Layer isVisible={isVisibleMenu} onClick={toggleButton} />
        <ToolBar>
          <MenuButton isVisible={isVisibleMenu} onClick={toggleButton}>
            <AiOutlineMenu />
          </MenuButton>
          <ListTitle>Searching "{query}"</ListTitle>
        </ToolBar>
        {
          query && tasks.length > 0
            ? <TaskList list={tasks} />
            : <Message>No search results for "{query}"</Message>
        }
      </LeftColumn>
      {selectedTask.isVisible &&
        <TaskDetails listId={selectedTask.task.listId} selectedTask={selectedTask} />}
    </Main>
  )
}
