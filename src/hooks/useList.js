import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteList, selectListById, updateList } from '../redux/lists/listsSlice'
import { openModal } from '../redux/modal/modalSlice'

export const useList = () => {
  const { id } = useParams()
  const listFound = useSelector(selectListById(id))
  const lists = useSelector(state => state.lists)
  const modalResult = useSelector(state => state.modal.modalResult)
  const [list, setList] = useState(null)
  const [listTitle, setListTitle] = useState('')
  const [isShowInput, setIsShowInput] = useState(false)
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const dispatch = useDispatch()

  const showInput = () => setIsShowInput(true)

  const hideInput = () => setIsShowInput(false)

  const closeDropdown = () => setIsOpenDropdown(false)

  const handleChange = (event) => setListTitle(event.target.value)

  const handleUpdateList = (event) => {
    event.preventDefault()
    dispatch(updateList({
      ...list,
      title: listTitle
    }))
    hideInput()
  }

  const handleDropdown = (event) => {
    event.stopPropagation()
    setIsOpenDropdown(prev => !prev)
  }

  const handleChangeListName = () => {
    showInput()
    closeDropdown()
  }

  const handleDeleteList = () => {
    dispatch(openModal())
    closeDropdown()
  }

  useEffect(() => {
    if (id) {
      if (listFound) {
        setList(listFound)
        setListTitle(listFound.title)
      }
    }
  }, [id, lists])

  useEffect(() => {
    if (modalResult === 'confirm') {
      dispatch(deleteList(id))
    }
  }, [modalResult])

  return {
    listTitle,
    list,
    isShowInput,
    isOpenDropdown,
    handleChange,
    handleUpdateList,
    showInput,
    hideInput,
    handleDropdown,
    handleChangeListName,
    handleDeleteList,
    closeDropdown
  }
}
