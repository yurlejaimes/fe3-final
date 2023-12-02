import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './context/global.context';
import '../styles/main.css'

const Navbar = () => {
  const { state, dispatch } = useGlobalContext();

  const handleToggleTheme = () => {
    // Acción para cambiar de tema
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const modeSuffix = state.darkMode ? '-dark' : '';

  return (
    <nav className={`navbar${modeSuffix}`}>
      <div className={`logo${modeSuffix}`}>
        <p>DH - Odonto</p>
      </div>
    
      <ul className="nav-list">
        <li className={`nav-item${modeSuffix}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`nav-item${modeSuffix}`}>
          <Link to="/contact">Contacto</Link>
        </li>
        <li className={`nav-item${modeSuffix}`}>
          <Link to="/favs">Favoritos</Link>
        </li>
        <li className={`nav-item${modeSuffix}`}>
          <button onClick={handleToggleTheme}>
            {state.darkMode ? '🌙' : '☀️'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
