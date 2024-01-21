import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./mainSlice";
import configurationSlice from "./configuration/configurationSlice";
import { loginSlice } from "./Login/loginSlice";
import commandsSlice from "./commands/commandsSlice";
import programTemplateSlice from "./programtemplate/programtemplateSlice";

export const store = configureStore({
  reducer: {
    displayHeader: mainSlice.reducer,
    subTabName: mainSlice.reducer,
    displaySplitter: mainSlice.reducer,
    mainTab: mainSlice.reducer,
    resetSubTab: mainSlice.reducer,
    isAddClicked: mainSlice.reducer,
    handleAddComponent: mainSlice.reducer,
    isEditClicked: mainSlice.reducer,
    isVisibleBox: mainSlice.reducer,
    selectedBoxName: mainSlice.reducer,
    selectedNameDefaultButton: mainSlice.reducer,
    selectedNameDefaultButtonEdit: mainSlice.reducer,
    selectedNameLetterButton: mainSlice.reducer,
    selectedNameMeetingButton: mainSlice.reducer,
    selectedIdDefaultButton: mainSlice.reducer,
    selectedIdLetterButton: mainSlice.reducer,
    selectedIdMeetingButton: mainSlice.reducer,
    nameofDialogTable: mainSlice.reducer,
    programTemplateSelectedRow: mainSlice.reducer,
    programTemplateSelectedRowEdit: mainSlice.reducer,
    defaultRibbonSelectedRow: mainSlice.reducer,
    defaultRibbonSelectedRowEdit: mainSlice.reducer,
    formTemplateSelectedRow: mainSlice.reducer,
    formTemplateSelectedRowEdit:mainSlice.reducer,
    selectedRowData: mainSlice.reducer,
    afTemplateSelectedRow: mainSlice.reducer,
    afTemplateSelectedRowEdit:mainSlice.reducer,
    commentFormSelectedRow: mainSlice.reducer,
    commentFormSelectedRowEdit: mainSlice.reducer,
    procedureFormSelectedRow: mainSlice.reducer,
    procedureFormSelectedRowEdit: mainSlice.reducer,
    showDialogProgramTemplate: mainSlice.reducer,
    showDialogDefaultRibbon: mainSlice.reducer,
    showDialogFormTemplate: mainSlice.reducer,
    showDialogAfTemplate: mainSlice.reducer,
    showDialogCommentForm: mainSlice.reducer,
    showDialogProcedureForm: mainSlice.reducer,
    dataConfiguration: configurationSlice.reducer,
    dataRibbon: configurationSlice.reducer,
    dataWfTemplate: configurationSlice.reducer,
    dataEntityType: configurationSlice.reducer,
    dataAfBtn: configurationSlice.reducer,
    selectedNames: configurationSlice.reducer,
    selectedId: configurationSlice.reducer,
    dataLogin: loginSlice.reducer,
    loginSuccess: loginSlice.reducer,
    dataCommands: commandsSlice.reducer,
    dataProgramTemplate: programTemplateSlice.reducer,
  },
});

export type RootState = {
  dataAfBtn:{
    dataAfBtn:string;
  };
  subTabName: {
    selectedSubTab: string;
  };
  displayHeader: {
    valueDisplayHeader: string;
  };
  displaySplitter: {
    valueSplitterShow: Boolean;
  };
  resetSubTab: {
    valueResetSubTab: string;
  };
  mainTab: {
    valueMainTab: number;
  };
  dataLogin: {
    userName: string;
    password: string;
    showPassword: string;
    loginSuccess: Boolean;
  };
  isAddClicked: {
    isAddClicked: Boolean;
  };
  handleAddComponent: {
    handleAddComponent: Boolean;
  };
  isEditClicked: {
    isEditClicked: Boolean;
  };
  isVisibleBox: {
    isVisibleBox: Boolean;
  };
  selectedBoxName: {
    selectedBoxName: string;
  };
  selectedNameDefaultButton: {
    selectedNameDefaultButton: string[];
  };
  selectedNameDefaultButtonEdit:{
    selectedNameDefaultButtonEdit:string[];
  };
  selectedNameLetterButton: {
    selectedNameLetterButton: string[];
  };
  selectedNameMeetingButton: {
    selectedNameMeetingButton: string[];
  };
  selectedIdDefaultButton: {
    selectedIdDefaultButton: string[];
  };
  selectedIdLetterButton: {
    selectedIdLetterButton: string[];
  };
  selectedIdMeetingButton: {
    selectedIdMeetingButton: string[];
  };
  nameofDialogTable: {
    nameofDialogTable: string;
  };
  programTemplateSelectedRow: {
    programTemplateSelectedRow: string;
  };
  defaultRibbonSelectedRow: {
    defaultRibbonSelectedRow: string;
  };
  formTemplateSelectedRow: {
    formTemplateSelectedRow: string;
  };
  afTemplateSelectedRow: {
    afTemplateSelectedRow: string;
  };
  afTemplateSelectedRowEdit:{
    afTemplateSelectedRowEdit:string;
  }
  commentFormSelectedRow: {
    commentFormSelectedRow: string;
  };
  commentFormSelectedRowEdit:{
    commentFormSelectedRowEdit:string;
  }
  procedureFormSelectedRow: {
    procedureFormSelectedRow: string;
  };
  procedureFormSelectedRowEdit:{
    procedureFormSelectedRowEdit:string;
  }
  showDialogProgramTemplate: {
    showDialogProgramTemplate: Boolean;
  };
  showDialogDefaultRibbon: {
    showDialogDefaultRibbon: Boolean;
  };
  showDialogFormTemplate: {
    showDialogFormTemplate: Boolean;
  };
  showDialogAfTemplate: {
    showDialogAfTemplate: Boolean;
  };
  showDialogCommentForm: {
    showDialogCommentForm: Boolean;
  };
  showDialogProcedureForm: {
    showDialogProcedureForm: Boolean;
  };
  selectedRowData: {
    selectedRowData: null;
  };
  selectedNames: {
    selectedNames: string;
  };
  selectedId: {
    selectedId: string;
  };
  programTemplateSelectedRowEdit: {
    programTemplateSelectedRowEdit: string;
  };
  defaultRibbonSelectedRowEdit:{
    defaultRibbonSelectedRowEdit:string;
  };
  formTemplateSelectedRowEdit:{
    formTemplateSelectedRowEdit:string;
  }
};
export type AppDispatch = typeof store.dispatch;
