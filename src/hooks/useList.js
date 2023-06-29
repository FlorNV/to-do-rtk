import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectListById, updateList } from '../redux/lists/listsSlice'

export const useList = () => {
  const { id } = useParams()
  const listFound = useSelector(selectListById(id))
  const lists = useSelector(state => state.lists)
  const [list, setList] = useState(null)
  const [listTitle, setListTitle] = useState('')
  const [showInput, setShowInput] = useState(false)
  const dispatch = useDispatch()

  const handleShowInput = () => setShowInput(prev => !prev)

  const handleChange = (event) => setListTitle(event.target.value)

  const handleUpdateList = (event) => {
    event.preventDefault()
    dispatch(updateList({
      ...list,
      title: listTitle
    }))
    handleShowInput()
  }

  useEffect(() => {
    if (id) {
      if (listFound) {
        setList(listFound)
        setListTitle(listFound.title)
      }
    }
  }, [id, lists])

  return { listTitle, list, showInput, handleChange, handleUpdateList, handleShowInput }
}
