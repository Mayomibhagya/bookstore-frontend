import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Catalog', to: '/catalog' },
  { label: 'Cart', to: '/cart' },
  { label: 'Admin', to: '/admin' },
];

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <h1>Bookstore</h1>
        </Link>
        <ul className="navbar-menu">
          {navLinks.map((link) => (
            <li key={link.to} className="navbar-item">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? 'active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

