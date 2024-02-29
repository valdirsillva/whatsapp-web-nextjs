import Image from "next/image";

import { ListFilter, MessageCircleCode, MessageSquarePlus, MoreVertical, Orbit, Users2 } from "lucide-react";

import user from "../../public/user.png"
import esmeralda from "../../public/esmeralda.jpg"
import diogo from "../../public/diogo.jpg"
import amanda from "../../public/amanda.jpg"
import frederico from "../../public/frederico.jpg"
import djMarchimello from "../../public/dj-marshimello.jpg"
import agatha from "../../public/agathaa.jpg"
import alice from "../../public/alice.jpg"
import brenda from "../../public/brenda.jpg"
import screen from "../../public/native-desktop-wpp.png"

export default function Home() {
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
        <div className="w-full h-[735px] flex bg-[#222e35] -mt-[59px]">
            <div className="w-full flex flex-col items-center justify-center">
              <Image src={screen} alt="" className="w-[320px] h-[188px]"/>

              <h4 className="font-light text-3xl mt-10 text-[#E9EDEFE] text-center">Descarregar o WhatsApp para <br/> Windows</h4>

              <span className="w-[560px] text-center text-[#8696A0] mt-6">
              Descarregue a aplicação para Windows para fazer chamadas, partilhar o ecrã e ter uma experiência mais rápida.
              </span>

              <button type="button" className="w-[160px]  text-sm text-center text-[#111B21] bg-[#00A884] py-[8px] rounded-3xl mt-8">Obter a aplicação</button>
            </div>
        </div>
      </div>
    </section>
  );
}
