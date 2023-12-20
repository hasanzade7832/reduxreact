// CustomDropdown.js
import React from "react";
import { Dropdown } from "primereact/dropdown";

const CustomDropdown = ({
  id,
  value,
  onChange,
  options,
  optionLabel,
  label,
}) => {
  return (
    <span className="p-float-label" style={{ flex: "1" }}>
      <Dropdown
        inputId={id}
        value={value}
        onChange={onChange}
        options={options}
        optionLabel={optionLabel}
        className="drop-down drop-small"
        filter
        style={{ width: "80%" }}
      />
      <label htmlFor={id} style={{ marginTop: "-20px" }}>
        {label}
      </label>
    </span>
  );
};

export default CustomDropdown;
