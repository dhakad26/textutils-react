import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

export default function Navbar({ title, mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <a a className="navbar-brand" href="#">{title}</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div  className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a  className="nav-link" href="/about">About</a>
            </li>
            {/*<li className="nav-item">
               <NavLink className="nav-link" to="/" end>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li> */}

          </ul>
          <form className="d-flex" role="search">
            <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
              <input
                className="form-check-input"
                onClick={toggleMode}
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
              />
              <label className="form-check-label" htmlFor="switchCheckDefault">
                Enable Dark Mode
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func
};
Navbar.defaultProps = {
  title: 'Set Title Here',
  mode: 'light',
  toggleMode: () => {}
};