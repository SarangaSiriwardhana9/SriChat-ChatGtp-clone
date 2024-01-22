"use client";
import NewChat from './NewChat'
import { useSession,signOut } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'

import ChatRow from './ChatRow';
import { collection, orderBy, query } from "firebase/firestore";
import ModelSelection from './ModelSelection';


const SideBar = () => {
    const {data:session} = useSession();

    const [chats,loading,error] = useCollection(
      session && query (collection(db,'users',session.user?.email!,'chats'),

      orderBy("createdAt","asc")
      )
    )
   
  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
            {/*  new Chat */}
            <NewChat/>
            <div className='hidden sm:inline'>
                {/* modal selection */}
                <ModelSelection/>

            </div>
            <div className='flex flex-col space-y-2 my-2'>

              {loading &&(
                <div className='animate-pulse text-center text-white'>
                  <p>Loading...</p>
                </div>
              )}

           
            {/* map through the  chat rows */}
            {chats?.docs.map(chat=>(
              <ChatRow key={chat.id} id={chat.id}/>
            )

            )}
           </div>
        </div>
        {session && (
            <img src={session.user?.image!} alt="profile picture" 
            className='rounded-full h-12 w-12 cursor-pointer mx-auto mb-2'
            onClick={()=>signOut()}
            />
           ) }
    </div>
  )
}

export default SideBar