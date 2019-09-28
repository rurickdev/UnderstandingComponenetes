import React from 'react'

function NavItem (props) {
  return (
    <a
      href='/'
      className={`nav-item ${props.status}`}
    >
      <a
        className='nav-link'
        href='/'
      >
        {props.text}
      </a>
    </a>
  )
}

export default NavItem
