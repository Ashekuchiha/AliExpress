'use client'
import React, { useState } from 'react'
import SearchBar from './Searchbar'
import Logo from './Logo';
import DownloadApp from './DownloadApp';
import LanguageCurrencyForm from './LanguageCurrencyForm';
import SignInButton from './SignInButton';
import CartButton from './CartButton';

export default function Top() {
    const [searchValue, setSearchValue] = useState("");

    const handleVoiceClick = () => {
      console.log("Voice search activated!");
    };
  return (
    <div className='flex gap-6 items-center h-16 align-middle justify-center pt-[10px]'>
        <Logo/>
        <SearchBar 
        placeholder="Search something..." 
        value={searchValue} 
        onChange={setSearchValue} 
        onVoiceClick={handleVoiceClick} 
        />
        <DownloadApp 
        link="https://www.aliexpress.com/app" 
        label1="Download the" 
        label2="AliExpress app"
        />
        <LanguageCurrencyForm/>
        <SignInButton/>
        <CartButton/>
    </div>
  )
}
