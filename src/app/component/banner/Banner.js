import React from 'react'
import ProductCard from './ProductCard'
import { Button } from '@mui/material'

export default function Banner() {
  return (
    <div
    className=' mx-20 h-[79.6667vh] mt-10 bg-cover bg-center bg-no-repeat p-4' 
    style={{ backgroundImage: "url('/images/banner.jpg')", filter:'invert(10%)'}}
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
        <div className=' w-1/2 h-full'>
            <div className=' flex w-full h-1/2'>
                <div className=' w-1/2 h-full flex'>
                    <div className=' m-1'></div>
                    <div>
                        <h1 className='text-white text-2xl font-bold mb-2'>5M+</h1>
                        <p className='text-xl'>factory direct suplly</p>
                    </div>
                </div>
                <div className=' w-1/2 h-full flex'>
                <div className=' m-1'></div>
                    <div>
                        <h1 className='text-white text-2xl font-bold mb-2'>5M+</h1>
                        <p className='text-xl'>factory direct suplly</p>
                    </div>
                </div>
            </div>
            <div className=' flex w-full h-1/2'>
                <div className=' w-1/2 h-full flex'>
                    <div className=' m-1'></div>
                    <div>
                        <h1 className='text-white text-2xl font-bold mb-2'>5M+</h1>
                        <p className='text-xl'>factory direct suplly</p>
                    </div>
                </div>
                <div className=' w-1/2 h-full flex'>
                <div className=' m-1'></div>
                    <div>
                        <h1 className='text-white text-2xl font-bold mb-2'>5M+</h1>
                        <p className='text-xl'>factory direct suplly</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className=' w-full h-2/3 flex justify-evenly pt-2'>
        <div className=' bg-white w-96 h-[23rem]'>
            <div className='text-black text-2xl font-bold text-center mt-2'>
                hi
            </div>
            <div  className=' flex gap-2 ' >
            <ProductCard
            image="/images/product2.avif"
            brand="DIKELANG"
            price="BDT140.22"
            bulkPrice="≥3 pcs"
            retailPrice="BDT343.14"
            />
            <ProductCard
            image="/images/product2.avif"
            brand="SAMSUNG"
            price="BDT140.22"
            bulkPrice="≥3 pcs"
            retailPrice="BDT343.14"
            />
            </div>
        </div>
        <div className=' bg-white w-96 h-[23rem]'>
            <div className='text-black text-2xl font-bold text-center mt-2'>
                hi
            </div>
            <div  className=' flex gap-2 ' >
            <ProductCard
            image="/images/product2.avif"
            brand="DIKELANG"
            price="BDT140.22"
            bulkPrice="≥3 pcs"
            retailPrice="BDT343.14"
            />
            <ProductCard
            image="/images/product2.avif"
            brand="DIKELANG"
            price="BDT140.22"
            bulkPrice="≥3 pcs"
            retailPrice="BDT343.14"
            />
            </div>
        </div>
        <div className=' bg-white w-96 h-[23rem]'>
            <div className='text-black text-2xl font-bold text-center mt-2'>
                hi
            </div>
            <div  className=' flex gap-2 ' >
            <ProductCard
            image="/images/product2.avif"
            brand="DIKELANG"
            price="BDT140.22"
            bulkPrice="≥3 pcs"
            retailPrice="BDT343.14"
            />
            <ProductCard
            image="/images/product2.avif"
            brand="DIKELANG"
            price="BDT140.22"
            bulkPrice="≥3 pcs"
            retailPrice="BDT343.14"
            />
            </div>
        </div>
      </div>
    </div>
  )
}
