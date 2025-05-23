'use client';

import { Button } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { getUserInformation, logOut } from './action';

function Profile_Page() {
  const [userData, setUserData] = useState<any>({});

  useEffect(() => {
    const fetch = async () => {
      const data = await getUserInformation();
      setUserData(data);
    };

    fetch();
  }, []);

  const handleLogOut = async () => {
    await logOut();
    window.location.href = '/login';
  };

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
        <Button variant="contained" color="error" onClick={handleLogOut}>
          Log Out
        </Button>
      </div>
    </>
  );
}

export default Profile_Page;
