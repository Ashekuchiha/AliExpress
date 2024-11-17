'use client'
import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";

const NavigationBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="flex items-center space-x-6">
      {/* Menu Items */}
      <p className="text-red-500 font-semibold cursor-pointer">SuperDeals</p>
      <p className="cursor-pointer">Plus</p>
      <div className="bg-gray-200 px-4 py-1 rounded-full cursor-pointer">
        <p className="font-semibold">New</p>
      </div>
      <p className="cursor-pointer">AliExpress Business</p>
      <p className="cursor-pointer">Phones & Telecommunications</p>
      <p className="cursor-pointer">Home & Garden</p>
      
      {/* More Dropdown */}
      <div className="relative">
        <div
          onClick={handleClick}
          className="flex items-center cursor-pointer space-x-1"
        >
          <p>More</p>
          <ArrowDropDownIcon />
        </div>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "more-button",
          }}
        >
          <MenuItem onClick={handleClose}>Fashion</MenuItem>
          <MenuItem onClick={handleClose}>Beauty</MenuItem>
          <MenuItem onClick={handleClose}>Health</MenuItem>
          <MenuItem onClick={handleClose}>Sports</MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default NavigationBar;
