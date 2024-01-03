// CustomButton.js
import React from "react";
import { Button } from "primereact/button";

const CustomButton = ({ label, className, size = "small" ,onClick}) => {
  return <Button className={className} size={size} onClick={onClick}> <span style={{marginLeft:"-5px"}}>{label}</span></Button>;
};

export default CustomButton;
