import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

const Container = styled.div`
    display: flex;
    height: 100%;
    overflow: hidden;
`

export const Navigation = () => {
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
