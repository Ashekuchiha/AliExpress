import React, { useState } from "react";
import { Popover, MenuItem, Select, Button } from "@mui/material";

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
        <img
          src="https://flagcdn.com/w40/bd.png"
          alt="Bangladesh Flag"
          className="w-6 h-4"
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
                  <img
                    src="https://flagcdn.com/w40/bd.png"
                    alt="Bangladesh"
                    className="w-6 h-4"
                  />
                  <span>Bangladesh</span>
                </div>
              </MenuItem>
              <MenuItem value="USA">
                <div className="flex items-center space-x-2">
                  <img
                    src="https://flagcdn.com/w40/us.png"
                    alt="USA"
                    className="w-6 h-4"
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
