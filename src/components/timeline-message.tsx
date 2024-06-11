
import Image from "next/image";
import user from "../../public/user.png"

export const TimelineMessage = () => {
    return (
        <div className="w-full flex flex-col mt-40 ml-5">
            <section className="flex gap-10 flex-col">
                <div className="w-full flex flex-row gap-2 box_message">
                    <Image src={user} className="w-[30px] h-[30px] rounded-[50%]" alt="Imagem de perfil do usuário" />
                    <div className="w-[250px] flex flex-col gap-1 p-3 rounded-md bg-[#2a3942]">
                        <div className="flex flex-col gap-2 mt-1">
                            <p className="font-light text-[.7rem] ">
                                <span className="">~ Jhon Doe</span> +55 11972722999</p>
                            <div className="flex font-light text-[.9rem]">
                                Olá mundo
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-row gap-2 box_message">
                    <Image src={user} className="w-[30px] h-[30px] rounded-[50%]" alt="Imagem de perfil do usuário" />
                    <div className="w-[250px] flex flex-col gap-1 p-3 rounded-md bg-[#2a3942]">
                        <div className="flex flex-col gap-2 mt-1">
                            <p className="font-light text-[.7rem] ">
                                <span className="">~ Jhon Doe</span> +55 11972722999</p>
                            <div className="flex font-light text-[.9rem]">
                                Olá mundo
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}