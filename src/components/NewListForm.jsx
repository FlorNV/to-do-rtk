import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { IconStyled } from './styled/Icon'
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { addList } from '../redux/lists/listsSlice'
import { useNavigate } from 'react-router-dom'

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
  const [isAdding, setIsAdding] = useState(false)
  const inputRef = useRef()
  const dispatch = useDispatch()
  const lists = useSelector(state => state.lists)
  const navigate = useNavigate()

  const handleToggle = () => setIsAdding(prev => !prev)

  const handleSubmit = (event) => {
    event.preventDefault()
    const title = inputRef.current.value || 'Untitled list'
    dispatch(addList({ title }))
    inputRef.current.value = ''
    inputRef.current.blur()
  }

  useEffect(() => {
    const lastList = lists[lists.length - 1]
    const listId = lastList.id

    navigate(`/list/${listId}`)
  }, [lists])

  useEffect(() => {
    if (isAdding) inputRef.current.focus()
  }, [isAdding])

  return (
    <Form onSubmit={handleSubmit}>
      <Button type='button' onClick={handleToggle}>
        <IconStyled as={AiOutlinePlus} />
      </Button>
      <Input
        ref={inputRef}
        type='text'
        name='title'
        placeholder='New list'
      />
    </Form>
  )
}
