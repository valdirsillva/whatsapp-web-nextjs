
import Image from "next/image";
import user from "../../public/user.png"

export const MessageAuthor = (props: any) => {
    const { data } = props

 
    return (
        <>
            {data?.messages.map((msg: any) => {
                return (
                    <div className="w-full flex flex-col mt-4 ml-5 p-5 ">
                        <section className="flex gap-10 flex-col">
                            <div className="w-full flex flex-row gap-2 justify-end box_message pr-4">
                                <div className="w-[250px] flex flex-col gap-1 p-3 rounded-md bg-[#2a3942] my-4 mx-3">
                                    <div className="flex flex-col gap-2 mt-1">
                                        <p className="font-light text-[.7rem] flex justify-between">
                                            <span className="">{msg?.username}</span> 
                                            <span className="font-thin">{msg.time}</span>
                                        </p>

                                        <div className="flex font-light text-[.9rem]">
                                            {msg?.message}
                                        </div>
                                    </div>
                                </div>
                                <Image src={user} className="w-[30px] h-[30px] rounded-[50%]" alt="Imagem de perfil do usuário" />
                            </div>
                        </section>
                    </div>
                )
            })}
        </>
    )
}