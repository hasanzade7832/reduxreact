import React from "react";
import { InputText } from "primereact/inputtext";

const CustomInputText = ({ label, value, onChange, disabled }) => {
  return (
    <span className="p-float-label" style={{ flex: "1", marginRight: "10px" }}>
      <InputText
        value={value}
        onChange={onChange}
        style={{ width: "100%" }}
        className="custom-input p-inputtext-sm"
        disabled = {disabled}
      />
      <label style={{ fontSize: "0.8rem" }}>{label}</label>
    </span>
  );
};

export default CustomInputText;
