import { useEffect, useRef } from 'react'
import { AiOutlineEllipsis, AiOutlineUnorderedList } from 'react-icons/ai'
import styled from 'styled-components'
import { NotFound } from './index'
import { ListForm, TaskForm, TaskList, Dropdown } from '../components/index'
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

const Button = styled.button`
  padding: 3px;
  border: none;
  border-radius: var(--border-radius);
  background-color: transparent;
  line-height: 0;
  font-size: var(--text-lg);
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    background-color: rgba(var(--light-rgb), 0.5);
  }
`

export const ListDetails = () => {
  const {
    list,
    isShowInput,
    isOpenDropdown,
    handleUpdateList,
    handleShowInput,
    handleDeleteList,
    showInput,
    hideInput,
    handleDropdown,
    closeDropdown
  } = useList()
  const buttonRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target !== buttonRef.current && event.target !== menuRef.current) {
        closeDropdown()
      }
    }

    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      {list
        ? <>
          <ToolBar>
            <AiOutlineUnorderedList />
            {isShowInput
              ? <ListForm
                  listTitle={list.title}
                  handleUpdateList={handleUpdateList}
                  hideInput={hideInput}
                />
              : <ListTitle onDoubleClick={showInput}>{list.title}</ListTitle>}
            <Button ref={buttonRef} onClick={handleDropdown}><AiOutlineEllipsis /></Button>
            <Dropdown
              forwardedRef={menuRef}
              isOpenDropdown={isOpenDropdown}
              handleShowInput={handleShowInput}
              handleDeleteList={handleDeleteList}
              closeDropdown={closeDropdown}
            />
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
