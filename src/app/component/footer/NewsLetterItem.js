import React from 'react'

export default function NewsLetterItem({head,text}) {
  return (
    <div className='w-10/12 h-full py-0 px-0 flex flex-col justify-start'>
      <p className='my-4 text-black font-bold text-xl ml-[-80%]'>{head}</p>
      <p className='text-wrap ml-[-80%]'>{text}</p>
    </div>
  )
}
