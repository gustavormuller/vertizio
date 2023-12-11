import { trafego } from '@/public';
import Image from "next/image";
import Link from 'next/link';

const Trafego = () => {
  return (
    <section id="product" className="flex md:flex-row flex-col-reverse sm:py-20 py-6">
      <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <Image src={trafego} alt="Tráfego Pago" width={`100%`} height={`100%`} className="relative z-[5]" />
      </div>

      <div className="flex-1 flex justify-center items-start flex-col pl-10">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white leading-[66.8px] w-full">
          Tráfego Pago
        </h2>
        <ul className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-4">
          <li className='pb-2'><b>Campanhas Segmentadas:</b> Alcançamos as pessoas certas, no momento certo.</li>
          <li className='pb-2'><b>Otimização Contínua:</b> Ajustes precisos para maximizar o retorno sobre o investimento.</li>
          <li><b>Relatórios Detalhados:</b> Mantenha-se informado com insights claros sobre o desempenho da campanha.</li>
        </ul>
        <div></div>
        <Link href="#" className='font-poppins text-[26px] text-gradient mt-2 border-b-2 border-[#9d67ca] z-[5]'>Aumente seu alcance</Link>
      </div>
    </section>
  )
}

export default Trafego