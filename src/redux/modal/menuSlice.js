import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isVisibleMenu: true
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isVisibleMenu = true
    },
    closeMenu: (state) => {
      state.isVisibleMenu = false
    },
    toggleMenuVisibility: (state) => {
      state.isVisibleMenu = !state.isVisibleMenu
    }
  }
})

export const { openMenu, closeMenu, toggleMenuVisibility } = menuSlice.actions
export default menuSlice.reducer
