import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomInputText from "../globalComponents/inputCom";
import Box from "../globalComponents/box";
import "../../assets/styles/configurations.css";
import { Dialog } from "primereact/dialog";
import ContentBoxDialog from "./selectBoxConfiguration";
import projectServices from "../services/project.services";
import {
  fetchConfiguration,
  fetchAllRibbon,
  fetchWfTemplate,
  fetchEntityType,
} from "../../redux/configuration/configurationSlice";
import { fetchProgramTemplate } from "../../redux/programtemplate/programtemplateSlice";
import { mainSlice } from "../../redux/mainSlice";
import AddBar from "../globalComponents/addBar";
import DropdownComponentwithButton from "../globalComponents/dropDownWithButton";

const ConfigurationAdd = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogProgramTemplate, setDialogProgramTemplate] = useState(false);
  const [dialogDefaultRibbon, setDefaultRibbon] = useState(false);
  const [dialogAfTemplate, setDialogAfTemplate] = useState(false);
  const [dialogLessonForm, setDialogForm] = useState(false);
  const [dialogCommentForm, setDialogCommentForm] = useState(false);
  const [dialogProcedureForm, setDialogProcedureForm] = useState(false);
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
    EnityTypeIDForLessonLearn: null,
    EnityTypeIDForProcesure: null,
    WFTemplateIDForLessonLearn: null,
    FirstIDProgramTemplate: null,
    EnityTypeIDForTaskCommnet: null,
    SelMenuIDForMain: null,
    IsVisible: true,
    Description: "",
  });

  const dataProgram = useSelector(
    (state) => state.dataProgramTemplate.dataProgramTemplate
  );

  const dataRibbon = useSelector((state) => state.dataRibbon.dataRibbon);

  const dataFormTemplate = useSelector(
    (state) => state.dataEntityType.dataEntityType
  );

  const dataWfTemplate = useSelector(
    (state) => state.dataWfTemplate.dataWfTemplate
  );

  useEffect(() => {
    dispatch(fetchProgramTemplate());
    dispatch(fetchAllRibbon());
    dispatch(fetchWfTemplate());
    dispatch(fetchEntityType());
  }, []);

  const showDialogDefaultButton = () => {
    setDialogVisible(true);
    dispatch(mainSlice.actions.setIsVisibleBox(true));
    dispatch(mainSlice.actions.setSelectedBoxName("DefaultButton"));
  };

  const showDialogLetterButton = () => {
    setDialogVisible(true);
    dispatch(mainSlice.actions.setIsVisibleBox(true));
    dispatch(mainSlice.actions.setSelectedBoxName("LetterButton"));
  };

  const showDialogMeetingButton = () => {
    setDialogVisible(true);
    dispatch(mainSlice.actions.setIsVisibleBox(true));
    dispatch(mainSlice.actions.setSelectedBoxName("MeetingButton"));
  };

  const hideDialog = () => {
    setDialogVisible(false);
    setDialogProgramTemplate(false);
    setDefaultRibbon(false);
    setDialogAfTemplate(false);
    setDialogForm(false);
    setDialogCommentForm(false);
    setDialogProcedureForm(false);
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

  const isVisibleBox = useSelector((state) => state.isVisibleBox.isVisibleBox);

  const selectedNamesDefaultButtons = useSelector(
    (state) => state.selectedNameDefaultButton.selectedNameDefaultButton
  );
  const selectedIdDefaultButton = useSelector(
    (state) => state.selectedIdDefaultButton.selectedIdDefaultButton
  );

  const selectedNamesLetterButtons = useSelector(
    (state) => state.selectedNameLetterButton.selectedNameLetterButton
  );
  const selectedIdLetterButtons = useSelector(
    (state) => state.selectedIdLetterButton.selectedIdLetterButton
  );

  const selectedNamesMeetingsButtons = useSelector(
    (state) => state.selectedNameMeetingButton.selectedNameMeetingButton
  );
  const selectedIdMeetingsButton = useSelector(
    (state) => state.selectedIdMeetingButton.selectedIdMeetingButton
  );

  const addConfiguration = () => {
    const defaultBtnValues = selectedIdDefaultButton.join("|");
    const letterBtnValues = selectedIdLetterButtons.join("|");
    const meetingBtnValues = selectedIdMeetingsButton.join("|");

    formData.DefaultBtn = defaultBtnValues;
    formData.LetterBtns = letterBtnValues;
    formData.MeetingBtns = meetingBtnValues;

    console.log("formData", formData);

    projectServices
      .insertSetting(formData)
      .then((res) => {
        dispatch(fetchConfiguration());
        const selectedProgramTemplateID = dataProgram.find(
          (programTemplate) => programTemplate.Name === selectedProgramTemplate
        ).ID;

        const selectedRibbonId = dataRibbon.find(
          (ribbon) => ribbon.Name === selectedDefaultRibbon
        ).ID;

        const selectedFormTemplateId = dataFormTemplate.find(
          (formTemplate) => formTemplate.Name === selectedFormTemplateId
        ).ID;

        const selectedWfTemplateId = dataWfTemplate.find(
          (wfTemplate) => wfTemplate.Name === selectedWfTemplate
        ).ID;

        formData.FirstIDProgramTemplate = selectedProgramTemplateID;
        formData.SelMenuIDForMain = selectedRibbonId;
        formData.EnityTypeIDForLessonLearn = selectedFormTemplateId;
        formData.WFTemplateIDForLessonLearn = selectedWfTemplateId;
      })
      .catch(() => {});
  };

  const funcDialogProgramTemplate = () => {
    setDialogProgramTemplate(true);
    dispatch(mainSlice.actions.setNameofDialogTable("programTemplate"));
  };

  const funcDialogDefaultRibbon = () => {
    setDefaultRibbon(true);
    dispatch(mainSlice.actions.setNameofDialogTable("defaultRibbon"));
  };

  const funcDialogAfTemplate = () => {
    setDialogAfTemplate(true);
    dispatch(mainSlice.actions.setNameofDialogTable("afTemplate"));
  };

  const funcDialogLessonForms = () => {
    setDialogForm(true);
    dispatch(mainSlice.actions.setNameofDialogTable("lessonForms"));
  };

  const funcDialogCommentForm = () => {
    setDialogCommentForm(true);
    dispatch(mainSlice.actions.setNameofDialogTable("lessonForms"));
  };

  const funcDialogProcedureForm = () => {
    setDialogProcedureForm(true);
    dispatch(mainSlice.actions.setNameofDialogTable("lessonForms"));
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
          <DropdownComponentwithButton
            value={selectedProgramTemplate}
            options={dataProgram}
            optionLabel="Name"
            label="Program Template"
            onChange={(e) => {
              setSelectedProgramTemplate(e.value);
              setFormData({ ...formData, FirstIDProgramTemplate: e.value.ID });
            }}
            onButtonClick={funcDialogProgramTemplate}
            showDialog={dialogProgramTemplate}
            hideDialog={hideDialog}
          />
        </div>
        <div className="flex col-1"></div>
        <div className="flex col-5">
          <DropdownComponentwithButton
            value={selectedDefaultRibbon}
            options={dataRibbon}
            optionLabel="Name"
            label="Default Ribbon"
            onChange={(e) => {
              setselectedDefaultRibbon(e.value);
              setFormData({ ...formData, SelMenuIDForMain: e.value.ID });
            }}
            onButtonClick={funcDialogDefaultRibbon}
            showDialog={dialogDefaultRibbon}
            hideDialog={hideDialog}
          />
        </div>
      </div>
      {/* /////////////////////Line3/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="flex col-5">
          <DropdownComponentwithButton
            value={selectedFormTemplate}
            options={dataFormTemplate}
            optionLabel="Name"
            label="Lessons Learned Form Template"
            onChange={(e) => {
              setSelectedFormTemplate(e.value);
              setFormData({
                ...formData,
                EnityTypeIDForLessonLearn: e.value.ID,
              });
            }}
            onButtonClick={funcDialogLessonForms}
            showDialog={dialogLessonForm}
            hideDialog={hideDialog}
          />
        </div>
        <div className="flex col-1"></div>
        <div className="flex col-5">
          <DropdownComponentwithButton
            value={selectedWfTemplate}
            options={dataWfTemplate}
            optionLabel="Name"
            label="Lessons Learned Af Template"
            onChange={(e) => {
              setSelectedWfTemplate(e.value);
              setFormData({
                ...formData,
                WFTemplateIDForLessonLearn: e.value.ID,
              });
            }}
            onButtonClick={funcDialogAfTemplate}
            showDialog={dialogAfTemplate}
            hideDialog={hideDialog}
          />
        </div>
      </div>
      {/* /////////////////////Line4/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="flex col-5">
          <DropdownComponentwithButton
            value={selectedTaskComment}
            options={dataFormTemplate}
            optionLabel="Name"
            label="Comment Form Template"
            onChange={(e) => {
              setSelectedTaskComment(e.value);
              setFormData({
                ...formData,
                EnityTypeIDForTaskCommnet: e.value.ID,
              });
            }}
            onButtonClick={funcDialogCommentForm}
            showDialog={dialogCommentForm}
            hideDialog={hideDialog}
          />
        </div>
        <div className="flex col-1"></div>
        <div className="flex col-5">
          <DropdownComponentwithButton
            value={selectedProcedureForm}
            options={dataFormTemplate}
            optionLabel="Name"
            label="procedure Form Template"
            onChange={(e) => {
              setSelectedProcedureForm(e.value);
              setFormData({ ...formData, EnityTypeIDForProcesure: e.value.ID });
            }}
            onButtonClick={funcDialogProcedureForm}
            showDialog={dialogProcedureForm}
            hideDialog={hideDialog}
          />
        </div>
      </div>

      {/* /////////////////////Line5/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="col-5">
          <Box
            dialogData={showDialogDefaultButton}
            titleBox={"Default Action Buttons"}
            selectedNames={selectedNamesDefaultButtons}
          />
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <Box
            dialogData={showDialogLetterButton}
            titleBox={"Letter Action Buttons"}
            selectedNames={selectedNamesLetterButtons}
          />
        </div>
      </div>
      {/* /////////////////////Line6/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "50px" }}>
        <div className="col-5">
          <Box
            dialogData={showDialogMeetingButton}
            titleBox={"Meeting Action Buttons"}
            selectedNames={selectedNamesMeetingsButtons}
          />
        </div>
        <div className="col-1"></div>
        <div className="col-5"></div>
      </div>
      {/* /////////////////////Dialog/////////////////////// */}
      {isVisibleBox && (
        <Dialog
          style={{ width: "50vw" }}
          visible={dialogVisible}
          onHide={hideDialog}
          resizable={true}
          maximizable={true}
        >
          <ContentBoxDialog />
        </Dialog>
      )}
    </>
  );
};

export default ConfigurationAdd;
