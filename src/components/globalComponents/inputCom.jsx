import React from "react";
import { InputText } from "primereact/inputtext";

const CustomInputText = ({ label, value, onChange }) => {
  return (
    <span className="p-float-label" style={{ flex: "1", marginRight: "10px" }}>
      <InputText
        value={value}
        onChange={onChange}
        style={{ width: "100%" }}
        className="custom-input"
      />
      <label>{label}</label>
    </span>
  );
};

export default CustomInputText;
