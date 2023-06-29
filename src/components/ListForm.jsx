import styled from 'styled-components'
import { Button } from './styled/Button'
import { IconStyled } from './styled/Icon'
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
      <Button type='submit' icon='true'>
        <IconStyled as={AiOutlineCheck} />
      </Button>
    </Form>
  )
}
