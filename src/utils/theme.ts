'use client';
import { Roboto, Work_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
export const work_sans = Work_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#6750A4',
      dark: '#21005D',
    },
    secondary: {
      main: '#ffa500',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: work_sans.style.fontFamily,
  },
});

export default theme;
