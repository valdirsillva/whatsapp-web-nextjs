"use client"

import Image from "next/image";
import React, { useState, useEffect } from "react"

import { ListFilter, MessageCircleCode, MessageSquarePlus, MoreVertical, Orbit, Send, Users2 } from "lucide-react";

import user from "../../public/user.png"
import esmeralda from "../../public/esmeralda.jpg"
import diogo from "../../public/diogo.jpg"
import amanda from "../../public/amanda.jpg"
import frederico from "../../public/frederico.jpg"
import djMarchimello from "../../public/dj-marshimello.jpg"
import agatha from "../../public/agathaa.jpg"
import alice from "../../public/alice.jpg"
import brenda from "../../public/brenda.jpg"

import { socket } from "../socket/"
import { MessageReceiver } from "@/components/message-receiver"
import { MessageAuthor } from "@/components/message-author"

export default function Home() {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [fooEvents, setFooEvents] = useState<string[]>([])
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState()

  useEffect(() => {
    function onConnect() {
      setIsConnected(true)
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value: string) {
      setFooEvents((previous) => [...previous, value])
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('foo', onFooEvent)

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    }
  }, [messages])

  const onSubmit = () => {
    // e.preventDefault()
    socket.emit('new message', { 
      username: '~Jhon Doe',
      phoneNumber: '+55 97760-9090',
      message
    })
    onMessages()
  }

  const onMessages = () => {
    socket.on('response', function(data) {
      setMessages(data)
    })
  }

  return (
    <section >
      <header>
        <div className="w-full flex flex-rowh-[60px] bg-[#202c33]">
          <div className="w-[469px]  flex items-center ">
            <div className="w-[196px] h-[59px] px-4 py-2 bg-[#202c33]">
              <Image src={user} className="w-[40px]" alt="Imagem de perfil do usuário" />
            </div>
            <div className="w-[240px] flex flex-row gap-5 ">
              <div className="p-2"><Users2 size={20} /></div>
              <div className="p-2"><Orbit size={20} /></div>
              <div className="p-2"><MessageCircleCode size={20} /></div>
              <div className="p-2"><MessageSquarePlus size={20} /></div>
              <div className="p-2"><MoreVertical size={20} /></div>
            </div>
          </div>

          {/* Dados do usuario logado */}
          <div className="w-full flex px-6">
            <div className="flex flex-row items-center px-4 gap-4">
              <Image src={user} className="w-[40px] ml-[10px]" alt="Imagem de perfil do usuário" />
              <div className="flex flex-col">
                <h2>Valdir</h2>
                <span className="font-light text-[.7rem] text-gray-400">esteve online hoje, às 14:30</span>
              </div>

              {/* <div className="w-full flex flex-row justify-end">
                <div className="p-2"><MoreVertical size={20} /></div>
              </div> */}
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-row">
        {/* lista de usuarios */}
        <div className="w-[469px] h-[676px] bg-[#111B21] border-r border-solid border-[#3e505a]">
          <div className="w-[469px] h-[49px] flex flex-row items-center bg-[#111B21] px-3">
            <input type="search"
              className="w-[414px] h-[35px] rounded-md bg-[#202C33] px-16 text-[13px] outline-none"
              placeholder="Pesquisar ou iniciar uma nova conversa"
            />
            <span className="ml-3">  <ListFilter size={20} /></span>
          </div>

          {/* lista de usuarios do app  */}
          <div className="w-full">
            <ul className="w-full h-[600px] flex flex-col py-2  overflow-y-scroll">
              <li className="flex items-center h-[72px] hover:bg-[#2a3942]">
                <div className="flex items-center py-3 px-3 gap-4 ">
                  <Image src={brenda} className="w-[49px] rounded-[50%]" alt="Imagem de perfil do usuário" />
                  <div className="w-full flex flex-col border-b border-solid border-[#3e505a] py-2">
                    <div className="w-[380px] flex flex-row justify-between">
                      <h2>Brenda</h2>
                      <time className="font-light text-[.7rem] text-gray-400 mt-1">13:25</time>
                    </div>
                    <span className="font-light text-[.7rem] text-gray-400 mt-3">Oie, boa tarde.</span>
                  </div>
                </div>
              </li>

              <li className="flex items-center h-[72px] hover:bg-[#2a3942]">
                <div className="flex items-center py-3 px-3 gap-4 ">
                  <Image src={esmeralda} className="w-[49px] rounded-[50%]" alt="Imagem de perfil do usuário" />
                  <div className="w-full flex flex-col border-b border-solid border-[#3e505a] py-2">
                    <div className="w-[380px] flex flex-row justify-between">
                      <h2>Esmeralda Gomes</h2>
                      <time className="font-light text-[.7rem] text-gray-400 mt-1">15:45</time>
                    </div>
                    <span className="font-light text-[.7rem] text-gray-400 mt-3">Ok. Assim que tiver um retorno entro em contato.</span>
                  </div>
                </div>
              </li>

              <li className="flex items-center h-[72px] hover:bg-[#2a3942] ">
                <div className="flex items-center py-3 px-3 gap-4 ">
                  <Image src={diogo} className="w-[49px] rounded-[50%]" alt="Imagem de perfil do usuário" />
                  <div className="w-full flex flex-col border-b border-solid border-[#3e505a] py-2">
                    <div className="w-[380px] flex flex-row justify-between">
                      <h2>Diogo</h2>
                      <time className="font-light text-[.7rem] text-gray-400 mt-1">15:45</time>
                    </div>
                    <span className="font-light text-[.7rem] text-gray-400 mt-3">Belezaa.</span>
                  </div>
                </div>
              </li>

              <li className="flex items-center h-[72px] hover:bg-[#2a3942] ">
                <div className="flex items-center py-3 px-3 gap-4 ">
                  <Image src={amanda} className="w-[49px] rounded-[50%]" alt="Imagem de perfil do usuário" />
                  <div className="w-full flex flex-col border-b border-solid border-[#3e505a] py-2">
                    <div className="w-[380px] flex flex-row justify-between">
                      <h2>Amandaaa</h2>
                      <time className="font-light text-[.7rem] text-gray-400 mt-1">15:45</time>
                    </div>
                    <span className="font-light text-[.7rem] text-gray-400 mt-3">Devo chegar em 10min.</span>
                  </div>
                </div>
              </li>

              <li className="flex items-center h-[72px] hover:bg-[#2a3942] ">
                <div className="flex items-center py-3 px-3 gap-4 ">
                  <Image src={frederico} className="w-[49px] rounded-[50%]" alt="Imagem de perfil do usuário" />
                  <div className="w-full flex flex-col border-b border-solid border-[#3e505a] py-2">
                    <div className="w-[380px] flex flex-row justify-between">
                      <h2>Frederico Souza</h2>
                      <time className="font-light text-[.7rem] text-gray-400 mt-1">15:45</time>
                    </div>
                    <span className="font-light text-[.7rem] text-gray-400 mt-3">Bom, eu não sei de verdade o que aconteceu lá...</span>
                  </div>
                </div>
              </li>

              <li className="flex items-center h-[72px] hover:bg-[#2a3942] ">
                <div className="flex items-center py-3 px-3 gap-4 ">
                  <Image src={djMarchimello} className="w-[49px] rounded-[50%]" alt="Imagem de perfil do usuário" />
                  <div className="w-full flex flex-col border-b border-solid border-[#3e505a] py-2">
                    <div className="w-[380px] flex flex-row justify-between">
                      <h2>Marshmello - DJ</h2>
                      <time className="font-light text-[.7rem] text-gray-400 mt-1">15:45</time>
                    </div>
                    <span className="font-light text-[.7rem] text-gray-400 mt-3">Leave Bafore You Love Meee! Ow my Good!!!</span>
                  </div>
                </div>
              </li>

              <li className="flex items-center h-[72px] hover:bg-[#2a3942] ">
                <div className="flex items-center py-3 px-3 gap-4 ">
                  <Image src={agatha} className="w-[49px] rounded-[50%]" alt="Imagem de perfil do usuário" />
                  <div className="w-full flex flex-col border-b border-solid border-[#3e505a] py-2">
                    <div className="w-[380px] flex flex-row justify-between">
                      <h2>Agatha</h2>
                      <time className="font-light text-[.7rem] text-gray-400 mt-1">15:25</time>
                    </div>
                    <span className="font-light text-[.7rem] text-gray-400 mt-3">Bom dia. ;)</span>
                  </div>
                </div>
              </li>

              <li className="flex items-center h-[72px] hover:bg-[#2a3942] ">
                <div className="flex items-center py-3 px-3 gap-4 ">
                  <Image src={alice} className="w-[49px] rounded-[50%]" alt="Imagem de perfil do usuário" />
                  <div className="w-[380px] flex flex-col border-b border-solid border-[#3e505a] py-2">
                    <div className="w-full flex flex-row justify-between">
                      <h2>Alice irmã</h2>
                      <time className="font-light text-[.7rem] text-gray-400 mt-1">15:49</time>
                    </div>
                    <span className="font-light text-[.7rem] text-gray-400 mt-3">oiee..</span>
                  </div>
                </div>
              </li>

              <li className="flex items-center h-[72px] hover:bg-[#2a3942] ">
                <div className="flex items-center py-3 px-3 gap-4 ">
                  <Image src={user} className="w-[49px] rounded-[50%]" alt="Imagem de perfil do usuário" />
                  <div className="w-full flex flex-col border-b border-solid border-[#3e505a] py-2">
                    <div className="w-[380px] flex flex-row justify-between">
                      <h2>Valdir</h2>
                      <time className="font-light text-[.7rem] text-gray-400 mt-1">15:45</time>
                    </div>
                    <span className="font-light text-[.7rem] text-gray-400 mt-3">OK</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* area das conversas */}
        <div className="w-full h-[735px] flex flex-col bg-[#222e35] -mt-[59px]">
           {/* <Screen /> */}
           {/* <TimelineMessage /> */}
           <section className="flex flex-row flex-wrap">
             {/* <MessageReceiver data={{messages}} /> */}
             <MessageAuthor data={{messages}} />
           </section>
          
            <div className="flex gap-5 items-center w-8/12 absolute bottom-10 px-20">
                <input 
                  type="text" 
                  name="message" 
                  onChange={(e) => setMessage(e.target.value)}  
                  className="w-full h-[35px] rounded-md bg-[#1a1919] py-7 px-8 text-[13px] outline-none" 
                />

                <Send size={40} 
                  className="cursor-pointer"
                  onClick={onSubmit}
                />
            </div>    
        </div>
      </div>
    </section>
  );
}
