import { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";

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
  fetchAfBtn,
} from "../../../redux/configuration/configurationSlice";
import { fetchProgramTemplate } from "../../../redux/programtemplate/programtemplateSlice";
import { mainSlice } from "../../../redux/mainSlice";
import AddBar from "../../globalComponents/main/addBar";
import EditBar from "../../globalComponents/main/editBar";
import DropdownComponentwithButton from "../../globalComponents/main/dropDownWithButton";

const ConfigurationAdd = () => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const dispatch = useDispatch();
  ////////////////object main data for add////////////////////////////////////////

  const programTemplateSelectedRow = useSelector(
    (state) => state.programTemplateSelectedRow.programTemplateSelectedRow
  );

  const programTemplateSelectedRowEdit = useSelector(
    (state) =>
      state.programTemplateSelectedRowEdit.programTemplateSelectedRowEdit
  );

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

  const dataRibbon = useSelector((state) => state.dataRibbon.dataRibbon);

  const dataWfTemplate = useSelector(
    (state) => state.dataWfTemplate.dataWfTemplate
  );

  const dataFormTemplate = useSelector(
    (state) => state.dataEntityType.dataEntityType
  );

  const defaultRibbonSelectedRow = useSelector(
    (state) => state.defaultRibbonSelectedRow.defaultRibbonSelectedRow
  );

  const defaultRibbonSelectedRowEdit = useSelector(
    (state) => state.defaultRibbonSelectedRowEdit.defaultRibbonSelectedRowEdit
  );

  const formTemplateSelectedRow = useSelector(
    (state) => state.formTemplateSelectedRow.formTemplateSelectedRow
  );

  const formTemplateSelectedRowEdit = useSelector(
    (state) => state.formTemplateSelectedRowEdit.formTemplateSelectedRowEdit
  );

  const commentFormSelectedRow = useSelector(
    (state) => state.commentFormSelectedRow.commentFormSelectedRow
  );

  const commentFormSelectedRowEdit = useSelector(
    (state) => state.commentFormSelectedRowEdit.commentFormSelectedRowEdit
  );

  const procedureFormSelectedRow = useSelector(
    (state) => state.procedureFormSelectedRow.procedureFormSelectedRow
  );

  const procedureFormSelectedRowEdit = useSelector(
    (state) => state.procedureFormSelectedRowEdit.procedureFormSelectedRowEdit
  );

  const afTemplateSelectedRow = useSelector(
    (state) => state.afTemplateSelectedRow.afTemplateSelectedRow
  );

  const afTemplateSelectedRowEdit = useSelector(
    (state) => state.afTemplateSelectedRowEdit.afTemplateSelectedRowEdit
  );

  const selectedNameDefaultButtonEdit = useSelector(
    (state) => state.selectedNameDefaultButtonEdit.selectedNameDefaultButtonEdit
  );

  console.log("2222222", selectedNameDefaultButtonEdit);

  const IdsADefaultButtonEdit = useSelector(
    (state) => state.selectedIdDefaultButtonEdit.selectedIdDefaultButtonEdit
  );

  console.log("4444444444", IdsADefaultButtonEdit);

  const dataAfBtn = useSelector((state) => state.dataAfBtn.dataAfBtn);

  useEffect(() => {
    if (isAddClicked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        Name: "",
        Description: "",
        FirstIDProgramTemplate: dispatch(
          mainSlice.actions.setProgramTemplateSelectedRowEdit()
        ),
        SelMenuIDForMain: dispatch(
          mainSlice.actions.setDefaultRibbonSelectedRowEdit()
        ),
        EnityTypeIDForLessonLearn: dispatch(
          mainSlice.actions.setFormTemplateSelectedRowEdit()
        ),
        EnityTypeIDForTaskCommnet: dispatch(
          mainSlice.actions.setCommentFormSelectedRowEdit()
        ),
        EnityTypeIDForProcesure: dispatch(
          mainSlice.actions.setProcedureFormSelectedRowEdit()
        ),
        WFTemplateIDForLessonLearn: dispatch(
          mainSlice.actions.setAfTemplateSelectedRowEdit([])
        ),
        DefaultBtn: dispatch(
          mainSlice.actions.setSelectedNameDefaultButtonEdit([])
        ),
      }));
      setIsEditMode(false);
    } else if (selectedRow) {
      //programTemplate
      const foundItemProgram = dataPrugTemplate.find(
        (item) => item.ID === selectedRow.FirstIDProgramTemplate
      );
      const dataProgramSelected = foundItemProgram ? foundItemProgram : null;
      dispatch(
        mainSlice.actions.setProgramTemplateSelectedRowEdit(dataProgramSelected)
      );

      // defaultRibbon
      const foundItemRibbon = dataRibbon.find(
        (item) => item.ID === selectedRow.SelMenuIDForMain
      );
      const dataRibbonSelected = foundItemRibbon ? foundItemRibbon : null;
      dispatch(
        mainSlice.actions.setDefaultRibbonSelectedRowEdit(dataRibbonSelected)
      );

      //form template
      const foundItemFormTemplate = dataFormTemplate.find(
        (item) => item.ID === selectedRow.EnityTypeIDForLessonLearn
      );
      const formTemplateSelected = foundItemFormTemplate
        ? foundItemFormTemplate
        : null;
      dispatch(
        mainSlice.actions.setFormTemplateSelectedRowEdit(formTemplateSelected)
      );

      //comment form
      const foundItemComment = dataFormTemplate.find(
        (item) => item.ID === selectedRow.EnityTypeIDForTaskCommnet
      );
      const commentTemplateSelected = foundItemComment
        ? foundItemComment
        : null;
      dispatch(
        mainSlice.actions.setCommentFormSelectedRowEdit(commentTemplateSelected)
      );

      //procedure form
      const foundItemProcedure = dataFormTemplate.find(
        (item) => item.ID === selectedRow.EnityTypeIDForProcesure
      );
      const procedureTemplateSelected = foundItemProcedure
        ? foundItemProcedure
        : null;
      dispatch(
        mainSlice.actions.setProcedureFormSelectedRowEdit(
          procedureTemplateSelected
        )
      );

      //af template
      const foundItemAfTemplate = dataWfTemplate.find(
        (item) => item.ID === selectedRow.WFTemplateIDForLessonLearn
      );
      const afTemplateSelected = foundItemAfTemplate
        ? foundItemAfTemplate
        : null;
      dispatch(
        mainSlice.actions.setAfTemplateSelectedRowEdit(afTemplateSelected)
      );

      //defaultButton
      const selectedArray = selectedRow.DefaultBtn;
      const resultArray = selectedArray.split("|");

      const matchingNames = [];
      const matchingIds = [] ;

      resultArray.forEach((resultId) => {
        const matchingBtn = dataAfBtn.find(
          (btn) => btn.ID.toString() === resultId
        );
        if (matchingBtn) {
          matchingNames.push(matchingBtn.Name);
          matchingIds.push(matchingBtn.ID);
        }
      });
      console.log("matchingNames",matchingNames);
      dispatch(fetchAfBtn());
      dispatch(
        mainSlice.actions.setSelectedNameDefaultButtonEdit(matchingNames)
      );
      dispatch(
        mainSlice.actions.setelectedIdDefaultButtonEdit(matchingIds)
      );

      setFormData((prevFormData) => ({
        ...prevFormData,
        Name: selectedRow.Name,
        Description: selectedRow.Description,
        FirstIDProgramTemplate: programTemplateSelectedRowEdit,
        SelMenuIDForMain: defaultRibbonSelectedRowEdit,
        EnityTypeIDForLessonLearn: formTemplateSelectedRowEdit,
        EnityTypeIDForTaskCommnet: commentFormSelectedRowEdit,
        EnityTypeIDForProcesure: procedureFormSelectedRowEdit,
        WFTemplateIDForLessonLearn: afTemplateSelectedRowEdit,
      }));
      setIsEditMode(true);
      formData.Name = selectedRow.Name;
    }
  }, [
    isAddClicked,
    selectedRow,
    subTabName,
    dataPrugTemplate,
    dataRibbon,
    dataFormTemplate,
    dataWfTemplate,
    fetchAfBtn,
  ]);

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

  const selectedIdDefaultButton = useSelector(
    (state) => state.selectedIdDefaultButton.selectedIdDefaultButton
  );

  console.log("555555555", selectedIdDefaultButton);

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

  useEffect(() => {}, [selected]);

  const selectedId = useSelector(
    (state) => state.selectedIdDefaultButton.selectedIdDefaultButton
  );

  useEffect(() => {}, [selectedId]);

  const addConfiguration = () => {
    const defaultBtnValues = selectedId?.join("|");
    const letterBtnValues = selectedIdLetterButtons?.join("|");
    const meetingBtnValues = selectedIdMeetingsButton?.join("|");

    console.log("defaultBtnValues", defaultBtnValues);

    formData.DefaultBtn = defaultBtnValues;
    formData.LetterBtns = letterBtnValues;
    formData.MeetingBtns = meetingBtnValues;
    formData.FirstIDProgramTemplate = programTemplateSelectedRow?.ID;
    formData.SelMenuIDForMain = defaultRibbonSelectedRow?.ID;
    formData.EnityTypeIDForLessonLearn = formTemplateSelectedRow?.ID;
    formData.WFTemplateIDForLessonLearn = afTemplateSelectedRow?.ID;
    formData.EnityTypeIDForTaskCommnet = commentFormSelectedRow?.ID;
    formData.EnityTypeIDForProcesure = procedureFormSelectedRow?.ID;

    projectServices
      .insertSetting(formData)
      .then((res) => {
        dispatch(fetchConfiguration());
        dispatch(mainSlice.actions.setelectedIdDefaultButton([]));
        dispatch(mainSlice.actions.setProgramTemplateSelectedRowEdit());
        dispatch(mainSlice.actions.setprogramTemplateSelectedRow());
        dispatch(mainSlice.actions.setDefaultRibbonSelectedRowEdit());
        dispatch(mainSlice.actions.setDefaultRibbonSelectedRow());
        dispatch(mainSlice.actions.setFormTemplateSelectedRowEdit());
        dispatch(mainSlice.actions.setFormTemplateSelectedRow());
        dispatch(mainSlice.actions.setCommentFormSelectedRowEdit());
        dispatch(mainSlice.actions.setCommentFormSelectedRow());
        dispatch(mainSlice.actions.setProcedureFormSelectedRowEdit());
        dispatch(mainSlice.actions.setProcedureFormSelectedRow());
        dispatch(mainSlice.actions.setAfTemplateSelectedRowEdit());
        dispatch(mainSlice.actions.setAfTemplateSelectedRow());
        dispatch(mainSlice.actions.setSelectedNameDefaultButtonEdit([]));
        dispatch(mainSlice.actions.setSelectedNameDefaultButton([]));

        setFormData((prevFormData) => ({
          ...prevFormData,
          Name: "",
          Description: "",
          DefaultBtn: "",
        }));
      })
      .catch(() => {});
  };

  const editConfiguration = () => {
    console.log("aaaaaaaaaaaaa", selectedIdDefaultButton);
    console.log("EEEEEEEEEEEEE", IdsADefaultButtonEdit);
    const combinedIds = IdsADefaultButtonEdit.concat(selectedIdDefaultButton);
    const defaultBtnValue = combinedIds.join("|");
    console.log("HHHHHHHHHHH", defaultBtnValue);

    const updatedSelectedRow = {
      ...selectedRow,
      Name: formData.Name,
      Description: formData.Description,
      FirstIDProgramTemplate: programTemplateSelectedRow?.ID
        ? programTemplateSelectedRow?.ID
        : programTemplateSelectedRowEdit?.ID,
      DefaultBtn:defaultBtnValue,
    };
    projectServices
      .updateSetting(updatedSelectedRow)
      .then((res) => {
        setFormData({
          Name: "",
          Description: "",
        });
        dispatch(fetchConfiguration());
        dispatch(mainSlice.actions.setProgramTemplateSelectedRowEdit());
        dispatch(mainSlice.actions.setprogramTemplateSelectedRow());
        dispatch(mainSlice.actions.setSelectedNameDefaultButtonEdit([]));
        dispatch(mainSlice.actions.setSelectedNameDefaultButton([]));
        dispatch(mainSlice.actions.setelectedIdDefaultButtonEdit([]));
        dispatch(mainSlice.actions.setelectedIdDefaultButton([]));
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
        {isEditMode ? (
          <EditBar onClick={editConfiguration} />
        ) : (
          <AddBar onClick={addConfiguration} />
        )}
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
            value={
              defaultRibbonSelectedRow
                ? defaultRibbonSelectedRow
                : defaultRibbonSelectedRowEdit
            }
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
            value={
              formTemplateSelectedRow
                ? formTemplateSelectedRow
                : formTemplateSelectedRowEdit
            }
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
            value={
              afTemplateSelectedRow
                ? afTemplateSelectedRow
                : afTemplateSelectedRowEdit
            }
            options={dataWfTemplate}
            optionLabel="Name"
            label="Lessons Learned Af Template"
            onChange={(e) => {
              const selectedValue = e.value ? e.value.ID : null;
              handleChange("WFTemplateIDForLessonLearn", selectedValue);
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
            value={
              commentFormSelectedRow
                ? commentFormSelectedRow
                : commentFormSelectedRowEdit
            }
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
            value={
              procedureFormSelectedRow
                ? procedureFormSelectedRow
                : procedureFormSelectedRowEdit
            }
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
            selectedNamesEdit={selectedNameDefaultButtonEdit}
            selectedId={selectedId}
            selectedIdEdit={IdsADefaultButtonEdit}
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
