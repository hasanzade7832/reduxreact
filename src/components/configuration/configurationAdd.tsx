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
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="col-5">
          <CustomInputText id="username1" label="Name" />
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <CustomInputText id="username2" label="Description" />
        </div>
      </div>
      {/* /////////////////////Line2/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="flex col-5">
          <CustomDropdown
            id="dd-city1"
            value={selectedCity}
            onChange={(e: any) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            label="Program Template"
          />
          <CustomButton label="..." className="button-small" />
        </div>
        <div className="col-1"></div>
        <div className="flex col-5">
          <CustomDropdown
            id="dd-city1"
            value={selectedCity}
            onChange={(e: any) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            label="Program Template"
          />
          <CustomButton label="..." className="button-small" />
        </div>
      </div>
      {/* /////////////////////Line3/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="flex col-5">
          <CustomDropdown
            id="dd-city1"
            value={selectedCity}
            onChange={(e: any) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            label="Program Template"
          />
          <CustomButton label="..." className="button-small" />
        </div>
        <div className="col-1"></div>
        <div className="flex col-5">
          <CustomDropdown
            id="dd-city1"
            value={selectedCity}
            onChange={(e: any) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            label="Program Template"
          />
          <CustomButton label="..." className="button-small" />
        </div>
      </div>
      {/* /////////////////////Line4/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="flex col-5">
          <CustomDropdown
            id="dd-city1"
            value={selectedCity}
            onChange={(e: any) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            label="Program Template"
          />
          <CustomButton label="..." className="button-small" />
        </div>
        <div className="col-1"></div>
        <div className="flex col-5">
          <CustomDropdown
            id="dd-city1"
            value={selectedCity}
            onChange={(e: any) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            label="Program Template"
          />
          <CustomButton label="..." className="button-small" />
        </div>
      </div>
      {/* /////////////////////Line5/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="flex col-5">
          <CustomDropdown
            id="dd-city1"
            value={selectedCity}
            onChange={(e: any) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            label="Program Template"
          />
          <CustomButton label="..." className="button-small" />
        </div>
        <div className="col-1"></div>
        <div className="flex col-5">
          <CustomDropdown
            id="dd-city1"
            value={selectedCity}
            onChange={(e: any) => setSelectedCity(e.value)}
            options={cities}
            optionLabel="name"
            label="Program Template"
          />
          <CustomButton label="..." className="button-small" />
        </div>
      </div>
      {/* /////////////////////Line6/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="col-5">
          <Box dialogData={showDialog} titleBox={"Default Action Buttons"} />
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <Box dialogData={showDialog} titleBox={"Letter Action Buttons"} />
        </div>
      </div>
      {/* /////////////////////Line7/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="col-5">
          <Box dialogData={showDialog} titleBox={"Meeting Action Buttons"} />
        </div>
        <div className="col-1"></div>
        <div className="col-5"></div>
      </div>
      {/* /////////////////////Dialog/////////////////////// */}
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
