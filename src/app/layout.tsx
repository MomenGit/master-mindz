import type { Metadata } from 'next';
import { ThemeProvider } from '@mui/material';
import theme from '@/utils/theme';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | MasterMindz',
    default: 'MasterMindz',
  },
  description: 'MasterMindz',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
