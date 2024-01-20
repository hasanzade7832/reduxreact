import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MainState {
  selectedSubTab: string;
  valueDisplayHeader: string;
  valueSplitterShow: Boolean;
  valueResetSubTab: string;
  valueMainTab: number;
  isAddClicked: Boolean;
  handleAddComponent: Boolean;
  isEditClicked: Boolean;
  isVisibleBox: Boolean;
  selectedBoxName: string;
  selectedNameDefaultButton: string[];
  selectedNameLetterButton: string[];
  selectedNameMeetingButton: string[];
  selectedIdDefaultButton: string[];
  selectedIdLetterButton: string[];
  selectedIdMeetingButton: string[];
  nameofDialogTable: string;
  programTemplateSelectedRow: string;
  programTemplateSelectedRowEdit: string;
  defaultRibbonSelectedRow: string;
  defaultRibbonSelectedRowEdit:string;
  formTemplateSelectedRow: string;
  formTemplateSelectedRowEdit:string;
  afTemplateSelectedRow: string;
  commentFormSelectedRow: string;
  commentFormSelectedRowEdit: string;
  procedureFormSelectedRow: string;
  showDialogProgramTemplate: Boolean;
  showDialogDefaultRibbon: Boolean;
  showDialogFormTemplate: Boolean;
  showDialogAfTemplate: Boolean;
  showDialogCommentForm: Boolean;
  showDialogProcedureForm: Boolean;
  selectedRowData: null;
}

