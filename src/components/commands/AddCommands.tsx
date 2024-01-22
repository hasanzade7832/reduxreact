import React, { useState } from "react";
import CustomInputText from "../globalComponents/main/inputCom";
import CustomTextArea from "../globalComponents/main/inputTextAreaComp";
import CustomDropdown from "../globalComponents/main/dropDownComp";
import AddBar from "../globalComponents/main/addBar";
import "../../../src/App.scss";

const CommandsAdd = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const addCommand = () => {
    ////console.log("addCommand");
  };

  return (
    <>
      <div>
        <AddBar onClick={addCommand} />
      </div>
      {/* ///////////////////////////LINE1///////////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5">
          <div>{/* <CustomInputText label="Name" /> */}</div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          {/* <CustomInputText label="Description" /> */}
        </div>
      </div>
      {/* ///////////////////////////LINE2///////////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5">
          <div>{/* <CustomInputText label="Name" /> */}</div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          {/* <CustomInputText label="Description" /> */}
        </div>
      </div>
      {/* ///////////////////////////LINE3///////////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5">
          <div>{/* <CustomInputText label="Name" /> */}</div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          {/* <CustomInputText label="Description" /> */}
        </div>
      </div>
      {/* ///////////////////////////LINE4///////////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5">
          <div>
            <CustomTextArea label="Description" id="Description" />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          {/* <CustomInputText label="Description" /> */}
        </div>
      </div>
      {/* ///////////////////////////LINE5///////////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5">
          <div>
            <CustomTextArea label="Description" id="Description" />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <CustomTextArea label="Description" id="Description" />
        </div>
      </div>
      {/* ///////////////////////////LINE6///////////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5">
          <div>
            <CustomTextArea label="Description" id="Description" />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <CustomTextArea label="Description" id="Description" />
        </div>
      </div>
      {/* ///////////////////////////LINE7///////////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5">
          <div>
            <CustomDropdown
              id="dd-city1"
              value={selectedCity}
              onChange={(e: any) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              label="name"
            />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <CustomTextArea label="Description" id="Description" />
        </div>
      </div>
    </>
  );
};

export default CommandsAdd;
