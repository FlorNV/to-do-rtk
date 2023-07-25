import styled from 'styled-components'
import { useEffect, useRef, useState } from 'react'

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Input = styled.input`
  font-size: var(--text-xxl);
  min-width: 20px;
  background-color: transparent;
  border: 1px solid var(--bg-primary);
  border-radius: var(--border-radius);
`

export const ListForm = ({ listTitle, handleUpdateList, hideInput }) => {
  const formRef = useRef(null)
  const inputRef = useRef(null)
  const [title, setTitle] = useState(listTitle)

  const handleChange = (event) => setTitle(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    handleUpdateList(title)
  }

  const handleKey = (event) => {
    if (event.key === 'Escape') {
      hideInput()
    }
  }

  useEffect(() => {
    inputRef.current.select()
    const handleClick = (event) => {
      if (event.target !== formRef.current) {
        hideInput()
      }
    }
    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <Form
      ref={formRef} onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}
      onKeyDown={handleKey}
    >
      <Input
        ref={inputRef}
        type='text'
        name='title'
        value={title}
        onChange={handleChange}
        size={listTitle.length}
      />
    </Form>
  )
}
