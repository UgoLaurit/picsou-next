'use client'

import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession({
    required: true,
  })

  if (status === 'loading') {
    return <div>Loading</div>
  }
  if (session) {
    return <div>Session!</div>
  }
}
