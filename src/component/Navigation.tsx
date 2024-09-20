import { NavBarStyled } from './styles/Navigation.style.js';
import React from 'react'

const Navigation = () => {
  return (
    <NavBarStyled>
      <hr className="border-gray-700 rounded-b-md mb-3 "></hr>
      <h1 className="title">Ani<strong>Fire</strong></h1>
      <p className="text-gray-100">eiusmod sint irure qui quis proident eiusmod voluptate proident in aute esse consectetur nisi fugiat tempor cupidatat sint sunt esse sunt mollit id nulla cupidatat in tempor magna culpa ad</p>
      <hr className="border-gray-700 rounded-b-md m-2 "></hr>
      <ul className="list">
        <li>DMCA</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
    </NavBarStyled>
  )
}

export default Navigation