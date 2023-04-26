import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addList } from '../redux/lists/listsSlice'

export const useList = () => {
  const [listTitle, setListTitle] = useState('')
  const [list, setList] = useState(null)
  const [isSubmit, setIsSubmit] = useState(false)
  const lists = useSelector(state => state.lists)
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()

  const handleChange = (event) => setListTitle(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmit(true)

    dispatch(addList({ title: listTitle }))
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
      if (listFound) {
        setList(listFound)
        setListTitle(listFound.title)
      }
    }
  }, [id, lists])

  return { id, listTitle, list, handleChange, handleSubmit }
}
