import { Adjust, Widgets, AdjustIcon } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <div className="p-5 shadow-md hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src=""
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="mb-2">Men Slim Mid Rise Black Jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: Black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>1099</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
              <AdjustIcon
                sx={{ Width: "15px", height: "15px" }}
                className="text-green-600 mr-2 text-sm"
              />
              <p>
                <span>Delivered on March 03</span>
              </p>
              <p className="text-xs">Your Item has been delivered</p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery On Mar 03</span>
            </p>
          )}
        </Grid>
        <Grid item xs={2}>
          <p>1099</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
