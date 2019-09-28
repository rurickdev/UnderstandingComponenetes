import React from 'react'
import SearchButton from './SearchButton'
import Input from './Input'

function Searchbar (props) {
  return (
    <form
      className='form-inline my-2 my-lg-0'
    >
      <Input />
      <SearchButton />
    </form>
  )
}

export default Searchbar
