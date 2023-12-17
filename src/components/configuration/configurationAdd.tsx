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
            style={{ width: "80%" }}
            className="p-inputtext-sm custom-input"
            max={50}
          />
          <label htmlFor="username1">Name</label>
        </span>
        <span className="p-float-label" style={{ flex: "1" }}>
          <InputText
            id="username2"
            style={{ width: "80%" }}
            className="p-inputtext-sm custom-input"
            max={50}
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
        <span className="p-float-label" style={{ flex: "1" }}>
          <Dropdown
            inputId="dd-city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            className="p-dropdown-sm w-90 md:w-14rem drop-down"
            filter
          />
          <label htmlFor="dd-city">Program Template</label>
        </span>
        <Button label="..." className="p-button-sm" />
        <div style={{ marginRight: "90px" }}></div>
        <span className="p-float-label" style={{ flex: "1" }}>
          <Dropdown
            inputId="dd-city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            className="p-dropdown-sm w-90 md:w-14rem drop-down"
            filter
          />
          <label htmlFor="dd-city">Default Ribbon</label>
        </span>
        <Button label="..." className="p-button-sm" />
        <div style={{ marginRight: "90px" }}></div>
      </div>
      {/* /////////////////////Line3/////////////////////// */}
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          marginLeft: "50px",
        }}
        className="card flex justify-content-center"
      >
        <span className="p-float-label" style={{ flex: "1" }}>
          <Dropdown
            inputId="dd-city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            className="p-dropdown-sm w-90 md:w-14rem drop-down"
            filter
          />
          <label htmlFor="dd-city">Lesson Learned Form Template</label>
        </span>
        <Button label="..." className="p-button-sm" />
        <div style={{ marginRight: "90px" }}></div>
        <span className="p-float-label" style={{ flex: "1" }}>
          <Dropdown
            inputId="dd-city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            className="p-dropdown-sm w-90 md:w-14rem drop-down"
            filter
          />
          <label htmlFor="dd-city">Lesson Learned AF Template</label>
        </span>
        <Button label="..." className="p-button-sm" />
        <div style={{ marginRight: "90px" }}></div>
      </div>
      {/* /////////////////////Line4/////////////////////// */}
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          marginLeft: "50px",
        }}
        className="card flex justify-content-center"
      >
        <span className="p-float-label" style={{ flex: "1" }}>
          <Dropdown
            inputId="dd-city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            className="p-dropdown-sm w-90 md:w-14rem drop-down"
            filter
          />
          <label htmlFor="dd-city">Comment Form Tempate</label>
        </span>
        <Button label="..." size="small" />
        <div style={{ marginRight: "90px" }}></div>
        <span className="p-float-label" style={{ flex: "1" }}>
          <Dropdown
            inputId="dd-city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            className="p-dropdown-sm w-90 md:w-14rem drop-down"
            filter
          />
          <label htmlFor="dd-city">Procedure Form Template</label>
        </span>
        <Button label="..." size="small" />
        <div style={{ marginRight: "90px" }}></div>
      </div>
    </>
  );
};

export default ConfigurationAdd;
