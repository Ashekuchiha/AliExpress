import React from 'react'
import { Button } from '@mui/material'
import ProductCard from '../banner/ProductCard'

export default function ShopBanner() {
    const img = 'public\lena.jpg'
  return (
    <div
    className=' h-full w-full bg-cover bg-center bg-no-repeat ' 
    style={{ backgroundImage: "url('/images/lena.jpg')", filter:'invert(10%)'}}
    >
      <div className=' w-full h-1/3 pl-11 flex '>
        <div className=' w-1/2 h-full'>
            <h1 className='text-white text-2xl font-bold mt-2'>SuperBuyer</h1>
            <div className='pb-10'>
                <span>Text exemptions </span><span>Express payment </span><span>Financial support</span>
            </div>
            <Button     sx={{
            backgroundColor: 'white',
            color: 'black',
            '&:hover': {
            backgroundColor: 'darkpurple',
            },
            }}>Shop now</Button>
        </div>
      </div>
      <div className=' w-full flex pt-2 justify-around'>
        <div className=' bg-white w-[12rem] h-[20rem]'>
            <ProductCard
            image="/images/lena.jpg"
            brand="DIKELANG"
            price="BDT140.22"
            bulkPrice="≥3 pcs"
            retailPrice="BDT343.14"
            />
        </div>
        <div className=' bg-white w-[12rem] h-[20rem]'>
            <ProductCard
            image="/images/lena.jpg"
            brand="DIKELANG"
            price="BDT140.22"
            bulkPrice="≥3 pcs"
            retailPrice="BDT343.14"
            />
        </div>
        <div className=' bg-white w-[12rem] h-[20rem]'>
            <ProductCard
            image="/images/lena.jpg"
            brand="DIKELANG"
            price="BDT140.22"
            bulkPrice="≥3 pcs"
            retailPrice="BDT343.14"
            />
        </div>
      </div>
    </div>
  )
}
