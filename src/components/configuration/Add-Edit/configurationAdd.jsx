import { useState, useEffect } from "react";
import { Dropdown } from 'primereact/dropdown';

import { useSelector, useDispatch } from "react-redux";
import CustomInputText from "../../globalComponents/main/inputCom";
import BoxDefaultButton from "../../globalComponents/box/boxDefaultButton";
import BoxLetterButton from "../../globalComponents/box/boxLetterButton";
import BoxMeetingButton from "../../globalComponents/box/boxMeetingButtons";
import "../../../assets/styles/configurations.css";
import { Dialog } from "primereact/dialog";
import ContentBoxDialog from "../tableBox/selectBoxConfiguration";
import projectServices from "../../services/project.services";
import {
  fetchConfiguration,
  fetchAllRibbon,
  fetchWfTemplate,
  fetchEntityType,
} from "../../../redux/configuration/configurationSlice";
import { fetchProgramTemplate } from "../../../redux/programtemplate/programtemplateSlice";
import { mainSlice } from "../../../redux/mainSlice";
import AddBar from "../../globalComponents/main/addBar";
import DropdownComponentwithButton from "../../globalComponents/main/dropDownWithButton";

const ConfigurationAdd = () => {
  const [dialogVisible, setDialogVisible] = useState(false);

  const dispatch = useDispatch();
  ////////////////object main data for add////////////////////////////////////////

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

  const isAddClicked = useSelector((state) => state.isAddClicked.isAddClicked);
  const selectedRow = useSelector(
    (state) => state.selectedRowData.selectedRowData
  );
  let subTabName = useSelector((state) => state.subTabName.selectedSubTab);

  const dataPrugTemplate = useSelector(
    (state) => state.dataConfiguration.dataPrugTemplate
  );

  const dataRibbon = useSelector(
    (state) => state.dataRibbon.dataRibbon
  );

  const programTemplateSelectedRow = useSelector(
    (state) => state.programTemplateSelectedRow.programTemplateSelectedRow
  );

  const programTemplateSelectedRowEdit = useSelector(
    (state) =>
      state.programTemplateSelectedRowEdit.programTemplateSelectedRowEdit
  );

  const defaultRibbonSelectedRow = useSelector(
    (state) => state.defaultRibbonSelectedRow.defaultRibbonSelectedRow
  );

  const defaultRibbonSelectedRowEdit = useSelector(
    (state) => state.defaultRibbonSelectedRowEdit.defaultRibbonSelectedRowEdit
  );

  console.log("defaultRibbonSelectedRowEdit",defaultRibbonSelectedRowEdit);


  useEffect(() => {
    if (isAddClicked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        Name: "",
        Description: "",
        FirstIDProgramTemplate:dispatch(mainSlice.actions.setProgramTemplateSelectedRowEdit()),
        SelMenuIDForMain:dispatch(mainSlice.actions.setDefaultRibbonSelectedRowEdit()),
      }));
    } else if (selectedRow) {
      //programTemplate
      const foundItemProgram = dataPrugTemplate.find(
        (item) => item.ID === selectedRow.FirstIDProgramTemplate
      );
      const dataProgramSelected = foundItemProgram ? foundItemProgram : null;
      dispatch(mainSlice.actions.setProgramTemplateSelectedRowEdit(dataProgramSelected));

      // defaultRibbon
      const foundItemRibbon = dataRibbon.find(
        (item) => item.ID === selectedRow.SelMenuIDForMain
      );
      const dataRibbonSelected = foundItemRibbon ? foundItemRibbon : null;
      console.log("dataRibbonSelected",dataRibbonSelected);
      dispatch(mainSlice.actions.setDefaultRibbonSelectedRowEdit(dataRibbonSelected));

      setFormData((prevFormData) => ({
        ...prevFormData,
        Name: selectedRow.Name,
        Description: selectedRow.Description,
        FirstIDProgramTemplate: programTemplateSelectedRowEdit,
        SelMenuIDForMain:defaultRibbonSelectedRowEdit
      }));
    }
  }, [isAddClicked, selectedRow, subTabName, programTemplateSelectedRowEdit ,defaultRibbonSelectedRowEdit]);

  

  ////////////////////handle change datas//////////////////////////////////////////////

  const handleChange = (fieldName, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  /////////////////////MAIN DATA//////////////////////////////////////////
  const dataProgram = useSelector(
    (state) => state.dataProgramTemplate.dataProgramTemplate
  );

  const dataFormTemplate = useSelector(
    (state) => state.dataEntityType.dataEntityType
  );

  const dataWfTemplate = useSelector(
    (state) => state.dataWfTemplate.dataWfTemplate
  );

  /////////////////////SELECTED ROW DATA///////////////////////////////////////////////////

  const formTemplateSelectedRow = useSelector(
    (state) => state.formTemplateSelectedRow.formTemplateSelectedRow
  );

  const afTemplateSelectedRow = useSelector(
    (state) => state.afTemplateSelectedRow.afTemplateSelectedRow
  );

  const commentFormSelectedRow = useSelector(
    (state) => state.commentFormSelectedRow.commentFormSelectedRow
  );

  const procedureFormSelectedRow = useSelector(
    (state) => state.procedureFormSelectedRow.procedureFormSelectedRow
  );

  const nameOfDialogTable = useSelector(
    (state) => state.nameofDialogTable.nameofDialogTable
  );

  /////////////////////////////Get main data//////////////////////////////////////////////////////////

  useEffect(() => {
    dispatch(fetchProgramTemplate());
    dispatch(fetchAllRibbon());
    dispatch(fetchWfTemplate());
    dispatch(fetchEntityType());
  }, []);

  ///////////////////////////Dialo Functions/////////////////////////////////////////////////////////

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
    dispatch(mainSlice.actions.setshowDialogProgramTemplate(false));
    dispatch(mainSlice.actions.setShowDialogDefaultRibbon(false));
    dispatch(mainSlice.actions.setShowDialogFormTemplate(false));
    dispatch(mainSlice.actions.setShowDialogAfTemplate(false));
    dispatch(mainSlice.actions.setShowDialogCommentForm(false));
    dispatch(mainSlice.actions.setShowDialogProcedureForm(false));
  };

  
  ///////////////////////BOX DATAS/////////////////////////////////////////////////////

  const isVisibleBox = useSelector((state) => state.isVisibleBox.isVisibleBox);

  const selectedNamesDefaultButtons = useSelector(
    (state) => state.selectedNameDefaultButton.selectedNameDefaultButton
  );

  const nameSelected = useSelector(
    (state) => state.selectedNames.selectedNames
  );
  // console.log("nameSelected", nameSelected);

  const selectedIdDefaultButton = useSelector(
    (state) => state.selectedIdDefaultButton.selectedIdDefaultButton
  );

  //console.log("YYYYYYYYYYYYY",selectedIdDefaultButton)

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

  //////////////ADD FUNCTION/////////////////////////////////////////////////////
  const selected = useSelector((state) => state.selectedNames.selectedNames);

  useEffect(() => {
  }, [selected]);

  const selectedId = useSelector(
    (state) => state.selectedIdDefaultButton.selectedIdDefaultButton
  );

  useEffect(() => {
  }, [selectedId]);

  const addConfiguration = () => {
    const defaultBtnValues = selectedId.join("|");
    const letterBtnValues = selectedIdLetterButtons.join("|");
    const meetingBtnValues = selectedIdMeetingsButton.join("|");

    formData.DefaultBtn = defaultBtnValues;
    formData.LetterBtns = letterBtnValues;
    formData.MeetingBtns = meetingBtnValues;
    formData.FirstIDProgramTemplate = programTemplateSelectedRow.ID;
    formData.SelMenuIDForMain = defaultRibbonSelectedRow.ID;
    formData.EnityTypeIDForLessonLearn = formTemplateSelectedRow.ID;
    formData.WFTemplateIDForLessonLearn = afTemplateSelectedRow.ID;
    formData.EnityTypeIDForTaskCommnet = commentFormSelectedRow.ID;
    formData.EnityTypeIDForProcesure = procedureFormSelectedRow.ID;
    

    projectServices
    .insertSetting(formData)
    .then((res) => {
      dispatch(fetchConfiguration());
      dispatch(mainSlice.actions.setProgramTemplateSelectedRowEdit())
      dispatch(mainSlice.actions.setprogramTemplateSelectedRow())
      dispatch(mainSlice.actions.setDefaultRibbonSelectedRowEdit())
      dispatch(mainSlice.actions.setDefaultRibbonSelectedRow())
      setFormData((prevFormData) => ({
        ...prevFormData,
        Name: "",
        Description:"",
      }));
    })
    .catch(() => {});
};

  //////////////////////Dialog Data/////////////////////////////////////////////

  const dialogProgramTemplate = useSelector(
    (state) => state.showDialogProgramTemplate.showDialogProgramTemplate
  );

  const dialogDefaultRibbon = useSelector(
    (state) => state.showDialogDefaultRibbon.showDialogDefaultRibbon
  );

  const dialogFormTemplate = useSelector(
    (state) => state.showDialogFormTemplate.showDialogFormTemplate
  );

  const dialogAfTemplate = useSelector(
    (state) => state.showDialogAfTemplate.showDialogAfTemplate
  );

  const dialogCommentForm = useSelector(
    (state) => state.showDialogCommentForm.showDialogCommentForm
  );

  const dialogProcedureForm = useSelector(
    (state) => state.showDialogProcedureForm.showDialogProcedureForm
  );

  const funcDialogProgramTemplate = () => {
    dispatch(mainSlice.actions.setshowDialogProgramTemplate(true));
    dispatch(mainSlice.actions.setNameofDialogTable("programTemplate"));
  };

  const funcDialogDefaultRibbon = () => {
    dispatch(mainSlice.actions.setShowDialogDefaultRibbon(true));
    dispatch(mainSlice.actions.setNameofDialogTable("defaultRibbon"));
  };

  const funcDialogAfTemplate = () => {
    dispatch(mainSlice.actions.setShowDialogAfTemplate(true));
    dispatch(mainSlice.actions.setNameofDialogTable("afTemplate"));
  };

  const funcDialogLessonForms = () => {
    dispatch(mainSlice.actions.setShowDialogFormTemplate(true));
    dispatch(mainSlice.actions.setNameofDialogTable("lessonForms"));
  };

  const funcDialogCommentForm = () => {
    dispatch(mainSlice.actions.setShowDialogCommentForm(true));
    dispatch(mainSlice.actions.setNameofDialogTable("commentForm"));
  };

  const funcDialogProcedureForm = () => {
    dispatch(mainSlice.actions.setShowDialogProcedureForm(true));
    dispatch(mainSlice.actions.setNameofDialogTable("procedureForm"));
  };
  /////////////////////////////////////////////////////////////////

  return (
    <>
      {/* ////////////////////////Add Line//////////////////*/}
      <div>
        <AddBar onClick={addConfiguration} />
      </div>
      {/* /////////////////////Line1/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
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
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5">
          <DropdownComponentwithButton
            value={
              programTemplateSelectedRow
                ? programTemplateSelectedRow
                : programTemplateSelectedRowEdit
            }
            options={dataProgram}
            optionLabel="Name"
            label="Program Template"
            onChange={(e) => {
              const selectedValue = e.value ? e.value.ID : null;
              handleChange("FirstIDProgramTemplate", selectedValue);
              dispatch(
                mainSlice.actions.setprogramTemplateSelectedRow(e.value)
              );
            }}
            onButtonClick={funcDialogProgramTemplate}
            showDialog={dialogProgramTemplate}
            hideDialog={hideDialog}
          />
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <DropdownComponentwithButton
            value={defaultRibbonSelectedRow?defaultRibbonSelectedRow:defaultRibbonSelectedRowEdit}
            options={dataRibbon}
            optionLabel="Name"
            label="Default Ribbon"
            onChange={(e) => {
              const selectedValue = e.value ? e.value.ID : null;
              handleChange("SelMenuIDForMain", selectedValue);
              dispatch(mainSlice.actions.setDefaultRibbonSelectedRow(e.value));
            }}
            onButtonClick={funcDialogDefaultRibbon}
            showDialog={dialogDefaultRibbon}
            hideDialog={hideDialog}
          />
        </div>
      </div>
      {/* /////////////////////Line3/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "5px" }}>
        <div className="col-5">
          <DropdownComponentwithButton
            value={formTemplateSelectedRow}
            options={dataFormTemplate}
            optionLabel="Name"
            label="Lessons Learned Form Template"
            onChange={(e) => {
              const selectedValue = e.value ? e.value.ID : null;
              handleChange("EnityTypeIDForLessonLearn", selectedValue);
              dispatch(mainSlice.actions.setFormTemplateSelectedRow(e.value));
            }}
            onButtonClick={funcDialogLessonForms}
            showDialog={dialogFormTemplate}
            hideDialog={hideDialog}
          />
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <DropdownComponentwithButton
            value={afTemplateSelectedRow}
            options={dataWfTemplate}
            optionLabel="Name"
            label="Lessons Learned Af Template"
            onChange={(e) => {
              const selectedValue = e.value ? e.value.ID : null;
              handleChange("EnityTypeIDForLessonLearn", selectedValue);
              dispatch(mainSlice.actions.setAfTemplateSelectedRow(e.value));
            }}
            onButtonClick={funcDialogAfTemplate}
            showDialog={dialogAfTemplate}
            hideDialog={hideDialog}
          />
        </div>
      </div>
      {/* /////////////////////Line4/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "5px" }}>
        <div className="col-5">
          <DropdownComponentwithButton
            value={commentFormSelectedRow}
            options={dataFormTemplate}
            optionLabel="Name"
            label="Comment Form Template"
            onChange={(e) => {
              const selectedValue = e.value ? e.value.ID : null;
              handleChange("EnityTypeIDForTaskCommnet", selectedValue);
              dispatch(mainSlice.actions.setCommentFormSelectedRow(e.value));
            }}
            onButtonClick={funcDialogCommentForm}
            showDialog={dialogCommentForm}
            hideDialog={hideDialog}
          />
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <DropdownComponentwithButton
            value={procedureFormSelectedRow}
            options={dataFormTemplate}
            optionLabel="Name"
            label="procedure Form Template"
            onChange={(e) => {
              const selectedValue = e.value ? e.value.ID : null;
              handleChange("EnityTypeIDForProcesure", selectedValue);
              dispatch(mainSlice.actions.setProcedureFormSelectedRow(e.value));
            }}
            onButtonClick={funcDialogProcedureForm}
            showDialog={dialogProcedureForm}
            hideDialog={hideDialog}
          />
        </div>
      </div>

      {/* /////////////////////Line5/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "5px" }}>
        <div className="col-5">
          <BoxDefaultButton
            dialogData={showDialogDefaultButton}
            titleBox={"Default Action Buttons"}
            selectedNames={selectedNamesDefaultButtons}
            selectedId={selectedIdDefaultButton}
          />
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <BoxLetterButton
            dialogData={showDialogLetterButton}
            titleBox={"Letter Action Buttons"}
            selectedNames={selectedNamesLetterButtons}
            selectedId={selectedIdLetterButtons}
          />
        </div>
      </div>
      {/* /////////////////////Line6/////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "5px" }}>
        <div className="col-5">
          <BoxMeetingButton
            dialogData={showDialogMeetingButton}
            titleBox={"Meeting Action Buttons"}
            selectedNames={selectedNamesMeetingsButtons}
            selectedId={selectedIdMeetingsButton}
          />
        </div>
        <div className="col-1"></div>
        <div className="col-5"></div>
      </div>
      {/* /////////////////////Dialog/////////////////////// */}

      {isVisibleBox && (
        <Dialog
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
