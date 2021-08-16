import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <img alt="logo" src={logo} />
            <h2>Hoạt hình 3D</h2>
          </div>
          <div className="header-right">
            <ul className="list-menu">
              <li className="menu-item">
                <Link to="login">Category</Link>
              </li>
              <li className="menu-item">
                <Link to="login">About</Link>
              </li>
              <li className="menu-item">
                <Link to="login">Contact</Link>
              </li>
              <li className="menu-item">
                <Link to="login">SignIn</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
