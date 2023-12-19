import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import CustomInputText from "../globalComponents/inputCom";
import CustomDropdown from "../globalComponents/dropDownComp";
import CustomButton from "../globalComponents/buttonComp";
import Box from "../../components/globalComponents/box";
import "../../assets/styles/configurations.css";
import { Dialog } from "primereact/dialog";
import ContentBoxDialog from "../configuration/selectBoxConfiguration";

const ConfigurationAdd = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const showDialog = () => {
    setDialogVisible(true);
  };

  const hideDialog = () => {
    setDialogVisible(false);
  };

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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "40px",
            marginRight: "50px",
          }}
        >
          <Box dialogData={showDialog} titleBox={"Default Action Buttons"} />
          <Box dialogData={showDialog} titleBox={"Letter Action Buttons"} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: "40px",
            marginRight: "50px",
          }}
        >
          <Box dialogData={showDialog} titleBox={"Meeting Action Buttons"} />
          <div
            style={{
              background: "#fff",
              width: "38%",
              height: "100px",
              position: "relative",
            }}
          ></div>
        </div>
      </div>
      <Dialog
        style={{ width: "50vw" }}
        visible={dialogVisible}
        onHide={hideDialog}
        header="Add Configuration"
        resizable={true}
        maximizable={true}
      >
        <ContentBoxDialog />
      </Dialog>
    </>
  );
};

export default ConfigurationAdd;
