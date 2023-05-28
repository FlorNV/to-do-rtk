import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NotFound = () => {
  return <Container><h1>List not found ☹️</h1></Container>
}
