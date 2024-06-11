
import Image from "next/image";
import desktop from "../../public/native-desktop-wpp.png"

export const Screen = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <Image src={desktop} alt="" className="w-[320px] h-[188px]" />

            <h4 className="font-light text-3xl mt-10 text-[#E9EDEFE] text-center">Descarregar o WhatsApp para <br /> Windows</h4>

            <span className="w-[560px] text-center text-[#8696A0] mt-6">
                Descarregue a aplicação para Windows para fazer chamadas, partilhar o ecrã e ter uma experiência mais rápida.
            </span>

            <button type="button" className="w-[160px]  text-sm text-center text-[#111B21] bg-[#00A884] py-[8px] rounded-3xl mt-8">
                Obter a aplicação
            </button>
        </div>
    )
}