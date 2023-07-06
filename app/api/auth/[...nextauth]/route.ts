import GithubProvider from 'next-auth/providers/github'
import NextAuth from 'next-auth'

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: String(process.env.GITHUB_ID),
      clientSecret: String(process.env.GITHUB_SECRET),
    }),
  ],
})

export { handler as GET, handler as POST }
