'use client';

import ProductsCard from '@/components/card';
import Dialog_form from '@/components/dialog_form';
import { Button } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { getUserInformation } from './action';

function Profile_Page() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getUserInformation();
      setUserData(data);
    };

    fetch();
  }, []);

  console.log(userData);

  return (
    <>
      <div className="flex-1 p-8 sm:p-16 flex flex-col gap-8">
        <div>
          {/* top information */}
          <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start sm:flex-row gap-4 sm:gap-8">
            <Image
              width={200}
              height={200}
              alt="Profile Image"
              src="/30.png"
              className="rounded-full md:w-[250px] md:h-[250px]"
            />
            <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center sm:justify-start sm:items-start">
              <h1 className="text-2xl font-bold">{userData.name}</h1>
              <p>{userData.email}</p>
              <p>{userData.address}</p>
              <div></div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <div>
            <Button variant="contained" onClick={() => setIsOpen(true)}>
              add products
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[...Array(5)].map((_, index) => (
              <ProductsCard
                key={index}
                imageUrl="/hero_banner.jpg"
                productDescription="Tset"
                productName={`Test Name ${index + 1}`}
                price={1000000}
              />
            ))}
          </div>
        </div>
      </div>

      <Dialog_form isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </>
  );
}

export default Profile_Page;
