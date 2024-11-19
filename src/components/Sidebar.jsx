import React from 'react';
import { FaTachometerAlt, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">
              <FaTachometerAlt className="icon" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/users">
              <FaUsers className="icon" /> Users
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FaCog className="icon" /> Settings
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar-down">
        <Link to="/logout" className="logout">
          <FaSignOutAlt className="icon" /> Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
