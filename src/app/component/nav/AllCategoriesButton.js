'use client'
import React, { useState } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, KeyboardArrowRight as ArrowRightIcon } from '@mui/icons-material';

const AllCategoriesDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubmenuAnchorEl(null);
  };

  const handleSubmenuOpen = (event) => {
    setSubmenuAnchorEl(event.currentTarget);
  };

  const handleSubmenuClose = () => {
    setSubmenuAnchorEl(null);
  };

  return (
    <div>
      {/* Main Button */}
      <button
        onMouseEnter={handleMenuOpen}
        className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg shadow-md"
      >
        <MenuIcon className="text-gray-700" />
        <span className="text-gray-700 font-medium">All Categories</span>
      </button>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{
          onMouseLeave: handleMenuClose,
        }}
        className="mt-2"
      >
        {[
          { label: 'Phones & Telecommunications', items: ['Smartphones', 'Landline Phones'] },
          { label: 'Home & Garden', items: ['Furniture', 'Decor'] },
          { label: 'Hair Extensions & Wigs', items: ['Synthetic Wigs', 'Hair Tools'] },
          { label: "Men's Clothing", items: ['Shirts', 'Pants'] },
        ].map((category, index) => (
          <MenuItem
            key={index}
            onMouseEnter={handleSubmenuOpen}
            onMouseLeave={handleSubmenuClose}
            onClick={handleMenuClose}
          >
            <span>{category.label}</span>
            <ArrowRightIcon className="ml-auto" />
            {/* Submenu */}
            <Menu
              anchorEl={submenuAnchorEl}
              open={submenuAnchorEl?.textContent === category.label}
              onClose={handleSubmenuClose}
              className="ml-2"
              MenuListProps={{
                onMouseLeave: handleSubmenuClose,
              }}
            >
              {category.items.map((item, idx) => (
                <MenuItem key={idx} onClick={handleSubmenuClose}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default AllCategoriesDropdown;
