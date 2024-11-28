import React from 'react'
import CurrentDateTime from './RTime'
import Link from 'next/link'
import { ArrowCircleRight, ShoppingCartCheckout } from '@mui/icons-material'
import Slider from '../Slider'

export default function Main() {
  return (
    <div className='bg-[#FF2651] h-64 flex'>
      <div className='h-full w-8/12 pl-20'>
      <CurrentDateTime timestamp={"2024-11-09T13:25:00Z"} />
      <div className='font-bold text-2xl pb-5 pt-2 '><Link href='#'><ShoppingCartCheckout/> <span className='pl-1 text-yellow-500'>BEST DEALS</span> OF THE YEAR <ArrowCircleRight/></Link></div>
      <Slider/>
      </div>
      <div className='h-full content-center'>hi</div>
    </div>
  )
}
