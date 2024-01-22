'use client'
import  Image  from 'next/image'
import Ai from '../public/Ai.png'
import { signIn } from 'next-auth/react'
function Login() {
  return (
    <div className='bg-[#11A37F] h-screen  items-center justify-center text-center flex flex-col'>
      <Image
        src={Ai}
        width={100}
        height={100}
        alt="Login Image"
      />

      <button onClick={()=>signIn('google')} className="text-white font-bold text-3xl animate-pulse">Sign in to use Sri Chat</button>
    </div>
  )
}

export default Login