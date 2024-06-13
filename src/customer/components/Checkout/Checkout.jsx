import * as React from "react";
import { useLocation } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import DeliveryAddressForm from "./DeliveryAddressForm";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

const steps = ["Login", "Add Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);

  const step = querySearch.get("step");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="px-10 lg:px-20">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={step}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div className="mt-10">
          {step == 2 ? <DeliveryAddressForm /> : <OrderSummary />}
        </div>
      </Box>
    </div>
  );
}
