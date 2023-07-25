import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled, { css, keyframes } from 'styled-components'
import {
  AiOutlineHome,
  AiOutlineExclamationCircle,
  AiOutlineUnorderedList,
  AiOutlineMenu
} from '../utils/icons'
import { IconStyled } from './styled/Icon'
import { selectImportantTasks } from '../redux/lists/listsSlice'
import { NewListForm } from './NewListForm'
import { toggleMenuVisibility } from '../redux/modal/menuSlice'
import { ButtonIcon } from './styled/Button'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Container = styled.div`
  width: 30%;
  min-width: 200px;
  max-width: 300px;
  background-color: var(--bg-white);
  color: var(--font-color-primary);
  box-shadow: 4px 0 6px -2px rgba(0, 0, 0, 0.2);
  display: ${({ isVisible }) => isVisible ? 'block' : 'none'};
  position: absolute;
  height: 100%;
  z-index: 4;

  @media (min-width: 768px) {
    display: ${({ isVisible }) => isVisible && 'block'};
    position: relative;
  }
`

const Title = styled.h1`
  font-size: 1rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const Menu = styled.nav`
  overflow-y: auto;
  overflow-x: hidden;

  & a.active {
    font-weight: 600;
    background-color: var(--bg-active-link);
    border-color: var(--bg-primary);
  }
`

const SidebarAddList = styled.div`
  flex-shrink: 0;
  z-index: 1;
  display: flex;
`

const LinkStyled = styled(NavLink)`
  padding: 1rem 2rem;
  border-left: 4px solid transparent;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  transition-property: background-color, border-color;
  transition-duration: 150ms;
  transition-timing-function: ease-in;
  ${({ animate }) => animate && css`
  animation: ${fadeIn} 500ms ease-in-out;
  `}

  &:hover {
    background-color: var(--bg-hover-primary);
  }

  & span {
    margin-left: auto;
  }
`

const Separator = styled.div`
  height: 1px;
  margin: 10px 20px;
  background-color: var(--bg-separator);
`

export const Sidebar = () => {
  const dispatch = useDispatch()
  const isVisibleMenu = useSelector(state => state.menu.isVisibleMenu)
  const lists = useSelector(state => state.lists)
  const [inbox, ...listsWithoutInbox] = lists
  const importantList = useSelector(selectImportantTasks())
  const [animate, setAnimate] = useState(false)

  const toggleButton = () => dispatch(toggleMenuVisibility())

  useEffect(() => {
    setAnimate(true)
  }, [lists.length])

  return (
    <Container isVisible={isVisibleMenu}>
      <Title>
        Menu
        <ButtonIcon black onClick={toggleButton}>
          <AiOutlineMenu />
        </ButtonIcon>
      </Title>
      <SidebarContent>
        <Menu>
          <LinkStyled to='inbox'>
            <IconStyled as={AiOutlineHome} />
            Tasks
            <span>{inbox.taskList.length}</span>
          </LinkStyled>
          <LinkStyled to='important'>
            <IconStyled as={AiOutlineExclamationCircle} />
            Important
            <span>{importantList.length}</span>
          </LinkStyled>
          <Separator />
          {listsWithoutInbox.map((list, index) =>
            <LinkStyled
              key={list.id} to={list.id}
              animate={animate && index === listsWithoutInbox.length - 1}
            >
              <IconStyled as={AiOutlineUnorderedList} />
              {list.title}
              <span>{list.taskList.length}</span>
            </LinkStyled>)}
        </Menu>
        <SidebarAddList>
          <NewListForm />
        </SidebarAddList>
      </SidebarContent>
    </Container>
  )
}
