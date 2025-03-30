import { Button } from '@mui/material';
import React from 'react';

type Menu_NavbarProps = {
  openMenu: boolean;
  login: boolean;
};

function Menu_Navbar({ openMenu, login }: Menu_NavbarProps) {
  return (
    <div
      className={`
        w-full bg-white fixed top-0 left-0 flex flex-col items-center shadow-xl p-4
        transform transition-all duration-300 ease-in-out
        ${
          openMenu
            ? 'translate-y-0 opacity-100 mt-18'
            : 'translate-y-[-100%] opacity-0 pointer-events-none'
        }
      `}
    >
      <div className="bg-white w-full text-center p-3 transition-all duration-300 ease-in-out hover:bg-gray-100">
        <h1>Search</h1>
      </div>
      <div className="bg-white w-full text-center p-3 transition-all duration-300 ease-in-out hover:bg-gray-100">
        <h1>Home</h1>
      </div>
      <div className="bg-white w-full text-center p-3 transition-all duration-300 ease-in-out hover:bg-gray-100">
        <h1>Products</h1>
      </div>
      <div className="bg-white w-full text-center p-3 transition-all duration-300 ease-in-out hover:bg-gray-100">
        <h1>About</h1>
      </div>
      {login ? (
        <div className="bg-white w-full text-center p-3 transition-all duration-300 ease-in-out hover:bg-gray-100">
          <h1>Profile</h1>
        </div>
      ) : (
        <Button variant="contained" href="/login">
          Login
        </Button>
      )}
    </div>
  );
}

export default Menu_Navbar;
