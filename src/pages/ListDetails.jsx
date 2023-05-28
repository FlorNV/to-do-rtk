import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineCheck, AiOutlineUnorderedList } from 'react-icons/ai'
import styled from 'styled-components'
import { NotFound } from './index'
import { TaskForm, TaskList } from '../components/index'
import { updateList } from '../redux/lists/listsSlice'
import { useList } from '../hooks/useList'
import { Button } from '../components/styled/Button'
import { IconStyled } from '../components/styled/Icon'

const ToolBar = styled.div`
  font-size: var(--text-xxl);
  margin: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`

const ListTitle = styled.span`
  font-weight: 600;
  margin: 0;
`

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

export const ListDetails = () => {
  const { list, listTitle, handleChange } = useList()
  const [showInput, setShowInput] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(updateList({
      ...list,
      title: listTitle
    }))
    setShowInput(prev => !prev)
  }

  return (
    <>
      {list
        ? <>
          <ToolBar>
            <AiOutlineUnorderedList />
            {showInput
              ? <Form onSubmit={handleSubmit}>
                <Input
                  type='text'
                  name='title'
                  value={listTitle}
                  onChange={handleChange}
                  size={list.title.length}
                />
                <Button type='submit' icon='true'>
                  <IconStyled as={AiOutlineCheck} />
                </Button>
              </Form>
              : <ListTitle onDoubleClick={handleSubmit}>{list.title}</ListTitle>}
          </ToolBar>
          <TasksContainer>
            <TaskForm />
            <TaskList list={list} />
          </TasksContainer>
        </>
        : <NotFound />}
    </>
  )
}
