import React from "react";
import { InputText } from "primereact/inputtext";
import "../../assets/styles/configurations.css";

const ConfigurationAdd = () => {
  return (
    <>
      <div className="input-group"></div>
      <div className="input-container">
        <InputText id="name" placeholder="Name" style={{ width: "40%" }} />
        <InputText
          id="description"
          placeholder="Description"
          style={{ width: "40%" }}
        />
      </div>
    </>
  );
};

export default ConfigurationAdd;
