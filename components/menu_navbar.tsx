import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

type Menu_NavbarProps = {
  openMenu: boolean;
  login: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function Menu_Navbar({ openMenu, login, setOpenMenu }: Menu_NavbarProps) {
  // add use router to navigate

  const navigate = (address: string) => {
    switch (address) {
      case 'Home':
        break;
    }
  };

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
      <div
        className="bg-white w-full text-center p-3 transition-all duration-300 ease-in-out hover:bg-gray-100"
        onClick={() => navigate('Home')}
      >
        <Link
          href="/"
          className="flex items-center justify-center"
          onClick={() => setOpenMenu(!openMenu)}
        >
          Home
        </Link>
      </div>
      <div className="bg-white w-full text-center p-3 transition-all duration-300 ease-in-out hover:bg-gray-100">
        <Link
          href="/products"
          className="flex items-center justify-center"
          onClick={() => setOpenMenu(!openMenu)}
        >
          Products
        </Link>
      </div>
      <div className="bg-white w-full text-center p-3 transition-all duration-300 ease-in-out hover:bg-gray-100">
        <Link
          href="/"
          className="flex items-center justify-center"
          onClick={() => setOpenMenu(!openMenu)}
        >
          About
        </Link>
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
