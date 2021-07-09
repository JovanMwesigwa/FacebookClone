import Head from 'next/head'
import Header from '../components/Header'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  const [ session, loading ] = useSession()

  return (
    <div >
      <Head>
        <title>Facebook</title>
      </Head>
      {/* Header */}
      <Header />

      {!session && <>
      Not signed in <br/>
      <button onClick={() => signIn()}>Sign in</button>
    </>}
      {session && <>
        Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>}

      <main>
        {/* Chat */}
        {/* Feed */}
        {/* Contacts widget */}
      </main>
    </div>
  )
}
