import React, { useState } from "react";
import { Popover } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MessageIcon from "@mui/icons-material/Message";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { UserRound } from "lucide-react";

const SignInButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      {/* Button */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        aria-describedby={id}
        onClick={handleClick}
      >
        <UserRound/>
        <div className="text-sm">
          <p className="text-gray-600">Welcome</p>
          <p className="text-black font-semibold">Sign in / Register</p>
        </div>
      </div>

      {/* Popover */}
      <Popover
        id={id}
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
      >
        <div className="w-72 p-4 h-[42rem]">
          {/* Sign In Section */}
          <button className="w-full bg-black text-white py-2 rounded-md font-semibold">
            Sign in
          </button>
          <p className="text-center text-sm text-gray-500 my-4">Register</p>

          <hr className="my-2" />

          {/* Options */}
          <div className="flex flex-col gap-4 text-lg">
            <div className="flex items-center text-gray-700 hover:text-black cursor-pointer">
              <ListAltIcon className="mr-2" />
              <p>My Orders</p>
            </div>
            <div className="flex items-center text-red-500 hover:text-black cursor-pointer">
              <MonetizationOnIcon className="mr-2" />
              <p>My Coins</p>
            </div>
            <div className="flex items-center text-gray-700 hover:text-black cursor-pointer">
              <MessageIcon className="mr-2" />
              <p>Message Center</p>
            </div>
            <div className="flex items-center text-gray-700 hover:text-black cursor-pointer">
              <CreditCardIcon className="mr-2" />
              <p>Payment</p>
            </div>
            <div className="flex items-center text-gray-700 hover:text-black cursor-pointer">
              <FavoriteBorderIcon className="mr-2" />
              <p>Wish List</p>
            </div>
            <div className="flex items-center text-gray-700 hover:text-black cursor-pointer">
              <CardGiftcardIcon className="mr-2" />
              <p>My Coupons</p>
            </div>
          </div>

          <hr className="my-2" />

          {/* Footer */}
          <div className="text-lg flex flex-col gap-4 py-1 text-gray-500 space-y-1">
            <p>Settings</p>
            <p>AliExpress Business</p>
            <p>DS Center</p>
            <p>Seller Log In</p>
            <p>Buyer Protection</p>
            <p>Help Center</p>
            <p>Disputes & Reports</p>
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default SignInButton;
