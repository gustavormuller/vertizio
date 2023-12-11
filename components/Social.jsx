import { socialmedia } from '@/public';
import Image from "next/image";
import Link from 'next/link';

const Social = () => {
  return (
    <section id="product" className="flex md:flex-row flex-col-reverse sm:py-20 py-6">
      <div className="flex-1 flex justify-center items-end flex-col text-end pr-10">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white leading-[66.8px] w-full">
          Gestão de Mídias Sociais
        </h2>
        <ul className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-4">
          <li className='pb-2'><b>Estratégias de Conteúdo:</b> Histórias envolventes que refletem a essência da sua marca.</li>
          <li className='pb-2'><b>Interação Proativa:</b> Conectamos-se diretamente com seu público para construir relacionamentos.</li>
          <li><b>Crescimento Orgânico:</b> Aumentamos sua presença online de maneira autêntica.</li>
        </ul>
        <div></div>
        <Link href="#" className='font-poppins text-[26px] text-gradient mt-2 border-b-2 border-[#9d67ca] z-[5]'>Impulsione sua presença</Link>
      </div>

      <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
        <Image src={socialmedia} alt="Tráfego Pago" width={`100%`} height={`100%`} className="relative z-[5]" />
      </div>
    </section>
  )
}

export default Social