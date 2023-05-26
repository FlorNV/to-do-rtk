import styled from 'styled-components'
import { useTask } from '../hooks/useTask'
import { Button } from './styled/Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  margin: 0 2rem;
  border-radius: var(--border-radius);
  background-color: var(--light);
  box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.2);
  position: relative;
`

export const Title = styled.h2`
  font-size: var(--text-lg);
  margin: 0;
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
  &:focus {
    outline: none;
  }
`

const Textarea = styled(Input)`
  font-family: inherit;
  resize: none;
  /* height: 100px;
  min-height: 20px;
  max-height: 180px; */
`

export const TaskForm = () => {
  const { task, isEditing, handleChange, handleSubmit } = useTask()

  return (
    <Container>
      {/* <Title>New task</Title> */}
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          name='title'
          placeholder='Title'
          onChange={handleChange}
          value={task.title}
        />
        <Textarea
          name='description'
          placeholder='Description'
          onChange={handleChange}
          value={task.description}
          as='textarea'
        />
        <Button type='submit'>{!isEditing ? 'Add task' : 'Update task'}</Button>
      </Form>
    </Container>
  )
}
