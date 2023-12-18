import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import CustomInputText from "../globalComponents/inputCom";
import CustomDropdown from "../globalComponents/dropDownComp";
import CustomButton from "../globalComponents/buttonComp";
import Box from "../../components/globalComponents/box"
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
      {/* /////////////////////Line1/////////////////////// */}
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          marginLeft: "50px",
        }}
        className="card flex justify-content-center"
      >
        <CustomInputText id="username1" label="Name" />
        <CustomInputText id="username2" label="Description" />
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
        <CustomDropdown
          id="dd-city1"
          value={selectedCity}
          onChange={(e: any) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          label="Program Template"
        />
        <CustomButton label="..." className="button-small" />
        <div style={{ marginRight: "90px" }}></div>
        <CustomDropdown
          id="dd-city1"
          value={selectedCity}
          onChange={(e: any) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          label="Program Template"
        />
        <CustomButton label="..." className="button-small" />
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
        <CustomDropdown
          id="dd-city1"
          value={selectedCity}
          onChange={(e: any) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          label="Program Template"
        />
        <CustomButton label="..." className="button-small" />
        <div style={{ marginRight: "90px" }}></div>
        <CustomDropdown
          id="dd-city1"
          value={selectedCity}
          onChange={(e: any) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          label="Program Template"
        />
        <CustomButton label="..." className="button-small" />
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
        <CustomDropdown
          id="dd-city1"
          value={selectedCity}
          onChange={(e: any) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          label="Program Template"
        />
        <CustomButton label="..." className="button-small" />
        <div style={{ marginRight: "90px" }}></div>
        <CustomDropdown
          id="dd-city1"
          value={selectedCity}
          onChange={(e: any) => setSelectedCity(e.value)}
          options={cities}
          optionLabel="name"
          label="Program Template"
        />
        <CustomButton label="..." className="button-small" />
        <div style={{ marginRight: "90px" }}></div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "40px", marginRight: "50px" }}>
          <Box />
          <Box />
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "40px", marginRight: "50px" }}>
          <Box />
          <div style={{ background: '#fff', width: '38%', height: '100px', position: 'relative' }}>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfigurationAdd;
