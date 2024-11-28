
import { LayoutGrid } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function DownloadApp({ link, label1, label2 }) {
  return (
    <div className="relative group w-max">
      <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 cursor-pointer">
        <div className="w-6 h-6 flex items-center justify-center bg-black text-white rounded">
            <LayoutGrid color="#ffffff"/>
        </div>
        <div className="text-sm">
          <p className="text-black font-medium">{label1}</p>
          <p className="text-black font-medium">{label2}</p>
        </div>
      </a>

      {/* Hover Popup (visible on hover) */}
      <div
        className="absolute top-full left-0 mt-2 w-[28rem] bg-white shadow-lg rounded-md p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-top-left"
      >
        <div className="flex items-center space-x-4">
          <div>
          <Image
  src="/images/qr-code.png"
  alt="QR Code"
  width={100}
  height={100} 
  className="w-[8rem] h-[8rem]"
/>
          </div>
          {/* Text */}
          <div>
            <p className="text-lg font-semibold text-black">Download the AliExpress app</p>
            <p className="text-sm text-gray-500">Scan the QR code to download</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-2 mt-4">
          <a href="#" className="w-full flex justify-center items-center bg-black text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800">
            <Image
              src="/images/playstore.png" 
              alt="Bangladesh Flag" 
              width={100} 
              height={100} 
              className="w-[2rem] h-[2rem] mr-3" 
            />
            App Store
          </a>
          <a href="#" className="w-full flex justify-center items-center bg-black text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800">
          <Image
            src="/images/apple-logo.png" 
            alt="Bangladesh Flag" 
            width={100} 
            height={100} 
            className="w-[2rem] h-[2rem] mr-3" 
          />
            Google Play
          </a>
        </div>
      </div>
    </div>
  );
}
