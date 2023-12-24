// CustomInputText.tsx
import React, { FC } from "react";
import { InputTextarea } from "primereact/inputtextarea";

interface CustomInputTextProps {
  id: string;
  label: string;
}

const CustomInputText: FC<CustomInputTextProps> = ({ id, label }) => {
  return (
    <span className="p-float-label" style={{ flex: "1", marginRight: "10px" }}>
      <InputTextarea id={id} style={{ width: "100%" }} />
      <label htmlFor={id}>{label}</label>
    </span>
  );
};

export default CustomInputText;
