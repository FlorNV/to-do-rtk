import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
  AiOutlineHome,
  AiOutlinePlus,
  AiOutlineExclamationCircle,
  AiOutlineUnorderedList
} from 'react-icons/ai'
import styled from 'styled-components'
import { IconStyled } from './styled/Icon'

const Container = styled.div`
  width: 30%;
  min-width: 200px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  background-color: var(--light);
  color: var(--dark);
  box-shadow: 4px 0 6px -2px rgba(0, 0, 0, 0.2);
`

const Title = styled.h1`
  font-size: 1rem;
  padding: 10px 20px;
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  & a.active {
    font-weight: 600;
    background-color: rgba(var(--primary-rgb), 0.2);
    border-color: var(--primary);
  }
`

const LinkStyled = styled(NavLink)`
  padding: 1rem 2rem;
  border-left: 4px solid transparent;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  &:hover {
    background-color: rgba(var(--primary-rgb), 0.1);
  }

  & span {
    margin-left: auto;
  }
`

const Line = styled.div`
  height: 1px;
  margin: 10px 20px;
  background-color: rgba(var(--dark-rgb), 0.2);
`

export const Sidebar = () => {
  // const tasks = useSelector((state) => state.tasks.taskList)
  const lists = useSelector(state => state.lists)

  return (
    <Container>
      <Title>Menu</Title>
      <Menu>
        <LinkStyled to='/'>
          <IconStyled as={AiOutlineHome} />
          {/* Tasks<span>{tasks.length}</span> */}
        </LinkStyled>
        <LinkStyled to='list/create'>
          <IconStyled as={AiOutlinePlus} />
          Add list
        </LinkStyled>
        <LinkStyled to='task/important'>
          <IconStyled as={AiOutlineExclamationCircle} />
          Important
        </LinkStyled>
        <Line />
        {lists.map(list =>
          <LinkStyled key={list.id} to={`list/${list.id}`}>
            <IconStyled as={AiOutlineUnorderedList} />
            {list.title}
            <span>{list.taskList.length}</span>
          </LinkStyled>)}
      </Menu>
    </Container>
  )
}
