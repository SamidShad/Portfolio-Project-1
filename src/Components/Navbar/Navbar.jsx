import React, { useRef } from "react";
// IMPORT NAVIGATION LOGO ->>
import Navlogo from "../../assets/logos/navlogo.png";
// IMPORT MENU ICON ->>
import { FaBars as MenuIcon } from "react-icons/fa";
// IMPORT HASHLINK FOR LINKS ->>
import { HashLink } from "react-router-hash-link";

function Navbar() {
  // MENU NAV HOOK FOR GET MENU ICON ->>
  const menuNav = useRef();

  // FUNCTION FOR MENU OPEN CLOSE LOGIC ->>
  function openNavMenu() {
    menuNav.current.classList.toggle("menu-nav-active");
  }

  return (
    <>
      {/* NAVIGATION ->> */}
      <nav className="navbar">
        <HashLink to="/#headphones">
          <img className="nav-logo" src={Navlogo} alt="Brand-Logo" />
        </HashLink>
        <ul>
          <li onClick={openNavMenu}>
            <HashLink to="/#headphones">Headphones</HashLink>
          </li>
          <li onClick={openNavMenu}>
            <HashLink to="/#speakers">Speakers</HashLink>
          </li>
          <li onClick={openNavMenu}>
            <HashLink to="/#audio_sunglasses"> Audio sunglasses</HashLink>
          </li>
          <li onClick={openNavMenu}>
            <HashLink to="/#support">Support</HashLink>
          </li>
        </ul>
        <MenuIcon className="menu-icon" onClick={openNavMenu} />
      </nav>
      {/* MENU NAV FOR PHONES ->> */}
      <div className="menu-nav" ref={menuNav}>
        <div className="menu-nav-side-1">
          <ul>
            <li onClick={openNavMenu}>
              <HashLink to="/#headphones">Headphones</HashLink>
            </li>
            <li onClick={openNavMenu}>
              <HashLink to="/#speakers">Speakers</HashLink>
            </li>
            <li onClick={openNavMenu}>
              <HashLink to="/#audio_sunglasses"> Audio sunglasses</HashLink>
            </li>
            <li onClick={openNavMenu}>
              <HashLink to="/#support">Support</HashLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
