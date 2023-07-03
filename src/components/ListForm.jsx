import styled from 'styled-components'
import { AiOutlineCheck } from 'react-icons/ai'

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Input = styled.input`
  font-size: var(--text-xxl);
  min-width: 20px;
  background-color: transparent;
  border: 1px solid var(--dark);
  border-radius: var(--border-radius);

  &:focus {
    outline: none;
  }
`

const Button = styled.button`
  width: max-content;
  padding: 0.2rem;
  border-radius: var(--border-radius);
  border: 2px solid transparent;
  line-height: 0;
  font-family: inherit;
  font-size: 1.2rem;
  color: var(--white);
  background-color: var(--dark);
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #6290c3;
  }
`

export const ListForm = ({ listTitle, size, handleUpdateList, handleChange }) => {
  return (
    <Form onSubmit={handleUpdateList}>
      <Input
        type='text'
        name='title'
        value={listTitle}
        onChange={handleChange}
        size={size}
      />
      <Button type='submit'>
        <AiOutlineCheck />
      </Button>
    </Form>
  )
}
