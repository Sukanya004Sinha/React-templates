import React from 'react';
import Logo from "../movies.png";

function NavBar() {
  return (
    <div className=" border
    flex items-center
    space-x-8
    pl-4 py-4
    
    ">
    <img src = {Logo} 
    className ="w-[50px]"
    />

    <h3 className='font-bold 
    text-xl
    text-blue-400'>Movies
    </h3>
    <h3 className='font-bold text-xl
    text-blue-400 
    '>
     Favourites</h3>
    </div>
  )
}

export default NavBar