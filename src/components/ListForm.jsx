import styled from 'styled-components'
import { Button } from './styled/Button'
import { Title } from './styled/Title'
import { useList } from '../hooks/useList'

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  width: 80%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 2rem;
  border-radius: var(--border-radius);
  background-color: var(--light);
`

const Input = styled.input`
  border-radius: var(--border-radius);
  background-color: rgba(var(--primary-rgb), 0.2);
  border: none;
  padding: 1rem;
  color: var(--dark);

  &::placeholder {
    color: var(--dark);
  }
  &:focus {
    outline: none;
  }
`

export const ListForm = () => {
  const { listTitle, handleChange, handleSubmit } = useList()

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>New list</Title>
        <Input
          type='text'
          name='title'
          placeholder='Title'
          onChange={handleChange}
          value={listTitle}
        />
        <Button type='submit'>Add list</Button>
      </Form>
    </Container>
  )
}
