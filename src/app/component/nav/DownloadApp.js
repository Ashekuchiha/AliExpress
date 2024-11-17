
import React from 'react';

export default function DownloadApp({ link, label1, label2 }) {
  return (
    <div className="relative group w-max">
      {/* Hoverable Button */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 cursor-pointer">
        {/* Icon */}
        <div className="w-6 h-6 flex items-center justify-center bg-black text-white rounded">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M4 4h4v4H4V4zM6 6h8v8H6V6zm-2 10h4v4H4v-4zm2 2h8v8H6v-8zm10 0h4v4h-4v-4zm2-2h8v8h-8v-8z" />
          </svg>
        </div>
        {/* Text */}
        <div className="text-sm">
          <p className="text-black font-medium">{label1}</p>
          <p className="text-black font-medium">{label2}</p>
        </div>
      </a>

      {/* Hover Popup (visible on hover) */}
      <div
        className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg rounded-md p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-top-left"
      >
        {/* QR Code and Content */}
        <div className="flex items-center space-x-4">
          {/* QR Code */}
          <div>
            <img
              src="https://via.placeholder.com/100"
              alt="QR Code"
              className="w-24 h-24"
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 mr-2">
              <path d="M20.25 4.5h-16.5c-.966 0-1.75.784-1.75 1.75v11.5c0 .966.784 1.75 1.75 1.75h16.5c.966 0 1.75-.784 1.75-1.75v-11.5c0-.966-.784-1.75-1.75-1.75zm-8.5 11.25h-1.5v-6h1.5v6zm-.75-6.75c-.621 0-1.125-.504-1.125-1.125s.504-1.125 1.125-1.125c.621 0 1.125.504 1.125 1.125s-.504 1.125-1.125 1.125zm4.75 6.75h-1.5v-4.5h1.5v4.5zm-2-5.25c-.621 0-1.125-.504-1.125-1.125s.504-1.125 1.125-1.125 1.125.504 1.125 1.125-.504 1.125-1.125 1.125z" />
            </svg>
            App Store
          </a>
          <a href="#" className="w-full flex justify-center items-center bg-black text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 mr-2">
              <path d="M17.76 2.067l-4.61 8.286-6.09-1.29-4.61-8.286c-.3-.534-.17-1.25.3-1.58.47-.33 1.12-.25 1.49.24l6.5 7.455 4.85-8.65c.35-.62 1.1-.78 1.66-.32s.64 1.1.51 1.74z" />
            </svg>
            Google Play
          </a>
        </div>
      </div>
    </div>
  );
}
