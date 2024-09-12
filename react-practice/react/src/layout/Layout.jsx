import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <header>
        <h2>Router Demo</h2>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout
