import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div className=" top-0 left-0">
        <Image
          src="/images/hi.png" // Replace with your logo's path
          alt="Logo"
          width={170} // Set desired width
          height={50} // Set desired height
          priority // Ensures the image is loaded immediately
        />
      </div>
  )
}
