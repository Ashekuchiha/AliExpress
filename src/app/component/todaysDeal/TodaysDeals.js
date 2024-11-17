import React from 'react'
import SaleCard from './SaleCard'

export default function TodaysDeals() {
  return (
    <div className='flex  justify-center mx-20 h-[66.6667vh] mb-2 gap-4'>
      <div className=' w-full drop-shadow-lg hover:bg-slate-200'>
        <SaleCard title='Super deals'/>
      </div>
      <div className=' w-full drop-shadow-lg  hover:bg-slate-200'>
        <SaleCard title='Big Save'/>
      </div>
    </div>
  )
}
