import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { AiOutlineEllipsis, AiOutlineUnorderedList, AiOutlineMenu } from '../utils/icons'
import { NotFound } from './index'
import { ListForm, TaskForm, TaskList, Dropdown, TaskDetails } from '../components/index'
import { useList } from '../hooks/useList'
import { toggleMenuVisibility } from '../redux/modal/menuSlice'
import { Main, ToolBar } from '../components/styled/Containers'
import { LightButtonIcon, MenuButton } from '../components/styled/Button'
import { Layer } from '../components/styled/Layer'

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`

const Icon = styled.span`
  display: none;
  line-height: 0;

  @media (min-width: 768px) {
    display: ${({ isVisible }) => isVisible && 'block'};
  }
`

const ListTitle = styled.h2`
  font-weight: 600;
  font-size: inherit;
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
  const selectedTask = useSelector(state => state.tasks)
  const isVisibleMenu = useSelector(state => state.menu.isVisibleMenu)
  const dispatch = useDispatch()

  const toggleButton = () => dispatch(toggleMenuVisibility())

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
    <Main>
      {list
        ? <>
          <LeftColumn>
            <Layer isVisible={isVisibleMenu} onClick={toggleButton} />
            <ToolBar>

              <Icon isVisible={isVisibleMenu}><AiOutlineUnorderedList /></Icon>
              <MenuButton isVisible={isVisibleMenu} onClick={toggleButton}>
                <AiOutlineMenu />
              </MenuButton>

              {isShowInput
                ? <ListForm
                    listTitle={list.title}
                    handleUpdateList={handleUpdateList}
                    hideInput={hideInput}
                  />
                : <ListTitle onDoubleClick={showInput}>{list.title}</ListTitle>}

              <LightButtonIcon ref={buttonRef} onClick={handleDropdown}>
                <AiOutlineEllipsis />
              </LightButtonIcon>
              <Dropdown
                forwardedRef={menuRef}
                isOpenDropdown={isOpenDropdown}
                handleShowInput={handleShowInput}
                handleDeleteList={handleDeleteList}
                closeDropdown={closeDropdown}
              />
            </ToolBar>
            <TaskForm />
            <TaskList list={list} />
          </LeftColumn>
          {selectedTask.isVisible &&
            <TaskDetails listId={list.id} selectedTask={selectedTask} />}
        </>
        : <NotFound />}
    </Main>
  )
}
