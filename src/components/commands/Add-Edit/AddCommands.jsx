import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomInputText from "../../globalComponents/main/inputCom";
import CustomTextArea from "../../globalComponents/main/inputTextAreaComp";
import CustomDropdown from "../../globalComponents/main/dropDownComp";
import AddBar from "../../globalComponents/main/addBar";
import EditBar from "../../globalComponents/main/editBar";
import { mainSlice } from "../../../redux/mainSlice";
import {
  fetchCommands,
  fetchViewMode,
} from "../../../redux/commands/commandsSlice";
import projectServices from "../../services/project.services";
import { Toast } from "primereact/toast";

const CommandsAdd = () => {
  const dispatch = useDispatch();

  const toast = useRef(null);

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
    projectIntensive: true,
  });

  ////////////////////handle change datas//////////////////////////////////////////////
  const handleChange = (fieldName, value) => {
    console.log("fildName", fieldName, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const isEditMode = useSelector((state) => state.isEditMode.isEditMode);

  const isAddClicked = useSelector((state) => state.isAddClicked.isAddClicked);

  const selectedRow = useSelector(
    (state) => state.selectedRowData.selectedRowData
  );

  const dataViewMode = useSelector((state) => state.dataViewMode.dataViewMode);

  const dataViewModeArray = Object.entries(dataViewMode).map(
    ([key, value]) => ({
      key,
      value,
    })
  );

  useEffect(() => {
    dispatch(fetchViewMode());
  }, []);

  useEffect(() => {
    if (isAddClicked) {
      dispatch(mainSlice.actions.setIsEditMode(false));
      setFormData((prevFormData) => ({
        ...prevFormData,
        Name: "",
        Describtion: "",
        ViewMode: null,
      }));
    } else if (selectedRow) {
      dispatch(mainSlice.actions.setIsEditMode(true));
      setFormData((prevFormData) => ({
        ...prevFormData,
        Name: selectedRow.Name,
        Describtion: selectedRow.Describtion,
        ViewMode: selectedRow.ViewMode,
      }));
    }
  }, [isAddClicked, selectedRow]);

  const addCommand = () => {
    projectServices
      .insertCommand(formData)
      .then((res) => {
        dispatch(fetchCommands());
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item Added successfully",
        });

        setFormData((prevFormData) => ({
          ...prevFormData,
          Name: "",
          Describtion: "",
          ViewMode: null,
        }));
      })
      .catch(() => {});
  };

  const editCommand = () => {
    const updatedSelectedRow = {
      ...selectedRow,
      Name: formData.Name,
      Describtion: formData.Describtion,
      ViewMode: formData.ViewMode,
    };

    projectServices
      .updateCommand(updatedSelectedRow)
      .then((res) => {
        dispatch(fetchCommands());
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item Edited successfully",
        });
        setFormData({
          Name: "",
          Describtion: "",
        });
      })
      .catch(() => {});
  };

  return (
    <>
      <Toast ref={toast} position="top-right" />
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
              value={formData.Name}
              onChange={(e) => handleChange("Name", e.target.value)}
            />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <CustomInputText
            label="Description"
            value={formData.Describtion}
            onChange={(e) => handleChange("Describtion", e.target.value)}
          />
        </div>
      </div>
      {/* ///////////////////////////LINE2///////////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5">
          <div>
            <CustomDropdown
              label="View Mode"
              value={formData.ViewMode}
              optionLabel="key"
              options={dataViewModeArray}
              onChange={(e) => {
                handleChange("ViewMode", e.value);
              }}
            />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <CustomInputText label="Main Column Id" />
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
            <CustomDropdown id="dd-city1" optionLabel="name" label="name" />
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
