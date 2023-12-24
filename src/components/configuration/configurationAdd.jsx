import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomInputText from "../globalComponents/inputCom";
import CustomDropdown from "../globalComponents/dropDownComp";
import CustomButton from "../globalComponents/buttonComp";
import Box from "../globalComponents/box";
import "../../assets/styles/configurations.css";
import { Dialog } from "primereact/dialog";
import ContentBoxDialog from "./selectBoxConfiguration";
import projectServices from "../services/project.services";
import { fetchConfiguration } from "../../redux/configuration/configurationSlice";
import { fetchProgramTemplate } from "../../redux/programtemplate/programtemplateSlice";
import AddBar from "../globalComponents/addBar";

const ConfigurationAdd = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedProgramTemplate, setSelectedProgramTemplate] = useState(null);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    ID: 0,
    LastModified: null,
    ModifiedById: null,
    Name: "",
    LetterBtns: "",
    MeetingBtns: "",
    DefaultBtn: "",
    EnityTypeIDForLessonLearn: null,
    EnityTypeIDForProcesure: null,
    WFTemplateIDForLessonLearn: null,
    FirstIDProgramTemplate: null,
    EnityTypeIDForTaskCommnet: null,
    SelMenuIDForMain: null,
    IsVisible: true,
    Description: "",
  });

  const [selectedCity, setSelectedCity] = useState();

  // useEffect(() => {
  //   setSelectedCity(formData.FirstIDProgramTemplate);
  // }, [formData.FirstIDProgramTemplate]);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const dataProgram = useSelector(
    (state) => state.dataProgramTemplate.dataProgramTemplate
  );

  useEffect(() => {
    dispatch(fetchProgramTemplate());
  }, []);

  const showDialog = () => {
    setDialogVisible(true);
  };

  const hideDialog = () => {
    setDialogVisible(false);
  };

  const handleChange = (fieldName, value) => {
    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [fieldName]: value,
      };

      return updatedFormData;
    });
  };

  const addConfiguration = () => {
    projectServices
      .insertSetting(formData)
      .then((res) => {
        dispatch(fetchConfiguration());
        const selectedProgramTemplateID = dataProgram.find(
          (programTemplate) => programTemplate.Name === selectedProgramTemplate
        ).ID;

        formData.FirstIDProgramTemplate = selectedProgramTemplateID;
      })
      .catch(() => {});
  };

  return (
    <>
      {/* ////////////////////////Add Line//////////////////*/}
      <div>
        <AddBar onClick={addConfiguration} />
      </div>
      {/* /////////////////////Line1/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="col-5">
          <CustomInputText
            value={formData.Name}
            onChange={(e) => handleChange("Name", e.target.value)}
            label="Name"
          />
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <CustomInputText
            value={formData.Description}
            onChange={(e) => handleChange("Description", e.target.value)}
            label="Description"
          />
        </div>
      </div>
      {/* /////////////////////Line2/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="flex col-5">
          <CustomDropdown
            id="ID"
            value={selectedProgramTemplate}
            options={dataProgram}
            optionLabel="Name"
            label="Program Template"
            onChange={(e) => {
              setSelectedProgramTemplate(e.value);
              setFormData({ ...formData, FirstIDProgramTemplate: e.value.ID });
            }}
          />
        </div>
        <div className="col-1"></div>
        <div className="col-5"></div>
      </div>
      {/* /////////////////////Line3/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="flex col-5">
          <CustomButton label="..." className="button-small" />
        </div>
        <div className="col-1"></div>
        <div className="flex col-5">
          <CustomButton label="..." className="button-small" />
        </div>
      </div>
      {/* /////////////////////Line4/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="flex col-5">
          <CustomButton label="..." className="button-small" />
        </div>
        <div className="col-1"></div>
        <div className="flex col-5">
          <CustomButton label="..." className="button-small" />
        </div>
      </div>

      {/* /////////////////////Line5/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="col-5">
          <Box dialogData={showDialog} titleBox={"Default Action Buttons"} />
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <Box dialogData={showDialog} titleBox={"Letter Action Buttons"} />
        </div>
      </div>
      {/* /////////////////////Line6/////////////////////// */}
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
