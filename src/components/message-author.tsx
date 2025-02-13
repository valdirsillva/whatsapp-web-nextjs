
import Image from "next/image";
import user from "../../public/user.png"

export const MessageAuthor = (props: any) => {
    const { data: { messages } } = props
    return (
        <div className="w-full flex flex-col mt-4 ml-5 p-5 ">
            <section className="flex gap-10 flex-col">
                {messages && messages !== '' ? (
                    <div className="w-full flex flex-row gap-2 justify-end box_message pr-4">
                    <div className="w-[250px] flex flex-col gap-1 p-3 rounded-md bg-[#2a3942]">
                        <div className="flex flex-col gap-2 mt-1">
                            <p className="font-light text-[.7rem] ">
                                <span className="">{messages?.username}</span> {messages?.phoneNumber}
                            </p>
                            <div className="flex font-light text-[.9rem]">
                            {messages?.message}
                            </div>
                        </div>
                    </div>
                    <Image src={user} className="w-[30px] h-[30px] rounded-[50%]" alt="Imagem de perfil do usuário" />
                </div>
                ) : null}
            </section>
        </div>
    )
}