import React, { useState } from "react";
import { Popover, MenuItem, Select, Button } from "@mui/material";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

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
          src="/images/bangladesh.png" // URL of the image
          alt="Bangladesh Flag" // Alt text for the image
          width={100} // Width of the image (set as per your design needs)
          height={100} // Height of the image (set as per your design needs)
          className="w-8 h-8" // Tailwind CSS for styling (these classes can be applied)
        />
        <span className="text-sm font-medium">EN/BDT</span>
        <ChevronDown/>
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
        className="mt-2 rounded-[1.75rem]"
      >
        <div className="p-4 w-72 ">
          {/* Ship To */}
          <div className="mb-4">
            <label className="block text-xl font-bold text-black mb-1">
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
                  src="/images/bangladesh.png" // URL of the image
                  alt="Bangladesh Flag" // Alt text for the image
                  width={100} // Width of the image (set as per your design needs)
                  height={100} // Height of the image (set as per your design needs)
                  className="w-8 h-8" // Tailwind CSS for styling (these classes can be applied)
                />
                  <span>Bangladesh</span>
                </div>
              </MenuItem>
              <MenuItem value="USA">
                <div className="flex items-center space-x-2">
                <Image
                  src="/images/united-states.png" // URL of the image
                  alt="usa Flag" // Alt text for the image
                  width={100} // Width of the image (set as per your design needs)
                  height={100} // Height of the image (set as per your design needs)
                  className="w-8 h-8" // Tailwind CSS for styling (these classes can be applied)
                />
                  <span>USA</span>
                </div>
              </MenuItem>
            </Select>
          </div>

          {/* Language */}
          <div className="mb-4">
            <label className="block text-xl font-bold text-black mb-1">
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
            <label className="block text-xl font-bold text-black mb-1">
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
            className="bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          >
            Save
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export default LanguageCurrencyForm;
