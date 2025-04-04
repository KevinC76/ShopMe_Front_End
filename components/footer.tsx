import Link from 'next/link';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

function Footer() {
  return (
    <div className="flex flex-col justify-between items-center px-16 py-3 bg-[#111828] text-white">
      <div className="flex flex-col items-center justify-center gap-12">
        {/* Above Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          <div className="flex flex-col gap-4 md:gap-2 sm:items-center md:items-start">
            <h1 className="font-bold text-3xl md:text-xl lg:text-2xl text-center">
              ShopeMe
            </h1>
            <p className="opacity-50 text-center text-xl sm:text-sm md:text-lg font-light md:text-start">
              Your destination for minimalist design products.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-2 sm:items-center md:items-start">
            <h1 className="font-bold text-3xl md:text-xl lg:text-2xl text-center">
              Quick Links
            </h1>
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                className="opacity-50 text-center text-xl sm:text-sm md:text-lg font-light md:text-start"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="opacity-50 text-center text-xl sm:text-sm md:text-lg font-light md:text-start"
              >
                products
              </Link>
              <Link
                href="/about"
                className="opacity-50 text-center text-xl sm:text-sm md:text-lg font-light md:text-start"
              >
                About
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-2 sm:items-center md:items-start">
            <h1 className="font-bold text-3xl md:text-xl lg:text-2xl text-center">
              Contact
            </h1>
            <div className="flex flex-col gap-1">
              <p className="opacity-50 text-center text-xl sm:text-sm lg:text-lg font-light md:text-start">
                Email: <br />
                ShopMe@gmail.com
              </p>
              <p className="opacity-50 text-center text-xl sm:text-sm lg:text-lg font-light md:text-start">
                Phone: <br />
                (555) 123-456789
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-2 sm:items-center md:items-start">
            <h1 className="font-bold text-3xl md:text-xl lg:text-2xl text-center">
              Follow Us
            </h1>
            <div className="flex gap-6 md:gap-2 items-center justify-center">
              <InstagramIcon
                sx={{ opacity: 0.5, fontSize: { xs: 36, lg: 40 } }}
              />
              <FacebookIcon
                sx={{ opacity: 0.5, fontSize: { xs: 36, lg: 40 } }}
              />
              <XIcon sx={{ opacity: 0.5, fontSize: { xs: 36, lg: 40 } }} />
            </div>
          </div>
        </div>
        {/* Bottom Content */}
        <div>
          <p> © 2025 ShopMe. All rights reserved </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
