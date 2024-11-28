import React from 'react'
import NavigationBar from './NavigationBar'
import DropdownMenu from './DropdownMenu';
import {
  Phone,
  Laptop,
  Home,
  Scissors,
  Shirt,
  Headphones,
  Lightbulb,
  Car,
  Briefcase,
} from "lucide-react";

const categories = [
  { name: "Phones & Telecommunications", icon: Phone },
  { name: "Computer, Office & Education", icon: Laptop },
  { name: "Home & Garden", icon: Home },
  { name: "Hair Extensions & Wigs", icon: Scissors },
  { name: "Men's Clothing", icon: Shirt },
  { name: "Accessories", icon: Headphones },
  { name: "Consumer Electronics", icon: Laptop },
  { name: "Home Improvement & Lighting", icon: Lightbulb },
  { name: "Home Appliances", icon: Laptop },
  { name: "Automotive & Motorcycle", icon: Car },
  { name: "Luggage & Bags", icon: Briefcase },
];


export default function NavBot() {
  return (
    <div className='text-black flex justify-around mt-[10px]'>
    {/* <AllCategoriesDropdown /> */}
    <DropdownMenu categories={categories} />
    <NavigationBar />
  </div>
  )
}
