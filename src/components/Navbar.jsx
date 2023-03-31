import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin: 0;
`

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`

const Menu = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 300px;
  height: 50px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.2);
`

export const Navbar = () => {
  return (
    <Header>
      <Title>React + Redux Toolkit</Title>
      <Menu>
        <Link to='/'>🏠 Home </Link>|
        <Link to='/create'>➕ Add task</Link>
      </Menu>
    </Header>
  )
}
