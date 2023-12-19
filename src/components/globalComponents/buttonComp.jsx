// CustomButton.js
import React from "react";
import { Button } from "primereact/button";

const CustomButton = ({ label, className, size = "small" }) => {
  return <Button label={label} className={className} size={size} />;
};

export default CustomButton;
