import styled from 'styled-components'
import { useTask } from '../hooks/useTask'
import { Button } from './styled/Button'
import { Title } from './styled/Title'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 20px;
`

const Input = styled.input`
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.2);
  border: none;
  padding: 1rem;
  color: #fff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  &:focus {
    outline: none;
  }
`

const Textarea = styled(Input)`
  font-family: inherit;
  resize: vertical;
`

export const TaskForm = () => {
  const { task, handleChange, handleSubmit, id } = useTask()

  return (
    <Form onSubmit={handleSubmit}>
      <Title>New note</Title>
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
  )
}
