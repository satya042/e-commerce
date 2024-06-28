import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem';
import {Button} from '@mui/material';
import "./Checkout.css";

const OrderSummary = () => {

  const getCartCount = () => {
    // return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    // return cartItems
    //   .reduce((price, item) => price + item.price * item.qty, 0)
    //   .toFixed(2);
  };

  
  const handleProceedBtn = () => {
    alert("Functionality pending please stay tune, will be add soon.");
  };
  return (
    <div>
        {/* <div className='p-5 shadow-lg rounded-s-md border'>
            <AddressCard/>
        </div> */}
        <div>
      <div className="lg:grid grid-cols-3 relative">
        <div className="col-span-2">
          {[1,1,1].map((item)=> 
          <CartItem/>
          )}
        </div>
        {/* <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">

              Price details

                <span>Price</span>

                <span>Discount</span>
     
                <span>Delivery Charge</span>
          
                <span>Total Amount</span>

        </div> */}
          <div className="cartscreen__right">
            <div className="cartscreen__info">
              <p>Subtotal ({getCartCount()}) items</p>
              <p>${getCartSubTotal()}</p>
            </div>
            <div>
              <button
                title="Functionality need to be add."
                onClick={handleProceedBtn}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary