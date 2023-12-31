import { robot } from '../public';
import GetStarted from './GetStarted';
import Image from 'next/image';

const Hero = () => (
  <section id='home' className={`flex md:flex-row flex-col sm:py-36 py-6`}>
    <div className={`flex-1 flex justify-center items-start flex-col x1:px-0 sm:px-6 px-6`}>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[56px] text-[30px] text-white ss:leading-[80px] leading-[40px]'>
          Transformamos <br className='sm:block hidden' /> {" "}
          <span className='text-gradient'>experiências digitais</span> <br /> {" "}
          em memórias únicas.
        </h1>


      </div>
      <p className={`font-poppins font-normal text-dimWhite max-w-[610px] mt-5 text-[20px] leading-7`}>
        Na Vertizio, somos mais do que uma agência de marketing. Somos os arquitetos da sua presença digital, os contadores de histórias da sua marca e os estrategistas por trás do seu sucesso online.
      </p>
      <div className='ss:flex hidden md:mr-4 mr-0 mt-7'>
        <GetStarted />
      </div>
    </div>
    <div>
      <Image src={robot} alt="Desenvolvimento de sites" className='relative z-[5]' width={`100%`} height={`100%`}/>

      {/* <div className='absolute z-0 w-[40%] h-[35%] top-0 right-[5%] pink__gradient' /> */}

      
    </div>
  </section>
)

export default Hero