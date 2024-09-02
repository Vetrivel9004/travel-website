import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <header class="header scroll-header" id="header">
        <nav class="nav container">
          <a href="#" class="nav__logo">
            Travel
          </a>

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li class="nav__item">
              <a href="#Home" class="nav__link">
                Home</a>
               </li>
              <li class="nav__item">
                <a href="#About" class="nav__link">
                  About
                </a>
              </li>
              <li class="nav__item">
                <a href="#discover" class="nav__link">
                  Discover
                </a>
              </li>
              <li class="nav__item">
                <a href="#place" class="nav__link">
                  Places
                </a>
              </li>
            </ul>

            <div class="nav__dark">
              {/* <!-- Theme change button --> */}
              <span class="change-theme-name">Dark mode</span>
              <i class="ri-moon-line change-theme" id="theme-button">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#666666">
                  <path d="M479.96-144Q340-144 242-242t-98-238q0-140 97.93-238t237.83-98q13.06 0 25.65 1 12.59 1 25.59 3-39 29-62 72t-23 92q0 85 58.5 143.5T648-446q49 0 92-23t72-62q2 13 3 25.59t1 25.65q0 139.9-98.04 237.83t-238 97.93Zm.04-72q82 0 148.78-47.07Q695.55-310.15 727-386q-20 5-39.67 8.5Q667.67-374 648-374q-113.86 0-193.93-80.07Q374-534.14 374-648q0-19.67 3.5-39.33Q381-707 386-727q-75.85 31.45-122.93 98.22Q216-562 216-480q0 110 77 187t187 77Zm-14-250Z" />
                </svg> */}
              </i>
            </div>

            <i class="ri-close-line nav__close" id="nav-close"></i>
          </div>

          <div class="nav__toggle" id="nav-toggle">
            <i class="ri-function-line"></i>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
