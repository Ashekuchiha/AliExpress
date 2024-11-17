import React from 'react'
import SaleSlider from './SaleSlider'

export default function SaleCard({title}) {
  return (
    <>
        <h1 className="text-black font-extrabold text-2xl text-center pt-2 pb-4">{title}</h1>
        <SaleSlider/>
    </>
  )
}
