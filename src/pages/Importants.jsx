import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { AiOutlineExclamationCircle } from '../utils/icons'
import { selectImportantTasks } from '../redux/lists/listsSlice'
import { SpecialTaskList, TaskForm } from '../components/index'
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

export const Importants = () => {
  const importantList = useSelector(selectImportantTasks())
  const selectedTask = useSelector(state => state.tasks)
  const showMenu = useSelector(state => state.menu.showMenu)

  return (
    <Main>
      <LeftColumn>
        <Layer isVisible={showMenu} />
        <ToolBar>
          <AiOutlineExclamationCircle />
          <ListTitle>Importants</ListTitle>
        </ToolBar>
        <TaskForm />
        <SpecialTaskList taskList={importantList} />
      </LeftColumn>
      {selectedTask.isVisible &&
        <TaskDetails listId={selectedTask.task.listId} selectedTask={selectedTask} />}
    </Main>
  )
}
