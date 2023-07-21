import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showMenu: true
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.showMenu = true
    },
    closeMenu: (state) => {
      state.showMenu = false
    },
    toggleMenuVisibility: (state) => {
      state.showMenu = !state.showMenu
    }
  }
})

export const { openMenu, closeMenu, toggleMenuVisibility } = menuSlice.actions
export default menuSlice.reducer
