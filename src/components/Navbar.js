import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar" style={{ display: 'flex', alignItems: 'baseline' }}>
    <h1>Bookstore CMS</h1>
    <ul className="link-wrapper" style={{ listStyle: 'none', display: 'flex', alignItems: 'baseline' }}>
      <li className="nav-li" style={{ marginLeft: '1em' }}><NavLink to="books" className={({ isActive }) => (isActive ? 'active-link' : 'none')}>Books</NavLink></li>
      <li className="nav-li" style={{ marginLeft: '1em' }}><NavLink to="categories" className={({ isActive }) => (isActive ? 'active-link' : 'none')}>Categories</NavLink></li>
    </ul>
  </nav>

);

export default Navbar;
