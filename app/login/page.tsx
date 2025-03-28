'use client';
import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function Login() {
  const [isRegister, setIsRegister] = useState<boolean>(false);

  return (
    <div className="flex-1 flex justify-center items-center p-8">
      {/* container */}
      <Box className="w-[500px] h-[500px] bg-white flex flex-col p-8 justify-center rounded-xl shadow-md">
        {/* Title */}
      <div className="grid grid-cols-2 w-full pb-8">
          <h1
            className={`text-center p-2 text-xl  ${
              isRegister ? '' : 'text-[#2563ea] border-b-3'
            }`}
            onClick={() => setIsRegister(false)}
          >
            Login
          </h1>
          <h1
            className={`text-center p-2 text-xl  ${
              isRegister ? 'text-[#2563ea] border-b-3' : ''
            }`}
            onClick={() => setIsRegister(true)}
          >
            Register
          </h1>
        </div>

        {/* form */}
        <form action="" className="flex flex-col gap-8">
          {isRegister ? (
            <>
              <TextField
                id="outlined-required"
                label="Email"
                placeholder="ex: example@gmail.com"
              />
              <TextField
                id="outlined-required"
                label="Password"
                placeholder="ex: 123456789"
                type="password"
              />
              <TextField
                id="outlined-required"
                label="Retype Password"
                placeholder="ex: 123456789"
                type="password"
              />
            </>
          ) : (
            <>
              <TextField
                id="outlined-required"
                label="Email"
                placeholder="ex: example@gmail.com"
              />
              <TextField
                id="outlined-required"
                label="Password"
                placeholder="ex: 123456789"
                type="password"
              />
            </>
          )}

          <Button type="submit" variant="contained" color="primary" sx={{fontSize: 16}}>
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
}
