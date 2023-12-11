import { arrowUp } from "../public";
import Image from "next/image";

const GetStarted = () => (
  <div className={`flex justify-center items-center w-[210px] h-[52px] rounded-lg bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-lg`}>
      <div className={`flex justify-center items-start flex-row`}>
        <p className="flex font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient text-[20px]">Comece Agora</span>
          <Image src={arrowUp} width={23} height={23} className="object-contain ml-1 mt-[2px]" alt="arrow" />

        </p>
      </div>
    </div>
  </div>
)

export default GetStarted