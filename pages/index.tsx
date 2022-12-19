import Head from 'next/head'
import Link from 'next/link'
import Profile from '../components/Profile'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello World!</h1>
        <p>This will the great</p>
        <p>This is for the features</p>
        <h1>Auth0 test</h1>
        <Link href="/api/auth/login" className='border-2 border-black'>Login</Link>
        <Link href="/api/auth/logout" className='border-2 border-black'>Logout</Link>
        <Profile />
      </main>

      <footer >
        
      </footer>
    </div>
  )
}
