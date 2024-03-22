import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Brand } from '../assets/icons/logo.svg'
import './navbar.css'

const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo pb-3">
          <Brand />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>

        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
            <div className="container d-flex flex-column mt-0">
                <div className='row'>
                    <NavLink to="/account">Account</NavLink>
                </div>
                <div className='row'>
                    <NavLink to="/cart">Cart</NavLink>
                </div>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar