import React, { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import CustomInputText from "../../globalComponents/main/inputCom";
import CustomTextArea from "../../globalComponents/main/inputTextAreaComp";
import CustomDropdown from "../../globalComponents/main/dropDownComp";
import AddBar from "../../globalComponents/main/addBar";
import EditBar from "../../globalComponents/main/editBar";
// import "../../../src/App.scss";
import {mainSlice} from "../../../redux/mainSlice";

const CommandsAdd = () => {

  const dispatch = useDispatch();
 
  const [formData, setFormData] = useState({
    ID: 0,
    Name: "",
    Describtion: "",
    MainColumnIDName: "",
    GroupName: "",
    gridCmd: "",
    tabCmd: "",
    QR: "",
    ViewMode: -1,
    DefaultColumns: null,
    ReportParam: null,
    projectIntensive:true
  });

   ////////////////////handle change datas//////////////////////////////////////////////
   const handleChange = (fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const isEditMode = useSelector((state)=>state.isEditMode.isEditMode);

  const isAddClicked = useSelector((state) => state.isAddClicked.isAddClicked);

  const selectedRow = useSelector((state) => state.selectedRowData.selectedRowData);

  useEffect(()=>{
    if(isAddClicked){
      dispatch(mainSlice.actions.setIsEditMode(false));
    }else if(selectedRow){
      dispatch(mainSlice.actions.setIsEditMode(true));
    }
  },[isAddClicked,selectedRow,]);

  const addCommand = () => {
    //////console.log("addCommand");
  };

  const editCommand = () => {

  };

  return (
    <>
      <div>
        {isEditMode ? (
          <EditBar onClick={editCommand} />
        ) : (
          <AddBar onClick={addCommand} />
        )}

      </div>
      {/* ///////////////////////////LINE1///////////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5">
          <div>
            <CustomInputText 
             label="Name"
             onChange={(e) => handleChange("Name", e.target.value)}
              />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <CustomInputText 
          label="Description" 
          onChange={(e) => handleChange("Description", e.target.value)}/>
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
