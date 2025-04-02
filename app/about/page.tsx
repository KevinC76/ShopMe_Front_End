import React from 'react';
import InventoryIcon from '@mui/icons-material/Inventory';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';

function About_Page() {
  return (
    <div className="flex-1">
      <div className="p-16 flex flex-col items-center justify-center gap-16">
        <h1 className="font-bold text-6xl text-[#2563ea] text-center sm:text-start">About ShopMe</h1>
        <p className="text-xl text-center sm:w-[75%]">
          Welcome to ShopMe, your go-to platform for a seamless and enjoyable
          shopping experience! At ShopMe, we believe that shopping should be
          easy, convenient, and tailored to your needs. Our platform is designed
          to provide a wide range of products, secure transactions, and a
          user-friendly interface that makes your shopping journey effortless.
        </p>
      </div>
      <div className="px-16 pb-16 flex flex-col items-center justify-center gap-8 sm:gap-16">
        <h1 className="font-bold text-6xl text-[#2563ea] text-center sm:text-start">Why ShopMe?</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-16">
          <div className="flex flex-col w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] bg-white/80 rounded-xl items-center justify-center shadow-md gap-4 lg:gap-8">
            <InventoryIcon
              sx={{ fontSize: { sm: 72, lg: 126 }, color: '#2563ea' }}
            />
            <p className="text-xl lg:text-2xl text-[#2563ea] text-center">
              Diverse Product Selection
            </p>
          </div>

          <div className="flex flex-col w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] bg-[#2563ea] rounded-xl items-center justify-center shadow-md gap-4 lg:gap-8">
            <LockIcon
              sx={{ fontSize: { sm: 72, lg: 126 }, color: '#ffffff' }}
            />
            <p className="text-xl lg:text-2xl text-white text-center">
              {' '}
              Product Selection
            </p>
          </div>

          <div className="flex flex-col w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] bg-white/80 rounded-xl items-center justify-center shadow-md gap-4 lg:gap-8">
            <PersonIcon
              sx={{ fontSize: { sm: 72, lg: 126 }, color: '#2563ea' }}
            />
            <p className="text-xl lg:text-2xl text-[#2563ea] text-center">
              Diverse Product Selection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_Page;
