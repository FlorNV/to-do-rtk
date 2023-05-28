import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar, Sidebar } from './index'

const Container = styled.div`
    display: flex;
    height: 100%;
    overflow: hidden;
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const Navigation = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Sidebar />
        <Main>
          <Outlet />
        </Main>
      </Container>
    </>
  )
}
