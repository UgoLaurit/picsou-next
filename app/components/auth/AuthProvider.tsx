'use client'

import { useSession } from 'next-auth/react'

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession({
    required: true,
  })

  return (
    <>
      {status === 'loading' ? (
        <div>Loading</div>
      ) : !session ? (
        <div>Not auth</div>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

export default AuthProvider
