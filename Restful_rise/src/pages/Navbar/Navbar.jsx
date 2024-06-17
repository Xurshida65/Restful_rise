import navLogo from "../../assets/img/logo.png"
import { HiMenuAlt3 } from "react-icons/hi";
import "./navbar.css"
import {NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header_nav">
            <img src={navLogo} alt="Nav logo" className="nav_logo" />
            <div className="nav_itemsWrapper">
            <ul className="nav_menu">
                <li className="nav_menuList"><NavLink to="/" className="nav_listLink">Home</NavLink></li>
                <li className="nav_menuList"><NavLink to="/about" className="nav_listLink">About Us</NavLink></li>
                <li className="nav_menuList"><NavLink to="/contact" className="nav_listLink">Contact</NavLink></li>
            </ul>
            <select name="" id="" className="nav_lang">
                <option value="1">Oʻzbekcha</option>
                <option value="2">Русский</option>
                <option value="3">English</option>
            </select>
            </div>
            <div className="nav_burger">
                <HiMenuAlt3 size={35} color="#9C1628"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

