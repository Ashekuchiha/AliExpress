import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const CartButton = ({ count = 0 }) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      {/* Badge with Icon */}
      <Badge
        badgeContent={count}
        color="primary"
        classes={{
          badge: "bg-black text-white font-bold text-xs h-5 w-5 rounded-full",
        }}
      >
        <ShoppingCartIcon className="text-black w-6 h-6" />
      </Badge>
      {/* Text */}
      <p className="text-black font-medium text-sm">Cart</p>
    </div>
  );
};

export default CartButton;
