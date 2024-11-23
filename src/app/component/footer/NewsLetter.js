import React from 'react'
import NewsLetterItem from './NewsLetterItem'

export default function NewsLetter() {
  return (
    <div className='w-full bg-slate-400 text-white h-[70vh] mt-5 px-10 text-center'>
        <div className='w-full h-1/2  flex'>
            <div className='w-1/2 h-full flex ml-[33px]'>
                <div className='h-full w-1/3 '>
                    <NewsLetterItem head={'Customer service'} text={'hi'}/>
                </div>
                <div className='h-full w-1/3 '>
                    <NewsLetterItem head={'Shopping with us'} text={'hi'}/>
                </div>
                <div className='h-full w-1/3 '>
                    <NewsLetterItem head={'Collaborate with us'} text={'hi'}/>
                </div>
            </div>
            <div className='w-1/2 h-full flex'>
                <div className='h-full w-1/2'><NewsLetterItem head={'Pay with'} text={'hi'}/>                </div>
                <div className='h-full w-1/2'><NewsLetterItem head={'Stay connected'} text={'hi'}/>                </div>
            </div>
        </div>
        <div className='w-full h-1/2  flex'>
            <div className='w-1/2 h-full'>
                <div className='h-1/2 w-full'>
                    <NewsLetterItem head={'Help'} text={'hi'}/>
                </div>
                <div className='h-1/2 w-full'>
                    <NewsLetterItem head={'AliExpress Multi-Language Sites'} text={'hi'}/>
                </div>
            </div>
            <div className='w-1/2 h-full'>
                <div className='h-1/2 w-full'>
                    <NewsLetterItem head={'Browse by Category'} text={'hi'}/>
                </div>
                <div className='h-1/2 w-full'>
                    <NewsLetterItem head={'Alibaba Group'} text={'hi'}/>
                </div>
            </div>
        </div>
    </div>
  )
}
