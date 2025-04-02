import { Button, TextField } from '@mui/material';
import React from 'react';

type dialogFormType = {
  isOpen: boolean;
  name?: string;
  email?: string;
  address?: string;
  handleClose: () => void;
};

function Dialog_form({ isOpen, handleClose }: dialogFormType) {
  if (isOpen) {
    return (
      <div className="fixed inset-0 bg-black/25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[400px] sm:w-[500px]  bg-white flex flex-col p-8 gap-4">
          <h1 className='text-2xl font-bold text-[#2563ea]'>Add Products</h1>
          <div className='flex flex-col gap-4'>
            <TextField label="Products Name" />
            <TextField label="Products Description" />
            <TextField label="Price" />
          </div>
          <div className='flex gap-2 justify-end'>
            <Button variant="contained">Save</Button>
            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          </div>
        </div>
      </div>
    );
  } else {
    handleClose();
  }
}

export default Dialog_form;
