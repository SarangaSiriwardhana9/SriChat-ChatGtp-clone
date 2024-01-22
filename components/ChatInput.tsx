
"use client";
import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react"
import toast from "react-hot-toast";
import ModelSelection from "./ModelSelection";
import useSWR from "swr";



type Props = {
    chatId:string
    }


function ChatInput({chatId}:Props) {
    const [prompt, setPrompt] = useState("");
    const {data:session} = useSession();

    const { data: model} = useSWR("model", {
      fallbackData: "text-davinci-003",
    });



    const sendmessage = async (e : FormEvent<HTMLFormElement> )=>{
            e.preventDefault();
            if (!prompt) return;

            const input = prompt.trim();
            setPrompt("");
            const message: Message ={
                text:input,
                createdAt : serverTimestamp(),
                user:{
                    id: session?.user?.email!,
                    name:session?.user?.name!,
                    avatar:session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}` ,
                }
            }
            await addDoc(
              collection(
                db,
                'users',
                session?.user?.email!,
                'chats',
                chatId,
                'messages'
                ),
                message);

            //tost notification to say loading
            const notification = toast.loading('Sri chat is thinking...')

            await fetch("/api/askQuestion", {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt: input,
                    chatId,
                    model,
                    session
                })
            }).then((res) => {
                //tost notification to show success
                toast.success('sri chat has responded',{id:notification})
            })
    }

  return (
    <div>  <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm ">
    <form 
    onSubmit={sendmessage}
    className="p-5 flex space-x-5" >
      <input 
      className="flex-1 bg-transparent focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300"
      disabled={!session}
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      type="text" 
      placeholder="Type a message here ...."
      
      />

      <button type="submit"
      disabled={ !prompt || !session}
      className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed "
      >
        <PaperAirplaneIcon className="h-6 w-6 -rotate-45" />
      </button>
    </form>

    <div className="md:hidden">
      {/* ModelSelection */}
      <ModelSelection/>
    </div>

  </div></div>
  )
}

export default ChatInput