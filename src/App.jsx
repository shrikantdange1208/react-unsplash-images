import { useEffect, useState } from 'react'
import ThemeToggle from './components/ThemeToggle'
import SearchForm from './components/SearchForm'
import Gallery from './components/Gallery'
import { useDispatch } from 'react-redux'
import { setInitialTheme } from './features/gallery/gallerySlice'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setInitialTheme())
  }, [])

  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  )
}

export default App
