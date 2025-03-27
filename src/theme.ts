'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette:{
    primary:{
      main: '#2563ea'
    }
  },
  typography: {
    fontFamily: 'var(--font-poppins)',
  },
});

export default theme;
