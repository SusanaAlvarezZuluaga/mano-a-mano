import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './style.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <Link to="#" className="menu-cart">
            <FiIcons.FiShoppingCart onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-cart"></Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <img className="miniature" alt="item" src={item.img}></img>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div>
            <button
              className="checkout-btn"
              onClick={() => navigate('/my-cart')}
            >
              CHECKOUT
            </button>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
