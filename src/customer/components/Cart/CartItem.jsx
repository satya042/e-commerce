import { RemoveCircleOutlineIcon } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import "./CartItem.css";

const CartItem = () => {
  return (
    <div className="cart-item-container">
      <div className="cart-item-details">
        <div className="cart-item-image">
          <img
            className="cart-item-image-content"
            src=""
            alt=""
          />
        </div>
        <div className="cart-item-info">
          <p className="cart-item-name">Men Slim Mid Rise Black Jeans </p>
          <p className="cart-item-size opacity-70">Size: L,White</p>
          <p className="cart-item-seller opacity-70 mt-2">Seller: Crishtaliyo 2fashion</p>
          <div className="cart-item-prices flex space-x-5 items-center text-gray-900 mt-6">
            <p className="cart-item-price font-semibold">199</p>
            <p className="cart-item-old-price opacity-50 line-through"> 211</p>
            <p className="cart-item-discount text-green-600 font-semibold">5% off</p>
          </div>
        </div>
      </div>
      <div className="cart-item-actions">
        <div className="cart-item-quantity">
          <IconButton>
            {/* <RemoveCircleOutlineIcon /> */}
          </IconButton>
          <span className="cart-item-quantity-counter">
            <IconButton className="cart-item-quantity-button" sx={{ color: "RGB(145 85 253)" }}>
              {/* <RemoveCircleOutlineIcon /> */}
            </IconButton>
          </span>
        </div>
        <div>
          <Button className="cart-item-remove-button" sx={{ color: "RGB(145 85 253)" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
