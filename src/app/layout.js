"use client"
import Footer from './Components/footer'
import Header from './Components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const routeRegex = /^([^?#]+)/;
  const noNav = [
    "/dashboard",
    "/categories",
    "/customers",
    "/products",
    "/request",
    "/sellers",
    "/subCategories",
    "/signin",
   
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
      {noNav.includes(pathname.match(routeRegex)[1]) ? null : (
           <Header/>
      )}
     
        {children}
        {noNav.includes(pathname.match(routeRegex)[1]) ? null : (
            <Footer/>
      )}
      
        
        </body>
    </html>
  )
}