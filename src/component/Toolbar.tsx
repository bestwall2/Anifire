import React from 'react';
import menuIcon from '../assets/react.svg';
import { useEffect, useState } from 'react';
import "./styles/toolbar.css"

const Toolbar = () => {
  const [showMenu, setShowMenu] = useState(false);  // boolean state for menu

  const HideMenu = () => {
    setShowMenu(!showMenu); // toggle menu visibility
  };

  return (
    <>
      <nav className="Nav1 relative rounded-b-2xl bg-MybackColor border-gray-200 g-gray-900">
        <div className="div1 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-2 pb-2 pl-4 pr-4">
          <a href="/" className="flex items-center space-x-0 rtl:space-x-reverse">
            <img
              src=".../assets"
              className="self-center pl-1 h-12 object-cover object-center w-auto
            pb-1" alt="AnimeFire Logo" />
            <span className="self-center  text-3xl font-extrabold  whitespace-nowrap text-white">
              Ani<strong className="Fire text-2.2xl font-250 text-piramy">fire</strong>
            </span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="tollbarBtn inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-white hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={HideMenu}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div className={`${showMenu ? '' : 'hidden'} transition-transform  duration-500 ease-in-out w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-MybackColor md:border-solid md:border-1 md:border-gray-100 md:text-center md:p-2 border-gray-700">
              <li>
                <a href="/" className="block py-2 px-3 bg-blue-700 rounded md:bg-blue-600 md:p-1 text-white md:text-gray-100" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded md:border-0 md:p-1 text-white md:hover:text-blue-600 md:hover:bg-gray-700 hover:bg-gray-700 hover:text-white md:text-center md:align-middle md:pr-2 md:pl-2 md:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white rounded md:border-0 md:p-1 md:hover:text-blue-600 md:hover:bg-gray-700 md:pr-2 md:pl-2 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Toolbar;