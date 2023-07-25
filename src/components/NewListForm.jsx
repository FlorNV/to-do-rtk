import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { IconStyled } from './styled/Icon'
import { AiOutlinePlus } from '../utils/icons'
import { addList } from '../redux/lists/listsSlice'

const Form = styled.form`
  width: 100%;
  padding: 1rem 2rem;
  
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.1);
  }
`

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
  padding-left: 4px;
  cursor: pointer;
  color: var(--font-color-cyan);
`

const Input = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  font-size: var(--text-md);
  
  &::placeholder {
    color: var(--font-color-cyan);
  }

  &:focus::placeholder {
    color: var(--font-color-primary);
  }
`

export const NewListForm = () => {
  const inputListRef = useRef()
  const lists = useSelector(state => state.lists)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddList = (event) => {
    event.preventDefault()
    const title = inputListRef.current.value || 'Untitled list'
    dispatch(addList({ title }))
  }

  useEffect(() => {
    const lastList = lists[lists.length - 1]

    navigate(`/list/${lastList.id}`)
  }, [lists.length])

  return (
    <Form onSubmit={handleAddList}>
      <Label>
        <IconStyled as={AiOutlinePlus} />
        <Input
          ref={inputListRef}
          type='text'
          name='title'
          placeholder='New list'
        />
      </Label>
    </Form>
  )
}
