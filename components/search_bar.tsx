'use client';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';

function Search_Bar() {
  const [search, setSearch] = useState<string>('');

  return (
    <TextField
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
      sx={{ width: { xs: '100%', sm: '80%', lg: '50%' } }}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Search_Bar;
