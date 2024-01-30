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
  fetchApiMode
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
    DefaultColumns: "",
    ReportParam: "",
    SpParam: "",
    InvisibleColumns: "",
    ColorColumn: "",
    CmdType: 0,
    ApiColumns: ""
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

  const dataApiMode = useSelector((state) => state.dataApiMode.dataApiMode);

  const dataApiModeArray = Object.entries(dataApiMode).map(
    ([key, value]) => ({
      key,
      value,
    })
  );

  console.log("dataApiMode",dataApiMode);

  useEffect(() => {
    dispatch(fetchViewMode());
    dispatch(fetchApiMode());
  }, []);

  useEffect(() => {
    if (isAddClicked) {
      dispatch(mainSlice.actions.setIsEditMode(false));
      setFormData((prevFormData) => ({
        ...prevFormData,
        Name: "",
        Describtion: "",
        MainColumnIDName:"",
        ColorColumn:"",
        GroupName:"",
        QR:"",
        tabCmd:"",
        InvisibleColumns:"",
        DefaultColumns:"",
        ApiColumns:"",
        SpParam:"",
        ReportParam:""
      }));
    } else if (selectedRow) {
      dispatch(mainSlice.actions.setIsEditMode(true));
      setFormData((prevFormData) => ({
        ...prevFormData,
        Name: selectedRow.Name,
        Describtion: selectedRow.Describtion,
        ViewMode: selectedRow.ViewMode,
        MainColumnIDName:selectedRow.MainColumnIDName,
        ColorColumn:selectedRow.ColorColumn,
        GroupName:selectedRow.GroupName,
        QR:selectedRow.QR,
        tabCmd:selectedRow.tabCmd,
        InvisibleColumns:selectedRow.InvisibleColumns,
        DefaultColumns:selectedRow.DefaultColumns,
        ApiColumns:selectedRow.ApiColumns,
        SpParam:selectedRow.SpParam,
        CmdType:selectedRow.CmdType,
        ReportParam:selectedRow.ReportParam
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
          MainColumnIDName:"",
          ColorColumn:"",
          GroupName:"",
          QR:"",
          tabCmd:"",
          InvisibleColumns:"",
          DefaultColumns:"",
          ApiColumns:"",
          SpParam:"",
          CmdType:null,
          ReportParam:""
        }));
      })
      .catch(() => { });
  };

  const editCommand = () => {
    const updatedSelectedRow = {
      ...selectedRow,
      Name: formData.Name,
      Describtion: formData.Describtion,
      ViewMode: formData.ViewMode,
      MainColumnIDName:formData.MainColumnIDName,
      ColorColumn:formData.ColorColumn,
      GroupName:formData.GroupName,
      QR:formData.QR,
      tabCmd:formData.tabCmd,
      InvisibleColumns:formData.InvisibleColumns,
      DefaultColumns:formData.DefaultColumns,
      ApiColumns:formData.ApiColumns,
      SpParam:formData.SpParam,
      CmdType:formData.CmdType,
      ReportParam:formData.ReportParam
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
          MainColumnIDName:"",
          ColorColumn:"",
          GroupName:"",
          QR:"",
          tabCmd:"",
          InvisibleColumns:"",
          DefaultColumns:"",
          ApiColumns:"",
          SpParam:"",
          ReportParam:""
        });
      })
      .catch(() => { });
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
          <CustomInputText
           label="Main Column Id" 
           value={formData.MainColumnIDName}
           onChange={(e) => {
             handleChange("MainColumnIDName", e.target.value);
           }}
           />
        </div>
      </div>
      {/* ///////////////////////////LINE3///////////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5">
          <div>
            <CustomInputText
              label="Color Columns"
              value={formData.ColorColumn}
              onChange={(e) => {
                handleChange("ColorColumn", e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5" >
          <CustomInputText
            label="Group Name"
            value={formData.GroupName}
            onChange={(e) => {
              console.log("eeeee",e.target.value)
              handleChange("GroupName", e.target.value);
            }}
          />
        </div>
      </div>
        {/* ///////////////////////////LINE4///////////////////////////// */}
        <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5">
          <div>
            <CustomTextArea
              label="Color Columns"
              value={formData.QR}
              onChange={(e) => {
                handleChange("QR", e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5"  style={{marginTop:"20px"}}>
          <CustomInputText
            label="Report Command"
            value={formData.tabCmd}
            onChange={(e) => {
              console.log("tabCmd",e.target.value);
              handleChange("tabCmd", e.target.value);
            }}
          />
        </div>
        </div>
      {/* ///////////////////////////LINE5///////////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5">
          <div>
            <CustomTextArea
              label="Invisible Columns"
              value={formData.InvisibleColumns}
              onChange={(e) => {
                handleChange("InvisibleColumns", e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5"  style={{marginTop:"20px"}}>
          <CustomInputText
            label="Default Columns"
            value={formData.DefaultColumns}
            onChange={(e) => {
              console.log("tabCmd",e.target.value);
              handleChange("DefaultColumns", e.target.value);
            }}
          />
        </div>
      </div>
      {/* ///////////////////////////LINE6///////////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5">
          <div>
            <CustomTextArea
              label="Api Columns"
              value={formData.ApiColumns}
              onChange={(e) => {
                handleChange("ApiColumns", e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5"  style={{marginTop:"20px"}}>
          <CustomInputText
            label="Sp Parameters"
            value={formData.SpParam}
            onChange={(e) => {
              console.log("tabCmd",e.target.value);
              handleChange("SpParam", e.target.value);
            }}
          />
        </div>
      </div>
      {/* ///////////////////////////LINE7///////////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5" style={{marginTop:"20px"}}>
          <div>
          <CustomDropdown
              label="Api Mode"
              value={formData.CmdType}
              optionLabel="key"
              options={dataApiModeArray}
              onChange={(e) => {
                handleChange("CmdType", e.value);
              }}
            />
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <CustomTextArea
            label="Report Parameters"
            value={formData.CmdType}
            onChange={(e) => {
              console.log("ReportParam",e.target.value);
              handleChange("ReportParam", e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CommandsAdd;
