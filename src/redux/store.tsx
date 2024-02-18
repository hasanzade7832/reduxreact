import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./mainSlice";
import configurationSlice from "./configuration/configurationSlice";
import { loginSlice } from "./Login/loginSlice";
import commandsSlice from "./commands/commandsSlice";
import commandsUsers from "./user/userSlice";
import ribbonSlice from "./ribbon/ribbonSlice";
import ribbonRoles from "./roles/rolesSlice";
import assignmentSlice from "./assignment/assignmentSlice";
import programTemplateSlice from "./programtemplate/programtemplateSlice";

export const store = configureStore({
  reducer: {
    isEditMode: mainSlice.reducer,
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
    selectedNameLetterButtonEdit: mainSlice.reducer,
    selectedNameMeetingButton: mainSlice.reducer,
    selectedNameMeetingButtonEdit: mainSlice.reducer,
    selectedIdDefaultButton: mainSlice.reducer,
    selectedIdDefaultButtonEdit: mainSlice.reducer,
    selectedIdLetterButton: mainSlice.reducer,
    selectedIdLetterButtonEdit: mainSlice.reducer,
    selectedIdMeetingButton: mainSlice.reducer,
    selectedIdMeetingButtonEdit: mainSlice.reducer,
    nameofDialogTable: mainSlice.reducer,
    programTemplateSelectedRow: mainSlice.reducer,
    programTemplateSelectedRowEdit: mainSlice.reducer,
    defaultRibbonSelectedRow: mainSlice.reducer,
    defaultRibbonSelectedRowEdit: mainSlice.reducer,
    formTemplateSelectedRow: mainSlice.reducer,
    formTemplateSelectedRowEdit: mainSlice.reducer,
    selectedRowData: mainSlice.reducer,
    afTemplateSelectedRow: mainSlice.reducer,
    afTemplateSelectedRowEdit: mainSlice.reducer,
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
    modeSelectedRow: mainSlice.reducer,
    dataConfiguration: configurationSlice.reducer,
    dataRibbon: configurationSlice.reducer,
    dataWfTemplate: configurationSlice.reducer,
    dataEntityType: configurationSlice.reducer,
    dataAfBtn: configurationSlice.reducer,
    selectedNames: configurationSlice.reducer,
    selectedId: configurationSlice.reducer,
    dataLogin: loginSlice.reducer,
    loginSuccess: loginSlice.reducer,
    dataProgramTemplate: programTemplateSlice.reducer,
    dataCommands: commandsSlice.reducer,
    dataViewMode: commandsSlice.reducer,
    dataApiMode: commandsSlice.reducer,
    dataUsers: commandsUsers.reducer,
    dataUserType: commandsUsers.reducer,
    dataUsersToken: commandsUsers.reducer,
    dataMenuSetting: ribbonSlice.reducer,
    selectedRowDataRibbon: ribbonSlice.reducer,
    activeIndex: ribbonSlice.reducer,
    dataMenuTab: ribbonSlice.reducer,
    dataMenuGroup: ribbonSlice.reducer,
    dataMenuItem: ribbonSlice.reducer,
    dataRoles: ribbonRoles.reducer,
    dataAssignment: assignmentSlice.reducer,
    selectedRowRole: assignmentSlice.reducer,
    selectedRowRoleEdit: assignmentSlice.reducer,
    dialogRole: assignmentSlice.reducer,
    nameOfDialoRole: assignmentSlice.reducer,
    selectedRowProjectName: assignmentSlice.reducer,
    selectedRowProjectNameEdit: assignmentSlice.reducer,
    dataAllProject: assignmentSlice.reducer,
    selectedRowUser: assignmentSlice.reducer,
  },
});

export type RootState = {
  isEditMode: {
    isEditMode: Boolean;
  };
  dataAfBtn: {
    dataAfBtn: string;
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
  selectedNameDefaultButtonEdit: {
    selectedNameDefaultButtonEdit: string[];
  };
  selectedNameLetterButton: {
    selectedNameLetterButton: string[];
  };
  selectedNameLetterButtonEdit: {
    selectedNameLetterButtonEdit: string[];
  };
  selectedNameMeetingButton: {
    selectedNameMeetingButton: string[];
  };
  selectedNameMeetingButtonEdit: {
    selectedNameMeetingButtonEdit: string[];
  };
  selectedIdDefaultButton: {
    selectedIdDefaultButton: string[];
  };
  selectedIdDefaultButtonEdit: {
    selectedIdDefaultButtonEdit: string[];
  };
  selectedIdLetterButton: {
    selectedIdLetterButton: string[];
  };
  selectedIdLetterButtonEdit: {
    selectedIdLetterButtonEdit: string[];
  };
  selectedIdMeetingButton: {
    selectedIdMeetingButton: string[];
  };
  selectedIdMeetingButtonEdit: {
    selectedIdMeetingButtonEdit: string[];
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
  afTemplateSelectedRowEdit: {
    afTemplateSelectedRowEdit: string;
  };
  commentFormSelectedRow: {
    commentFormSelectedRow: string;
  };
  commentFormSelectedRowEdit: {
    commentFormSelectedRowEdit: string;
  };
  procedureFormSelectedRow: {
    procedureFormSelectedRow: string;
  };
  procedureFormSelectedRowEdit: {
    procedureFormSelectedRowEdit: string;
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
  selectedNames: {
    selectedNames: string;
  };
  selectedId: {
    selectedId: string;
  };
  programTemplateSelectedRowEdit: {
    programTemplateSelectedRowEdit: string;
  };
  defaultRibbonSelectedRowEdit: {
    defaultRibbonSelectedRowEdit: string;
  };
  formTemplateSelectedRowEdit: {
    formTemplateSelectedRowEdit: string;
  };
  modeSelectedRow: {
    modeSelectedRow: Boolean;
  };
  dataUsers: {
    dataUsers: string[];
  };
  dataUserType: {
    dataUserType: string[];
  };
  dataMenuSetting: {
    dataMenuSetting: string[];
  };
  selectedRowDataRibbon: {
    selectedRowDataRibbon: null;
  };
  activeIndex: {
    activeIndex: null;
  };
  dataMenuTab: {
    dataMenuTab: string[];
  };
  dataMenuGroup: {
    dataMenuGroup: string[];
  };
  dataMenuItem: {
    dataMenuItem: string[];
  };
  dataRoles: {
    dataRoles: string[];
  };
  dataAssignment: {
    dataAssignment: string[];
  };
  selectedRowRole: {
    selectedRowRole: string;
  };
  selectedRowRoleEdit: {
    selectedRowRoleEdit: string;
  };
  dialogRole: {
    dialogRole: string;
  };
  nameOfDialoRole: {
    nameOfDialoRole: string;
  };
  selectedRowProjectName: {
    selectedRowProjectName: string;
  };
  selectedRowProjectNameEdit: {
    selectedRowProjectNameEdit: string;
  };
  dataAllProject: {
    dataAllProject: string[];
  };
  dataUsersToken: {
    dataUsersToken: string[];
  };
  selectedRowUser: {
    selectedRowUser: string;
  };
};
export type AppDispatch = typeof store.dispatch;
