import { AiOutlineUnorderedList } from 'react-icons/ai'
import styled from 'styled-components'
import { NotFound } from './index'
import { ListForm, TaskForm, TaskList } from '../components/index'
import { useList } from '../hooks/useList'

const ToolBar = styled.div`
  font-size: var(--text-xxl);
  margin: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`

const ListTitle = styled.span`
  font-weight: 600;
  margin: 0;
`

export const ListDetails = () => {
  const {
    list,
    listTitle,
    showInput,
    handleChange,
    handleUpdateList,
    handleShowInput
  } = useList()

  return (
    <>
      {list
        ? <>
          <ToolBar>
            <AiOutlineUnorderedList />
            {showInput
              ? <ListForm
                  listTitle={listTitle}
                  size={list.title.length}
                  handleUpdateList={handleUpdateList}
                  handleChange={handleChange}
                />
              : <ListTitle onDoubleClick={handleShowInput}>{list.title}</ListTitle>}
          </ToolBar>
          <TasksContainer>
            <TaskForm />
            <TaskList list={list} />
          </TasksContainer>
          </>
        : <NotFound />}
    </>
  )
}
