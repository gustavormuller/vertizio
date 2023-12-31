import { arrowDown } from "@/public";
import Image from "next/image";
import Link from "next/link";

const Contato = () => {
    return (
        <section id='contato' className='sm:py-16 py-6 mb-8 flex justify-center items-center flex-col relative'>
            <div className='flex justify-center items-center text-center flex-col'>
                <h2 className="font-poppins font-semibold xs:text-[48px] text-[26px] text-white xs:leading-[60px] leading-[35px] sm:max-w-[80%] max-w-[100%]">
                    Estamos ansiosos para conhecer seus objetivos
                </h2>
                <p className="font-poppins font-normal sm:text-[19px] text-[17px] text-dimWhite sm:my-6 my-4 sm:max-w-[60%] max-w-[95%] sm:leading-[30px] text-start">
                    Na Vertizio, acreditamos que grandes parcerias começam com uma conversa. Se você está pronto para levar sua presença online para o próximo nível, estamos aqui para ouvir.
                </p>
                <Image src={arrowDown} className="relative right-[26px] mb-10 mt-16" />
                <Link href='#'>
                    <div className={`flex justify-center items-center w-[210px] h-[52px] rounded-[22px] bg-blue-gradient p-[3px] cursor-pointer`}>
                        <div className={`flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-[21px]`}>
                            <div className={`flex justify-center items-start flex-row`}>
                                <p className="flex font-poppins font-medium text-[18px] leading-[23px]">
                                    <span className="text-gradient text-[20px]">Vamos conversar</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Contato