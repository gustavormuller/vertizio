import Image from 'next/image'
import React from 'react'

const Project = ({ image, link }) => {
  return (
    <div className='flex justify-between flex-col sm:px-8 sm:py-8 px-4 py-6 rounded-[20px]  max-w-[600px] mr-0 my-0'>
        <Image src={image} width={`100%`} height={`100%`} />
    </div>
  )
}

export default Project