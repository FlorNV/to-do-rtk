import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setFilterStatus } from '../redux/tasks/taskSlice'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 2rem;
  margin-bottom: 0;
  border-radius: var(--border-radius);
  background-color: var(--light);
  box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.2);
  position: relative;
`

const Title = styled.h3`
  margin: 0;
  margin-bottom: 1rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Filters = () => {
  const [filter, setFilter] = useState('all')
  const dispatch = useDispatch()

  const handleChange = (event) => setFilter(event.target.value)

  useEffect(() => {
    dispatch(setFilterStatus(filter))
  }, [filter])

  return (
    <Container>
      <Title>Filters</Title>
      <Form>
        {/* <select name='filter' value={filter} onChange={handleChange}>
          <option value='all' selected={filter === 'all'}>All</option>
          <option value='completed' selected={filter === 'completed'}>Completed</option>
          <option value='active' selected={filter === 'active'}>Active</option>
        </select> */}

        <label>
          <input
            type='radio'
            value='all'
            checked={filter === 'all'}
            onChange={handleChange}
          />
          All
        </label>

        <label>
          <input
            type='radio'
            value='completed'
            checked={filter === 'completed'}
            onChange={handleChange}
          />
          Completed
        </label>

        <label>
          <input
            type='radio'
            value='active'
            checked={filter === 'active'}
            onChange={handleChange}
          />
          Active
        </label>
      </Form>
    </Container>
  )
}
