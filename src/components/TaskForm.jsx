import styled from 'styled-components'
import { useTask } from '../hooks/useTask'
import { DarkButton } from './styled/Button'
import { IconStyled } from './styled/Icon'
import { AiOutlinePlus } from 'react-icons/ai'
import { useRef, useState, useEffect } from 'react'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  border-radius: var(--border-radius);
  background-color: var(--bg-white);
  box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.2);
  z-index: 2;
`

const Label = styled.label`  
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  color: var(--font-color-cyan);
  cursor: pointer;
`

const Input = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  font-size: var(--text-lg);
  
  &::placeholder {
    color: var(--font-color-cyan);
  }

  &:focus::placeholder {
    color: var(--font-color-primary);
  }
`

const Div = styled.div`
  height: 46px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  background-color: var(--bg-tertiary);
  border-top: 1px solid var(--bg-separator);
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
`

export const TaskForm = () => {
  const { task, handleChange, handleSubmit } = useTask()
  const [isFocused, setIsFocused] = useState(false)
  const formRef = useRef()

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target !== formRef.current) {
        setIsFocused(false)
      }
    }

    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <Form ref={formRef} onSubmit={handleSubmit} onClick={(event) => event.stopPropagation()}>
      <Label>
        <IconStyled as={AiOutlinePlus} />
        <Input
          type='text'
          name='title'
          placeholder='Add a task'
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          value={task.title}
        />
      </Label>
      {isFocused &&
        <Div>
          <DarkButton left type='submit'>Add task</DarkButton>
        </Div>}
    </Form>
  )
}
