import React from "react";
import { InputText } from "primereact/inputtext";
import "../../assets/styles/configurations.css";

const ConfigurationAdd = () => {
  return (
    <div className="input-container">
      <span className="p-float-label">
        <InputText id="Name" className="p-inputtext-sm" />
        <label htmlFor="Name">Name</label>
      </span>
      <span className="p-float-label">
        <InputText id="Description" className="p-inputtext-sm" />
        <label htmlFor="Description">Description</label>
      </span>
    </div>
  );
};

export default ConfigurationAdd;
