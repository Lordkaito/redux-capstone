import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { BsFillGearFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import { useLocation } from 'react-router';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar-container">
      <div>
        <div>
          <ul className="navbar">
            <li>
              {location.pathname !== '/' && <Link to="/" className="home"> <AiOutlineLeft /> </Link>
              }
            </li>
            <li data-testid="tab-name">
              Current Tab
            </li>
            <li>
              <BsFillGearFill className="settings" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;