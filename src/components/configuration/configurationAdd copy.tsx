import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import "../../assets/styles/configurations.css";

const ConfigurationAdd = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          marginLeft: "50px",
        }}
        className="card flex justify-content-center"
      >
        {/* /////////////////////Line1/////////////////////// */}
        <span
          className="p-float-label"
          style={{ flex: "1", marginRight: "10px" }}
        >
          <InputText
            id="username1"
            style={{ width: "90%" }}
            className="p-inputtext-sm custom-input"
          />
          <label htmlFor="username1">Name</label>
        </span>
        <span className="p-float-label" style={{ flex: "1" }}>
          <InputText
            id="username2"
            style={{ width: "90%" }}
            className="p-inputtext-sm custom-input"
          />
          <label htmlFor="username2">Description</label>
        </span>
      </div>
      {/* /////////////////////Line2/////////////////////// */}
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
          <Dropdown
            inputId="dd-city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            className="p-dropdown-sm w-90 md:w-14rem"
            filter
          />
          <label htmlFor="dd-city">Select a City</label>
        </span>
        <Button label="..." />
        <span className="p-float-label" style={{ flex: "1" }}>
          <Dropdown
            inputId="dd-city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            className="p-dropdown-sm w-90 md:w-14rem"
            filter
          />
          <label htmlFor="dd-city">Select a City</label>
        </span>
        <Button label="..." />
      </div>
    </>
  );
};

export default ConfigurationAdd;
