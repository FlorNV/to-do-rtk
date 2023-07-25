import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { AiOutlineSearch, AiOutlineClose } from '../utils/icons'
import { selectAllTasks } from '../redux/lists/listsSlice'
import { setFilteredTasks } from '../redux/tasks/fiteredTasksSlice'

const Container = styled.div`
  margin: 0 auto;
  width: 400px;
`

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  background: var(--bg-white);
  cursor: pointer;
`

const Icon = styled(AiOutlineSearch)`
  font-size: var(--text-xl);
`

const Input = styled.input`
  width: 100%;
  padding: 0 0.5rem;
  border: none;
  border-radius: inherit;
`

export const Searcher = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const allTasks = useSelector(selectAllTasks())
  const [searching, setSearching] = useState(false)
  const [query, setQuery] = useState('')

  const handleChange = event => {
    setSearching(true)
    const query = event.target.value
    setQuery(query)
    navigate(`search/${query}`)
  }

  const handleReset = () => {
    setQuery('')
    setSearching(false)
    navigate('/')
  }

  const filteredTasks = useMemo(() => {
    return allTasks.filter(task =>
      task.title.toLowerCase().includes(query.toLowerCase()))
  }, [allTasks, query])

  dispatch(setFilteredTasks(filteredTasks))

  return (
    <Container>
      <form>
        <Label>
          <Icon />
          <Input
            type='text'
            name='query'
            value={query}
            onChange={handleChange}
            placeholder='Search'
          />
          {searching && <AiOutlineClose onClick={handleReset} />}
        </Label>
      </form>
    </Container>
  )
}
