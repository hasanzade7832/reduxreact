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
import { fetchConfiguration , fetchAllRibbon , fetchWfTemplate , fetchEntityType} from "../../redux/configuration/configurationSlice";
import { fetchProgramTemplate } from "../../redux/programtemplate/programtemplateSlice";
import {mainSlice} from "../../redux/mainSlice"
import AddBar from "../globalComponents/addBar";

const ConfigurationAdd = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedProgramTemplate, setSelectedProgramTemplate] = useState(null);
  const [selectedDefaultRibbon, setselectedDefaultRibbon] = useState(null);
  const [selectedFormTemplate, setSelectedFormTemplate] = useState(null);
  const [selectedWfTemplate, setSelectedWfTemplate] = useState(null);
  const [selectedTaskComment, setSelectedTaskComment] = useState(null);
  const [selectedProcedureForm, setSelectedProcedureForm] = useState(null);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    ID: 0,
    LastModified: null,
    ModifiedById: null,
    Name: "",
    LetterBtns: "",
    MeetingBtns: "",
    DefaultBtn: "",
    EnityTypeIDForLessonLearn:null,
    EnityTypeIDForProcesure: null,
    WFTemplateIDForLessonLearn: null,
    FirstIDProgramTemplate: null,
    EnityTypeIDForTaskCommnet: null,
    SelMenuIDForMain: null,
    IsVisible: true,
    Description: "",
  });


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

  const dataRibbon = useSelector((state) => state.dataRibbon.dataRibbon);
  console.log("dataRibbon", dataRibbon);

  const dataFormTemplate = useSelector((state)=>state.dataEntityType.dataEntityType);
  console.log("dataFormTemplate",dataFormTemplate);

  const dataWfTemplate = useSelector((state)=>state.dataWfTemplate.dataWfTemplate)

  useEffect(() => {
    dispatch(fetchProgramTemplate());
    dispatch(fetchAllRibbon());
    dispatch(fetchWfTemplate());
    dispatch(fetchEntityType());
  }, []);

  const showDialog = () => {
    setDialogVisible(true);
    dispatch(mainSlice.actions.setIsVisibleBox(true));
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

        const selectedRibbonId = dataRibbon.find((ribbon) => ribbon.Name === selectedDefaultRibbon).ID;

        const selectedFormTemplateId = dataFormTemplate.find((formTemplate)=>formTemplate.Name === selectedFormTemplateId).ID;

        const selectedWfTemplateId = dataWfTemplate.find((wfTemplate)=>wfTemplate.Name === selectedWfTemplate).ID;


        formData.FirstIDProgramTemplate = selectedProgramTemplateID;
        formData.SelMenuIDForMain = selectedRibbonId;
        formData.EnityTypeIDForLessonLearn = selectedFormTemplateId;
        formData.WFTemplateIDForLessonLearn = selectedWfTemplateId;
        
      })
      .catch(() => { });
  };
  
  const isVisibleBox = useSelector(
    (state) => state.isVisibleBox.isVisibleBox
  );

  const selectedNames = useSelector((state)=>state.selectedNameDoubleBox.selectedNameDoubleBox);
  console.log("selectedNames",typeof(selectedNames))


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
          <CustomButton label="..." className="button-small" />
        </div>
        <div className="flex col-1">
        </div>
        <div className="flex col-5">
          <CustomDropdown
            id="ID"
            value={selectedDefaultRibbon}
            options={dataRibbon}
            optionLabel="Name"
            label="Default Ribbon"
            onChange={(e) => {
              setselectedDefaultRibbon(e.value);
              setFormData({ ...formData, SelMenuIDForMain: e.value.ID });
            }}
          />
          <CustomButton label="..." className="button-small" />
        </div>
      </div>
      {/* /////////////////////Line3/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="flex col-5">
          <CustomDropdown
            id="ID"
            value={selectedFormTemplate}
            options={dataFormTemplate}
            optionLabel="Name"
            label="Lessons Learned Form Template"
            onChange={(e) => {
              setSelectedFormTemplate(e.value);
              setFormData({ ...formData, EnityTypeIDForLessonLearn: e.value.ID });
            }}
          />
          <CustomButton label="..." className="button-small" />
        </div>
        <div className="flex col-1">
        </div>
        <div className="flex col-5">
          <CustomDropdown
            id="ID"
            value={selectedWfTemplate}
            options={dataWfTemplate}
            optionLabel="Name"
            label="Lessons Learned Af Template"
            onChange={(e) => {
              setSelectedWfTemplate(e.value);
              setFormData({ ...formData, WFTemplateIDForLessonLearn: e.value.ID });
            }}
          />
          <CustomButton label="..." className="button-small" />
        </div>
      </div>
      {/* /////////////////////Line4/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="flex col-5">
        <CustomDropdown
            id="ID"
            value={selectedTaskComment}
            options={dataFormTemplate}
            optionLabel="Name"
            label="Comment Form Template"
            onChange={(e) => {
              setSelectedTaskComment(e.value);
              setFormData({ ...formData, EnityTypeIDForTaskCommnet: e.value.ID });
            }}
          />
          <CustomButton label="..." className="button-small" />
        </div>
        <div className="flex col-1">
        </div>
        <div className="flex col-5">
        <CustomDropdown
            id="ID"
            value={selectedProcedureForm}
            options={dataFormTemplate}
            optionLabel="Name"
            label="procedure Form Template"
            onChange={(e) => {
              setSelectedProcedureForm(e.value);
              setFormData({ ...formData, EnityTypeIDForProcesure: e.value.ID });
            }}
          />
          <CustomButton label="..." className="button-small" />
        </div>
      </div>

      {/* /////////////////////Line5/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="col-5">
          <Box dialogData={showDialog} titleBox={"Default Action Buttons"} selectedNames={selectedNames}/>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <Box dialogData={showDialog} titleBox={"Letter Action Buttons"} selectedNames={selectedNames}/>
        </div>
      </div>
      {/* /////////////////////Line6/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="col-5">
          <Box dialogData={showDialog} titleBox={"Meeting Action Buttons"} selectedNames={selectedNames}/>
        </div>
        <div className="col-1"></div>
        <div className="col-5"></div>
      </div>
      {/* /////////////////////Dialog/////////////////////// */}
      {isVisibleBox &&
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
      }
      
    </>
  );
};

export default ConfigurationAdd;
