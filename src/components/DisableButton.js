import React from 'react'

function DisableButton (props) {
  return (
    <a
      className='nav-link disabled'
      href='/'
      tabindex='-1'
      aria-disabled='true'
    >
      Disabled
    </a>
  )
}

export default DisableButton
