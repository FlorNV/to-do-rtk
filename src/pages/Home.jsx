import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { AiOutlineHome, AiOutlineMenu } from '../utils/icons'
import { TaskForm, TaskList, TaskDetails } from '../components/index'
import { Main, ToolBar } from '../components/styled/Containers'
import { Layer } from '../components/styled/Layer'
import { toggleMenuVisibility } from '../redux/modal/menuSlice'
import { MenuButton } from '../components/styled/Button'

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

export const Home = () => {
  const isVisibleMenu = useSelector(state => state.menu.isVisibleMenu)
  const selectedTask = useSelector(state => state.tasks)
  const lists = useSelector(state => state.lists)
  const [inbox] = lists
  const dispatch = useDispatch()

  const toggleButton = () => dispatch(toggleMenuVisibility())

  return (
    <Main>
      <LeftColumn>
        <Layer isVisible={isVisibleMenu} onClick={toggleButton} />
        <ToolBar>
          <Icon isVisible={isVisibleMenu}><AiOutlineHome /></Icon>
          <MenuButton isVisible={isVisibleMenu} onClick={toggleButton}>
            <AiOutlineMenu />
          </MenuButton>
          <ListTitle>Tasks</ListTitle>
        </ToolBar>
        <TaskForm />
        <TaskList list={inbox} />
      </LeftColumn>
      {selectedTask.isVisible &&
        <TaskDetails listId={inbox.id} selectedTask={selectedTask} />}
    </Main>
  )
}
