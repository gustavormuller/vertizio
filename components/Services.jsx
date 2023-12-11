import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Services = () => {
  return (
    <section id='servicos' className={`sm:py-16 py-6 flex justify-center items-center flex-col relative`}>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[26px] text-white xs:leading-[70px] leading-[40px] w-full">
          O que fazemos
        </h2>
      </div>

      <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
      </div>
    </section>
  )
}

export default Services