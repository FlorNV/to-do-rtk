import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { AiOutlineExclamationCircle, AiOutlineMenu } from '../utils/icons'
import { selectImportantTasks } from '../redux/lists/listsSlice'
import { TaskForm, TaskDetails, TaskList } from '../components/index'
import { Main, ToolBar } from '../components/styled/Containers'
import { Layer } from '../components/styled/Layer'
import { MenuButton } from '../components/styled/Button'
import { toggleMenuVisibility } from '../redux/modal/menuSlice'

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

const Icon = styled.span`
  display: none;
  line-height: 0;

  @media (min-width: 768px) {
    display: ${({ isVisible }) => isVisible && 'block'};
  }
`

export const Importants = () => {
  const importantList = useSelector(selectImportantTasks())
  const selectedTask = useSelector(state => state.tasks)
  const isVisibleMenu = useSelector(state => state.menu.isVisibleMenu)
  const dispatch = useDispatch()

  const toggleButton = () => dispatch(toggleMenuVisibility())

  return (
    <Main>
      <LeftColumn>
        <Layer isVisible={isVisibleMenu} onClick={toggleButton} />
        <ToolBar>
          <Icon isVisible={isVisibleMenu}><AiOutlineExclamationCircle /></Icon>
          <MenuButton isVisible={isVisibleMenu} onClick={toggleButton}>
            <AiOutlineMenu />
          </MenuButton>
          <ListTitle>Importants</ListTitle>
        </ToolBar>
        <TaskForm />
        <TaskList list={importantList} />
      </LeftColumn>
      {selectedTask.isVisible &&
        <TaskDetails listId={selectedTask.task.listId} selectedTask={selectedTask} />}
    </Main>
  )
}
