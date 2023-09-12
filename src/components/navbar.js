import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/Shopify-Logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Left Side Elements */}
        <div className="navbar-left">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Solution</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resources</a>
            </li>
          </ul>
        </div>

        {/* Right Side Elements */}
        <div className="navbar-right">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Login</a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-primary"
                href="#"
                style={{
                  transition: 'background-color 0.3s, color 0.3s',
                  backgroundColor: 'transparent',
                  color: 'black',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'black';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = 'black';
                }}
              >
                Start Free Trial
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
