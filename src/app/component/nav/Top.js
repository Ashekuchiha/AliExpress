'use client'
import React, { useState } from 'react'
import SearchBar from './Searchbar'
import Logo from './Logo';
import DownloadApp from './DownloadApp';
import LanguageCurrencyForm from './test';
import SignInButton from './test2';
import CartButton from './CartButton';

export default function Top() {
    const [searchValue, setSearchValue] = useState("");

    const handleVoiceClick = () => {
      console.log("Voice search activated!");
    };
  return (
    <div className='flex gap-10 items-center h-16 align-middle justify-center'>
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
