import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar, Sidebar } from '../components/index'
// import { useSelector } from 'react-redux'

const Container = styled.div`
    display: flex;
    height: 100%;
    overflow: hidden;
    position: relative;
`

export const Navigation = () => {
  // const showMenu = useSelector(state => state.menu.showMenu)

  return (
    <>
      <Navbar />
      <Container>
        <Sidebar />
        <Outlet />
      </Container>
    </>
  )
}
