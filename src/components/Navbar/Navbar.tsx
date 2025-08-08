import React from "react";
import "./Navbar.scss";

interface NavbarProps {
  isOpen: boolean;
}

const Navbar = ({ isOpen }: NavbarProps) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', active: true },
    { id: 'transactions', label: 'Transactions', active: false },
    { id: 'reports', label: 'Reports', active: false },
    { id: 'settings', label: 'Settings', active: false }
  ];

  return (
    <nav className={`navbar ${isOpen ? 'open' : 'closed'}`}>
      <ul className="navbar__list">
        {navItems.map((item) => (
          <li key={item.id} className="navbar__item">
            <button 
              className={`navbar__link ${item.active ? 'active' : ''}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
