import Image from 'next/image'
import React from 'react'

export default function CardItem({text,image}) {
  return (
    <div className=' w-full h-[30%] flex'>
      <div className='text-black text-xl h-full w-1/3 font-bold'>{text}</div>
      <div className='h-full w-2/3 relative'>
        <Image
        src={image}
        alt="Image"
        layout="fill"
        objectFit="contain"
      />
      </div>
    </div>
  )
}
