import React from 'react'
import DropdownItem from './DropdownItem'

function DropdownMenu (props) {
  return (
    <a href='/'
      className='nav-item dropdown'
    >
      <a
        className='nav-link dropdown-toggle'
        href='/'
        id='navbarDropdown'
        role='button'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
      >
        Dropdown
      </a>
      <div
        className='dropdown-menu'
        aria-labelledby='navbarDropdown'
      >
        <DropdownItem
          text='Action'
        />

        <DropdownItem
          text='Another Action'
        />

        <div
          className='dropdown-divider'
        />

        <DropdownItem
          text='Something Else'
        />
      </div>
    </a>

  )
}

export default DropdownMenu