
import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <main>
        <div className='w-screen h-screen  flex justify-center items-center'>
        <div className='flex flex-col justify-evenly items-center gap-4'>
            <img src='/logo.png' height={500} width = {500}/>
             <button className='btn' onClick={()=>signIn(undefined,{ callbackUrl: '/' })}>Sign in or Login</button>
        </div>
        </div>
      </main>
    </>
  )
}
