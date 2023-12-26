// CustomButton.js
import React from "react";
import { Button } from "primereact/button";

const CustomButton = ({ label, className, size = "small" ,onClick}) => {
  return <Button label={label} className={className} size={size} onClick={onClick} />;
};

export default CustomButton;
