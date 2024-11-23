import React, { useState } from "react";
import { Popover, MenuItem, Select, Button } from "@mui/material";
import Image from "next/image";

const LanguageCurrencyForm = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [country, setCountry] = useState("Bangladesh");
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("BDT (Bangladeshi Taka)");

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      {/* Trigger Button */}
      <button
        className="flex items-center space-x-1 text-black capitalize hover:bg-gray-100 px-4 py-2 rounded"
        onClick={handleOpen}
      >
        {/* Flag */}
        <Image
  src="/images/lena.jpg" // URL of the image
  alt="Bangladesh Flag" // Alt text for the image
  width={24} // Width of the image (set as per your design needs)
  height={16} // Height of the image (set as per your design needs)
  className="w-6 h-4" // Tailwind CSS for styling (these classes can be applied)
 />
        <span className="text-sm font-medium">EN/BDT</span>
        {/* Dropdown Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 9l-7.5 7.5L4.5 9"
          />
        </svg>
      </button>

      {/* Popover for Form */}
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        className="mt-2"
      >
        <div className="p-4 w-72">
          {/* Ship To */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ship to
            </label>
            <Select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              fullWidth
              className="border rounded-md"
            >
              <MenuItem value="Bangladesh">
                <div className="flex items-center space-x-2">
                <Image
  src="/images/lena.jpg" // Image URL
  alt="Bangladesh" // Alt text for accessibility
  width={40} // Specify width to match the original image
  height={26} // Specify height to match the aspect ratio
  className="w-6 h-4" // Optional Tailwind CSS for further styling (can scale as per your layout)
 />
                  <span>Bangladesh</span>
                </div>
              </MenuItem>
              <MenuItem value="USA">
                <div className="flex items-center space-x-2">
                <Image
  src="https://flagcdn.com/w40/us.png" // Image URL
  alt="USA" // Alt text for accessibility
  width={40} // Specify the width (original image size)
  height={26} // Specify the height (maintaining aspect ratio)
  className="w-6 h-4" // Optional Tailwind CSS classes for resizing
 />
                  <span>USA</span>
                </div>
              </MenuItem>
            </Select>
          </div>

          {/* Language */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Language
            </label>
            <Select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              fullWidth
              className="border rounded-md"
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="বাংলা">বাংলা</MenuItem>
            </Select>
          </div>

          {/* Currency */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Currency
            </label>
            <Select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              fullWidth
              className="border rounded-md"
            >
              <MenuItem value="BDT (Bangladeshi Taka)">
                BDT (Bangladeshi Taka)
              </MenuItem>
              <MenuItem value="USD (US Dollar)">USD (US Dollar)</MenuItem>
            </Select>
          </div>

          {/* Save Button */}
          <Button
            onClick={handleClose}
            fullWidth
            className="bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            Save
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export default LanguageCurrencyForm;
