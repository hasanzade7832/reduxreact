import React from "react";
import { InputText } from "primereact/inputtext";
import "../../assets/styles/configurations.css";

const ConfigurationAdd = () => {
  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        marginLeft: "50px",
      }}
      className="card flex justify-content-center"
    >
      <span
        className="p-float-label"
        style={{ flex: "1", marginRight: "10px" }}
      >
        <InputText
          id="username1"
          style={{ width: "80%" }}
          className="p-inputtext-sm"
        />
        <label htmlFor="username1">Name</label>
      </span>
      <span className="p-float-label" style={{ flex: "1" }}>
        <InputText
          id="username2"
          style={{ width: "80%" }}
          className="p-inputtext-sm"
        />
        <label htmlFor="username2">Description</label>
      </span>
    </div>
  );
};

export default ConfigurationAdd;
