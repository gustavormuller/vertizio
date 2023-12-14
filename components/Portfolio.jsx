import { portfolio } from "@/constants";
import Project from "./Project";

const Portfolio = () => {
  return (
    <section id='servicos' className={`sm:py-16 py-6 flex justify-center items-center flex-col relative`}>
      <div className="w-full flex justify-between items-center flex-col sm:mb-12 mb-6 relative z-[1]">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[26px] text-white xs:leading-[50px] leading-[40px] w-full">
          Portfólio
        </h2>
        <h4 className="font-poppins xs:text-[20px] text-[20px] text-dimWhite xs:leading-[50px] leading-[40px] w-full">Dê uma olhada em nossos últimos projetos</h4>
      </div>

      <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {portfolio.map((project) => <Project key={project.id} {...project} />)}
      </div>
    </section>
  )
}

export default Portfolio