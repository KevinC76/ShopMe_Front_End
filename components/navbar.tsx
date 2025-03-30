'use client';

import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Menu_Navbar from './menu_navbar';

const Navbar = () => {
  const [login, setLogin] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center px-8 md:px-16 py-3 bg-white z-10 shadow-md">
      {/* Title */}
      <Box>
        <Link href="/">
          <h1 className="title">ShopME</h1>
        </Link>
      </Box>

      {/* Right Item */}
      <div className="hidden lg:inline ">
        <Box sx={{ display: 'flex', gap: 4 }}>
          {/* Navigation */}
          <Box
            sx={{
              display: 'flex',
              gap: 4,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Link href="">Home</Link>
            <Link href="">Products</Link>
            <Link href="">About</Link>
          </Box>
          {/* Icons */}
          <Box>
            <ul className="flex gap-4 items-center justify-center navContent">
              <li onClick={() => setOpenSearch(!openSearch)}>
                <SearchIcon />
              </li>
              {login ? (
                <li>
                  <AccountCircleIcon />
                </li>
              ) : (
                <Button variant="contained" href="/login">
                  Login
                </Button>
              )}
            </ul>
          </Box>
        </Box>
      </div>
      {/* burger bar */}
      <div className="lg:hidden" onClick={() => setOpenMenu(!openMenu)}>
        <Box>
          <MenuIcon sx={{ fontSize: 32 }} />
        </Box>
      </div>

      
      <Menu_Navbar openMenu={openMenu} login={login}/>
    </div>
  );
};

export default Navbar;
