import Image from 'next/image';
import Link from 'next/link';

const Project = ({ image, link, title }) => {
  return (
    <div className='flex justify-between flex-col sm:mx-5 sm:my-8 mx-4 my-6 max-w-[600px] rounded-[10px]'>
      <Link href={link} target='_blank'>
        <Image src={image} width={`100%`} height={`100%`} className='rounded-[11px]' />
      </Link>
      <h3 className="font-poppins font-[500] text-[26px] text-white w-full mt-1">
          {title}
      </h3>
    </div>
  )
}

export default Project