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
  disabled,
}) => {
  return (
    <span className="p-float-label" style={{ flex: "1" }}>
      <Dropdown
        inputId={id}
        value={value}
        onChange={onChange}
        options={options}
        optionLabel={optionLabel}
        className="drop-down"
        filter
        style={{ width: "100%" }}
        placeholder=""
        disabled={disabled}
      />
      <label
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: "100%",
        }}
        htmlFor={id}
      >
        {label}
      </label>
    </span>
  );
};

export default CustomDropdown;
