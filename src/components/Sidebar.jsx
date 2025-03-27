import React from 'react'
import "./sidebar.css"
import { NavLink } from 'react-router-dom'
function Sidebar() {
  return (
    <div className='sidebar'>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/transactions">Transactions</NavLink>
                </li>
                <li>
                    <NavLink to="/settings">Settings</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar