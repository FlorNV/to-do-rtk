import styled from 'styled-components'
import { useTask } from '../hooks/useTask'
import { Button } from './styled/Button'
import { Title } from './styled/Title'

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

const Textarea = styled(Input)`
  font-family: inherit;
  resize: vertical;
  height: 100px;
  min-height: 20px;
  max-height: 180px;
`

export const TaskForm = () => {
  const { task, handleChange, handleSubmit, id } = useTask()

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>New task</Title>
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
          className='form-control'
          as='textarea'
        />
        <Button type='submit'>{id ? 'Update task' : 'Add task'}</Button>
      </Form>
    </Container>
  )
}
