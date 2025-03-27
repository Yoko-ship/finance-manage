import React from 'react'
import { Outlet } from 'react-router-dom'

function Navigation({children}) {
  return (
    <div className='navigation'>
        <ul>
            {children}
        </ul>
        <Outlet></Outlet>
    </div>
  )
}

export default Navigation