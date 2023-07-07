'use client'

import './globals.css'

import AuthProvider from './components/auth/AuthProvider'
import { SessionProvider } from 'next-auth/react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <html lang='en'>
        <body>
          <AuthProvider>{children}</AuthProvider>
        </body>
      </html>
    </SessionProvider>
  )
}

export default RootLayout
