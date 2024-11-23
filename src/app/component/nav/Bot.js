import React from 'react'
import AllCategoriesDropdown from './AllCategoriesButton'
import NavigationBar from './NavigationBar'

export default function Bot() {
  return (
    <div className='text-black flex gap-4 justify-center'>
    <AllCategoriesDropdown />
    <NavigationBar />
  </div>
  )
}
