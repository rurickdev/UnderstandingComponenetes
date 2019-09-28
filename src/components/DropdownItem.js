import React from 'react'

function DropdownItem (props) {
  return (
    <a
      className='dropdown-item'
      href='/'
    >
      {props.text}
    </a>
  )
}

export default DropdownItem
