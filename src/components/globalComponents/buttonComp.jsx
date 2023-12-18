// CustomButton.js
import React from "react";
import { Button } from "primereact/button";

const CustomButton = ({ label, className, }) => {
  return <Button label={label} className={className}  />;
};

export default CustomButton;
