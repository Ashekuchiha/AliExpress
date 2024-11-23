import Image from 'next/image'
import React from 'react'

export default function CardItem({text,image}) {
  return (
    <div className=' w-full h-[30%] flex'>
      <div className='text-black text-xl h-full w-1/3 font-bold'>{text}</div>
      <div className='h-full w-2/3 relative'>
      <Image
  src={image} // The dynamic image URL
  alt="Image" // Alt text for accessibility
  layout="fill" // The image will fill the parent container
  objectFit="contain" // Ensures the image is contained within the parent container
  className="top-0 left-0" // Optional: You can add positioning or other styling here
/>
      </div>
    </div>
  )
}
