import React from 'react'

import Searchbar from './Searchbar'
import DisableButton from './DisableButton'
import DropdownMenu from './DropdownMenu'
import NavItem from './NavItem'

function ColapsableBar (props) {
  return (<div
    className='collapse navbar-collapse'
    id='navbarSupportedContent'
  >
    <ul
      className='navbar-nav mr-auto'
    >
      <NavItem
        status='active'
        text='Home'
      />

      <NavItem
        text='Link'
      />
      <DropdownMenu />
      <a href='/'
        className='nav-item'
      >
        <DisableButton />
      </a>
    </ul>
    <Searchbar />
  </div >)
}

export default ColapsableBar
