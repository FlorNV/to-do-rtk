import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isVisibleModal: false,
  modalResult: ''
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isVisibleModal = true
    },
    closeModal: (state) => {
      state.isVisibleModal = false
    },
    setModal: (state) => {
      state.isVisibleModal = !state.isVisibleModal
    },
    setModalResult: (state, action) => {
      state.modalResult = action.payload
    }
  }
})

export const { openModal, closeModal, setModal, setModalResult } = modalSlice.actions
export default modalSlice.reducer
