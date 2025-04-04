'use client';
import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { handleLogin, handleRegister } from './actions';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [retypePassword, setRetypePassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const router = useRouter();

  const submitFormLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await handleLogin(email, password);

    if (result?.success) {
      router.push('/');
    } else {
      alert('Login failed!');
    }
  };

  const submitFormRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await handleRegister(name, email, password, retypePassword);

    if (result?.success) {
      router.push('/');
    } else {
      alert('Login failed!');
    }
  };

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
        <form
          action=""
          className="flex flex-col gap-8"
          onSubmit={isRegister ? submitFormRegister : submitFormLogin}
        >
          {isRegister ? (
            <>
              <TextField
                id="outlined-required"
                label="Name"
                placeholder="ex: Kevin"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="outlined-required"
                label="Email"
                placeholder="ex: example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-required"
                label="Password"
                placeholder="ex: 123456789"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                id="outlined-required"
                label="Retype Password"
                placeholder="ex: 123456789"
                type="password"
                onChange={(e) => setRetypePassword(e.target.value)}
              />
            </>
          ) : (
            <>
              <TextField
                id="outlined-required"
                label="Email"
                placeholder="ex: example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-required"
                label="Password"
                placeholder="ex: 123456789"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ fontSize: 16 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
}
