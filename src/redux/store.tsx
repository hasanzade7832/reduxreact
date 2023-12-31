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
    isEditClicked: mainSlice.reducer,
    isVisibleBox: mainSlice.reducer,
    selectedBoxName: mainSlice.reducer,
    selectedNameDefaultButton: mainSlice.reducer,
    selectedNameLetterButton: mainSlice.reducer,
    selectedNameMeetingButton: mainSlice.reducer,
    selectedIdDefaultButton: mainSlice.reducer,
    selectedIdLetterButton: mainSlice.reducer,
    selectedIdMeetingButton: mainSlice.reducer,
    nameofDialogTable: mainSlice.reducer,
    programTemplateSelectedRow: mainSlice.reducer,
    defaultRibbonSelectedRow: mainSlice.reducer,
    formTemplateSelectedRow: mainSlice.reducer,
    selectedRowData: mainSlice.reducer,
    afTemplateSelectedRow: mainSlice.reducer,
    commentFormSelectedRow: mainSlice.reducer,
    procedureFormSelectedRow: mainSlice.reducer,
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
    dataLogin: loginSlice.reducer,
    loginSuccess: loginSlice.reducer,
    dataCommands: commandsSlice.reducer,
    dataProgramTemplate: programTemplateSlice.reducer,
  },
});

export type RootState = {
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
  commentFormSelectedRow: {
    commentFormSelectedRow: string;
  };
  procedureFormSelectedRow: {
    procedureFormSelectedRow: string;
  };
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
};
export type AppDispatch = typeof store.dispatch;
