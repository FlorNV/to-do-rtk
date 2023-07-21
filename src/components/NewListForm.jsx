import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { IconStyled } from './styled/Icon'
import { AiOutlinePlus } from '../utils/icons'
import { addList } from '../redux/lists/listsSlice'

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1rem 2rem;
  
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.1);
  }
`

const Input = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  font-size: var(--text-md);
  color: var(--dark);
  
  &::placeholder {
    color: #5b94d4;
  }

  &:focus::placeholder {
    color: var(--dark);
  }
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin-left: 4px;
  line-height: 0;
  color: #5b94d4;
  cursor: pointer;
`

export const NewListForm = () => {
  const inputListRef = useRef()
  const lists = useSelector(state => state.lists)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => inputListRef.current.focus()

  const handleAddList = (event) => {
    event.preventDefault()
    const title = inputListRef.current.value || 'Untitled list'
    dispatch(addList({ title }))
    inputListRef.current.value = ''
    inputListRef.current.blur()
  }

  useEffect(() => {
    const lastList = lists[lists.length - 1]

    navigate(`/list/${lastList.id}`)
  }, [lists.length])

  return (
    <Form onSubmit={handleAddList}>
      <Button type='button' onClick={handleClick}>
        <IconStyled as={AiOutlinePlus} />
      </Button>
      <Input
        ref={inputListRef}
        type='text'
        name='title'
        placeholder='New list'
      />
    </Form>
  )
}
