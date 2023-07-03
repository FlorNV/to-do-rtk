import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showModal: false,
  modalResult: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.showModal = true
    },
    closeModal: (state) => {
      state.showModal = false
    },
    setModal: (state) => {
      state.showModal = !state.showModal
    },
    setModalResult: (state, action) => {
      state.modalResult = action.payload
    }
  }
})

export const { openModal, closeModal, setModal, setModalResult } = modalSlice.actions
export default modalSlice.reducer
