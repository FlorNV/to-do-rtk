import styled from 'styled-components'

const Header = styled.header`
  width: 100%;
  background-color: var(--dark);
  color: var(--white);
`

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem;
`

export const Navbar = () => {
  return (
    <Header>
      <Logo>To Do</Logo>
    </Header>
  )
}
