import styled from 'styled-components'
import { Searcher } from './index'

const Header = styled.header`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--bg-primary);
  color: var(--font-color-secondary);
`

const Logo = styled.div`
  margin-left: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--font-color-tertiary);
`

export const Navbar = () => {
  return (
    <Header>
      <Logo>To Do</Logo>
      <Searcher />
    </Header>
  )
}
