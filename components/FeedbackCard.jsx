import Link from "next/link";

const FeedbackCard = ({ content, title }) => (
  <div className="flex justify-between flex-col sm:px-8 sm:py-8 px-4 py-6 rounded-[20px]  max-w-[378px] mr-0 my-0">
    <h3 className="font-poppins font-normal xs:text-[36px] text-[26px] leading-[42px] text-gradient pb-2">
      {title}
    </h3>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-dimWhite sm:my-6 my-4">
      {content}
    </p>

    {/* <div>
      <Link href="#" className="font-poppins font-normal text-[22px] text-white border-b-2 border-[#9d67ca] pb-1">
        Saiba Mais
      </Link>
    </div> */}

  </div>
);

export default FeedbackCard