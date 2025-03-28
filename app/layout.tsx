import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Footer from '@/components/footer';
import { ThemeProvider } from '@mui/material';
import theme from '@/src/theme';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'ShopMe',
  description: 'a Website for selling products with trust',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={`flex flex-col min-h-screen w-full text-[#111828]`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
