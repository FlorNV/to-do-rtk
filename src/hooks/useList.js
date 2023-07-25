import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteList, selectListById, updateList } from '../redux/lists/listsSlice'
import { openModal, setModalResult } from '../redux/modal/modalSlice'

export const useList = () => {
  const { id } = useParams()
  const listFound = useSelector(selectListById(id))
  const lists = useSelector(state => state.lists)
  const { isVisibleModal, modalResult } = useSelector(state => state.modal)
  const [list, setList] = useState(null)
  const [isShowInput, setIsShowInput] = useState(false)
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const dispatch = useDispatch()

  const showInput = () => setIsShowInput(true)

  const hideInput = () => setIsShowInput(false)

  const closeDropdown = () => setIsOpenDropdown(false)

  const handleUpdateList = (title) => {
    dispatch(updateList({
      ...list,
      title
    }))
    hideInput()
  }

  const handleDropdown = (event) => {
    event.stopPropagation()
    setIsOpenDropdown(prev => !prev)
  }

  const handleShowInput = () => {
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
      }
    }
  }, [id, lists])

  useEffect(() => {
    if (!isVisibleModal && modalResult === 'confirm') {
      dispatch(deleteList(id))
      dispatch(setModalResult(''))
    }
  }, [isVisibleModal])

  return {
    list,
    isShowInput,
    isOpenDropdown,
    handleUpdateList,
    showInput,
    hideInput,
    handleDropdown,
    handleShowInput,
    handleDeleteList,
    closeDropdown
  }
}
