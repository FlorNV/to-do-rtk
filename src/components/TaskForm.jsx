import styled from 'styled-components'
import { useTask } from '../hooks/useTask'
import { DarkButton } from './styled/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  margin: 0 2rem;
  border-radius: var(--border-radius);
  background-color: var(--light);
  box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.2);
  z-index: 2;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;
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
`

export const TaskForm = () => {
  const { task, handleChange, handleSubmit } = useTask()

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          name='title'
          placeholder='Title'
          onChange={handleChange}
          value={task.title}
        />
        <DarkButton type='submit'>Add task</DarkButton>
      </Form>
    </Container>
  )
}
