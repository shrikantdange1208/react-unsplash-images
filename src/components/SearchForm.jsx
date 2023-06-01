import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../features/gallery/gallerySlice'

const SearchForm = () => {
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault()
    const searchValue = event.target.elements.search.value
    if (!searchValue) {
      return
    }

    dispatch(setSearchTerm({ searchValue }))
  }
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          name="search"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  )
}

export default SearchForm
