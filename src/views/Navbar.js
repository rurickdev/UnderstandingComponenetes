import React from 'react'

import NavbarBrand from '../components/NavbarBrand'
import BurgerMenu from '../components/BurgerMenu'
import ColapsableBar from '../components/ColapsableBar'

function Navbar (props) {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <NavbarBrand
        text='Hello World'
        to='/hello-world'
      />
      <BurgerMenu />

      <ColapsableBar />
    </nav>
  )
}

export default Navbar
