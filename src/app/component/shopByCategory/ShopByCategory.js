import React from 'react'
import ShopBanner from './ShopBanner'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CardItem from './CardItem'
export default function ShopByCategory() {
  return (
    // <div className=' mx-16 h-[79.6667vh] mt-10 p-4 flex gap-4' >
    //     <div className=' w-1/2 h-full'>
    //         <ShopBanner/>
    //     </div>
    //     <div className='w-1/2 h-full mb-20'>
    //     <Carousel className="w-full h-full">
    //   <CarouselContent>
    //     {Array.from({ length: 5 }).map((_, index) => (
    //       <CarouselItem key={index}>
            
    //           <Card>
    //             <CardContent className="flex aspect-square items-center justify-center h-full w-full">
    //                 <div className=' w-full h-full flex'>
    //                   <div className=' w-1/2 h-full flex flex-col justify-between'>
    //                     <CardItem text='go' image='/images/product2.avif'/>
    //                     <CardItem text='go' image='/images/product2.avif'/>
    //                     <CardItem text='go' image='/images/product2.avif'/>
    //                   </div>
    //                   <div className=' w-1/2 h-full flex flex-col justify-between'>
    //                     <CardItem text='go' image='/images/product2.avif'/>
    //                     <CardItem text='go' image='/images/product2.avif'/>
    //                     <CardItem text='go' image='/images/product2.avif'/>
    //                   </div>
    //                 </div>
    //             </CardContent>
    //           </Card>            
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    //   <CarouselPrevious/>
    //   <CarouselNext />
    // </Carousel>
    //     </div>
    // </div>
<div className="mx-16 h-[79.6667vh] mt-10 p-4 flex gap-4 group relative">
  <div className="w-1/2 h-full">
    <ShopBanner />
  </div>
  <div className="w-1/2 h-full mb-20 relative">
    <Carousel className="w-full h-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center h-full w-full">
                <div className="w-full h-full flex">
                  <div className="w-1/2 h-full flex flex-col justify-between">
                    <CardItem text="go" image="/images/product2.avif" />
                    <CardItem text="go" image="/images/product2.avif" />
                    <CardItem text="go" image="/images/product2.avif" />
                  </div>
                  <div className="w-1/2 h-full flex flex-col justify-between">
                    <CardItem text="go" image="/images/product2.avif" />
                    <CardItem text="go" image="/images/product2.avif" />
                    <CardItem text="go" image="/images/product2.avif" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Carousel>
  </div>
</div>

  )
}
