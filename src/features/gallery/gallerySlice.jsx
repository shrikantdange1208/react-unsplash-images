import { createSlice } from '@reduxjs/toolkit'

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches
  const storedDarkMode = localStorage.getItem('darkTheme') === 'true'
  return storedDarkMode || prefersDarkMode
}

const initialState = {
  isLoading: true,
  isDarkTheme: getInitialDarkMode(),
  searchTerm: 'dog',
  images: [],
}

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setInitialTheme: (state) => {
      const body = document.querySelector('body')
      body.classList.toggle('dark-theme', state.isDarkTheme)
    },

    toggleDarkTheme: (state) => {
      const newDarkTheme = !state.isDarkTheme
      state.isDarkTheme = newDarkTheme
      const body = document.querySelector('body')
      body.classList.toggle('dark-theme', newDarkTheme)
      localStorage.setItem('darkTheme', newDarkTheme)
    },
    setSearchTerm: (state, { payload: { searchValue } }) => {
      state.searchTerm = searchValue
    },
  },
})

export const { toggleDarkTheme, setSearchTerm, setInitialTheme } =
  gallerySlice.actions
export default gallerySlice.reducer
