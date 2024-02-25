// CustomButton.js
import React from "react";
import { Button } from "primereact/button";

const CustomButton = ({
  label,
  className,
  size = "small",
  onClick,
  disabled,
}) => {
  return (
    <Button
      className={className}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      {" "}
      <span style={{ textAlign: "center" }}>{label}</span>
    </Button>
  );
};

export default CustomButton;
