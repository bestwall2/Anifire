
import React, { useEffect, useState } from 'react';

const Card = (props) => {

  const CardCode = (
    <div
      className="m-0  border rounded-lg  shadow-lg bg-gray-800 border-gray-700 w-auto h-auto sm:w-full sm:h-80 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
      onClick={props.onClick}
    >
      <div className="w-full  min-h-fit flex">
        <a href="#">
          <img
            className={`rounded-lg  w-full  object-cover object-center h-full ${props.imgStyle} `}
            src={props.imgUrl}
            alt={props.title}
            style={props.FStyle}
          />
        </a>
      </div>
      <div className="h3 align-middle content-center text-center text-xs  line-clamp-2 text-gray-100 p-1 h-fit  pb-0 ">
        <p>{props.title}</p>
      </div>
    </div>
  );
  return (CardCode);
};

export default Card;

