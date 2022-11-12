import React from 'react';
import { NavLink } from 'react-router-dom';
import { TbUserCircle } from 'react-icons/tb';
import '../styles/navbar.css';

const Navbar = () => (
  <nav className="navBar">
    <h1>Bookstore CMS</h1>
    <ul className="link-wrapper">
      <li className="nav-li"><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'none')}>BOOKS</NavLink></li>
      <li className="nav-li"><NavLink to="categories" className={({ isActive }) => (isActive ? 'active-link' : 'none')}>CATEGORIES</NavLink></li>
    </ul>
    <TbUserCircle />
  </nav>

);

export default Navbar;
