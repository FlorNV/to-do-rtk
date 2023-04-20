import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addList } from '../redux/lists/listsSlice'

export const useList = () => {
  const [listTitle, setListTitle] = useState('')
  const [list, setList] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const lists = useSelector(state => state.lists)
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()

  const handleChange = (event) => setListTitle(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmit(true)

    // if (id) {
    //   dispatch(updateList({
    //     id,
    //     ...list
    //   }))
    // } else {
    dispatch(addList({ title: listTitle }))
    // }
  }

  useEffect(() => {
    if (isSubmit) {
      const lastList = lists[lists.length - 1]
      const listId = lastList.id

      navigate(`/list/${listId}`)
    }
  }, [lists])

  useEffect(() => {
    if (id) {
      const listFound = lists.find(list => list.id === id)
      setList(listFound)
      setListTitle(listFound.title)
    }
  }, [id, lists])

  return { listTitle, list, handleChange, handleSubmit }
}
