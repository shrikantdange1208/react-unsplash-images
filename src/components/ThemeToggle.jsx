import React from 'react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkTheme } from '../features/gallery/gallerySlice'

const ThemeToggle = () => {
  const { isDarkTheme } = useSelector((store) => store.gallery)
  const dispatch = useDispatch()

  return (
    <section className="toggle-container">
      <button
        className="dark-toggle"
        onClick={() => dispatch(toggleDarkTheme())}
      >
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  )
}

export default ThemeToggle
