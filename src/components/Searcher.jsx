import styled from 'styled-components'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllTasks } from '../redux/lists/listsSlice'
import { setFilteredTasks } from '../redux/tasks/fiteredTasksSlice'

const Container = styled.div`
  margin: 0 auto;
  width: 400px;
`

const InputContainer = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  background: var(--white);
  color: var(--dark);
`

const Icon = styled(AiOutlineSearch)`
  font-size: var(--text-xl);
`

const Input = styled.input`
  width: 100%;
  padding: 0 0.5rem;
  border: none;
  border-radius: inherit;

  &:focus {
    outline: none;
  }
`

export const Searcher = () => {
  const navigate = useNavigate()
  const allTasks = useSelector(selectAllTasks())
  const dispatch = useDispatch()
  const [searching, setSearching] = useState(false)
  const [query, setQuery] = useState('')

  const handleChange = event => {
    setSearching(true)
    const query = event.target.value
    setQuery(query)
    navigate(`/search/${query}`)
  }

  const handleReset = () => {
    setQuery('')
    setSearching(false)
    navigate('/')
  }

  useEffect(() => {
    const filteredTasks = allTasks.filter(task =>
      task.title.toLowerCase().includes(query.toLowerCase()))
    dispatch(setFilteredTasks(filteredTasks))
  }, [query, allTasks])

  return (
    <Container>
      <form>
        <InputContainer>
          <Icon />
          <Input
            type='text'
            name='query'
            value={query}
            onChange={handleChange}
            placeholder='Search'
          />
          {searching && <AiOutlineClose onClick={handleReset} />}
        </InputContainer>
      </form>
    </Container>
  )
}
