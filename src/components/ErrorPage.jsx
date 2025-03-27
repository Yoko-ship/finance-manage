import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='errorPage'>
        <h2>Такой страницы не существует</h2>
        <NavLink to={".."}>Назад</NavLink>
    </div>
  )
}

export default ErrorPage