'use client'

import './globals.css'

import AuthProvider from '../components/auth/AuthProvider'
import { NavBar } from '@/components/navigation/NavBar'
import { SessionProvider } from 'next-auth/react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <html lang='fr'>
        <body className='flex flex-row bg-[#3B4252]'>
          <NavBar />
          <AuthProvider>{children}</AuthProvider>
        </body>
      </html>
    </SessionProvider>
  )
}

export default RootLayout