const initialState: MainState = {
  selectedSubTab: "",
  valueDisplayHeader: "",
  valueSplitterShow: false,
  valueResetSubTab: "",
  valueMainTab: 0,
  isAddClicked: false,
  handleAddComponent: false,
  isEditClicked: false,
  isVisibleBox: true,
  selectedBoxName: "",
  selectedNameDefaultButton: [],
  selectedNameLetterButton: [],
  selectedNameMeetingButton: [],
  selectedIdDefaultButton: [],
  selectedIdLetterButton: [],
  selectedIdMeetingButton: [],
  nameofDialogTable: "",
  programTemplateSelectedRow: "",
  programTemplateSelectedRowEdit: "",
  defaultRibbonSelectedRow: "",
  defaultRibbonSelectedRowEdit:"",
  formTemplateSelectedRow: "",
  formTemplateSelectedRowEdit: "",
  afTemplateSelectedRow: "",
  commentFormSelectedRow: "",
  commentFormSelectedRowEdit:"",
  procedureFormSelectedRow: "",
  showDialogProgramTemplate: false,
  showDialogDefaultRibbon: false,
  showDialogFormTemplate: false,
  showDialogAfTemplate: false,
  showDialogCommentForm: false,
  showDialogProcedureForm: false,
  selectedRowData: null,
};

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    setSubTab: (state, action: PayloadAction<string>) => {
      state.selectedSubTab = action.payload;
    },
    setDisplayHeader: (state, action: PayloadAction<string>) => {
      state.valueDisplayHeader = action.payload;
    },
    setValueShowSplitter: (state, action: PayloadAction<Boolean>) => {
      state.valueSplitterShow = action.payload;
    },
    setValueResetSubTab: (state, action: PayloadAction<string>) => {
      state.valueResetSubTab = action.payload;
    },
    setvalueMainTab: (state, action: PayloadAction<number>) => {
      state.valueMainTab = action.payload;
    },
    setIsAddClicked: (state, action: PayloadAction<Boolean>) => {
      state.isAddClicked = action.payload;
    },
    setHandleAddComponent: (state, action: PayloadAction<Boolean>) => {
      state.handleAddComponent = action.payload;
    },
    setIsEditClicked: (state, action: PayloadAction<Boolean>) => {
      state.isEditClicked = action.payload;
    },
    setIsVisibleBox: (state, action: PayloadAction<Boolean>) => {
      state.isVisibleBox = action.payload;
    },

    setSelectedBoxName: (state, action: PayloadAction<string>) => {
      state.selectedBoxName = action.payload;
    },
    setSelectedNameDefaultButton: (
      state,
      action: PayloadAction<Array<string>>
    ) => {
      state.selectedNameDefaultButton = action.payload;
    },
    setselectedNameLetterButton: (
      state,
      action: PayloadAction<Array<string>>
    ) => {
      state.selectedNameLetterButton = action.payload;
    },
    setSelectedNameMeetingButton: (
      state,
      action: PayloadAction<Array<string>>
    ) => {
      state.selectedNameMeetingButton = action.payload;
    },
    setelectedIdDefaultButton: (
      state,
      action: PayloadAction<Array<string>>
    ) => {
      state.selectedIdDefaultButton = action.payload;
    },
    setSelectedIdLetterButton: (
      state,
      action: PayloadAction<Array<string>>
    ) => {
      state.selectedIdLetterButton = action.payload;
    },
    setSelectedIdMeetingButton: (
      state,
      action: PayloadAction<Array<string>>
    ) => {
      state.selectedIdMeetingButton = action.payload;
    },
    setNameofDialogTable: (state, action: PayloadAction<string>) => {
      state.nameofDialogTable = action.payload;
    },
    setprogramTemplateSelectedRow: (state, action: PayloadAction<string>) => {
      state.programTemplateSelectedRow = action.payload;
    },
    setProgramTemplateSelectedRowEdit: (
      state,
      action: PayloadAction<string>
    ) => {
      state.programTemplateSelectedRowEdit = action.payload;
    },
    setDefaultRibbonSelectedRow: (state, action: PayloadAction<string>) => {
      state.defaultRibbonSelectedRow = action.payload;
    },
    setDefaultRibbonSelectedRowEdit: (state, action: PayloadAction<string>) => {
      state.defaultRibbonSelectedRowEdit = action.payload;
    },
    setFormTemplateSelectedRow: (state, action: PayloadAction<string>) => {
      state.formTemplateSelectedRow = action.payload;
    },
    setFormTemplateSelectedRowEdit: (state, action: PayloadAction<string>) => {
      state.formTemplateSelectedRowEdit = action.payload;
    },
    setAfTemplateSelectedRow: (state, action: PayloadAction<string>) => {
      state.afTemplateSelectedRow = action.payload;
    },
    setCommentFormSelectedRow: (state, action: PayloadAction<string>) => {
      state.commentFormSelectedRow = action.payload;
    },
    setCommentFormSelectedRowEdit: (state, action: PayloadAction<string>) => {
      state.commentFormSelectedRowEdit = action.payload;
    },
    setProcedureFormSelectedRow: (state, action: PayloadAction<string>) => {
      state.procedureFormSelectedRow = action.payload;
    },
    setshowDialogProgramTemplate: (state, action: PayloadAction<Boolean>) => {
      state.showDialogProgramTemplate = action.payload;
    },
    setShowDialogDefaultRibbon: (state, action: PayloadAction<Boolean>) => {
      state.showDialogDefaultRibbon = action.payload;
    },
    setShowDialogFormTemplate: (state, action: PayloadAction<Boolean>) => {
      state.showDialogFormTemplate = action.payload;
    },
    setShowDialogAfTemplate: (state, action: PayloadAction<Boolean>) => {
      state.showDialogFormTemplate = action.payload;
    },
    setShowDialogCommentForm: (state, action: PayloadAction<Boolean>) => {
      state.showDialogCommentForm = action.payload;
    },
    setShowDialogProcedureForm: (state, action: PayloadAction<Boolean>) => {
      state.showDialogProcedureForm = action.payload;
    },
    setSelectedRowData: (state, action: PayloadAction<null>) => {
      state.selectedRowData = action.payload;
    },
  },
});

export const {
  setSubTab,
  setDisplayHeader,
  setValueShowSplitter,
  setValueResetSubTab,
  setvalueMainTab,
  setIsAddClicked,
  setIsEditClicked,
} = mainSlice.actions;
export default mainSlice.reducer;
