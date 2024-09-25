import React from 'react';
import menuIcon from '../assets/react.svg';
import SheetBtm from './SheetBtm';
import { useEffect, useState } from 'react';
import "./styles/toolbar.css"

const Toolbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="Nav1 relative rounded-b-2xl bg-MybackColor border-gray-200 g-gray-900">
        <div className="div1 max-w-screen-xl flex flex-wrap items-center
        justify-between mx-auto pt-2 pb-2 pl-4 pr-4">
          <a href="/" className="flex items-center  rtl:space-x-reverse">
            <img
              src="https://i.postimg.cc/HL3MNJCb/20240923-021951.png"
              className="self-center  pl-0 h-12 object-cover object-center w-auto
            pb-1" alt="AnimeFire Logo" />
            <span className="TollBarTitle self-center  text-3xl font-extrabold  whitespace-nowrap text-white">
              Ani<strong className="Fire text-2.2xl font-250 text-piramy">fire</strong>
            </span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="tollbarBtn inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-white hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => setOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <SheetBtm isOpen={isOpen} setOpen={setOpen} />
      </div>
    </nav >
    </>
  );
}

export default Toolbar;