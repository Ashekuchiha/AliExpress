import React from "react";
import Badge from "@mui/material/Badge";
import { ShoppingCart } from "lucide-react";

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
        <ShoppingCart/>
      </Badge>
      {/* Text */}
      <p className="text-black font-medium text-sm">Cart</p>
    </div>
  );
};

export default CartButton;
