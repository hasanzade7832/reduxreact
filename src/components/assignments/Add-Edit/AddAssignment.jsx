import DropdownComponentwithButton from "../../globalComponents/main/dropDownWithButton";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRoles } from "../../../redux/roles/rolesSlice";
import { fetchAllProject } from "../../../redux/assignment/assignmentSlice";
import { mainSlice } from "../../../redux/mainSlice";
import assignmentSlice from "../../../redux/assignment/assignmentSlice";
import TableBoxRole from "../tableBox/tableBoxRole";
import AddBar from "../../globalComponents/main/addBar";
import EditBar from "../../globalComponents/main/editBar";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";

const AddAsignment = () => {
  const dispatch = useDispatch();

  const toast = useRef(null);

  const [dataAssignment, setDataAssignment] = useState({
    OwnerID: null,
    Name: "",
    nPostTypeID: null,
    nProjectID: null,
    nCompanyID: null,
    nMenuID: null,
    ParrentId: null,
    isStaticPost: false,
    isHaveAddressbar: false,
    isAccessCreateProject: false,
  });

  const isEditMode = useSelector((state) => state.isEditMode.isEditMode);

  const handleChange = (fieldName, value) => {
    //console.log("fi", fieldName, value);
    setDataAssignment((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const isAddClicked = useSelector((state) => state.isAddClicked.isAddClicked);

  const selectedRow = useSelector(
    (state) => state.selectedRowData.selectedRowData
  );

  console.log("selectedRow", selectedRow);

  const dataRoles = useSelector((state) => state.dataRoles.dataRoles);

  console.log("dataRoles", dataRoles);

  const dataAssignments = useSelector(
    (state) => state.dataAssignment.dataAssignment
  );

  console.log("dataAssignments", dataAssignments);

  const selectedRowRole = useSelector(
    (state) => state.selectedRowRole.selectedRowRole
  );
  const selectedRowRoleEdit = useSelector(
    (state) => state.selectedRowRoleEdit.selectedRowRoleEdit
  );

  const projectName = useSelector(
    (state) => state.selectedRowProjectName.selectedRowProjectName
  );
  const projectNameEdit = useSelector(
    (state) => state.selectedRowProjectNameEdit.selectedRowProjectNameEdit
  );

  const geaAllProjeccts = useSelector(
    (state) => state.dataAllProject.dataAllProject
  );
  console.log("geaAllProjeccts", geaAllProjeccts);

  useEffect(() => {
    if (isAddClicked) {
      dispatch(mainSlice.actions.setIsEditMode(false));
      setDataAssignment((prevFormData) => ({
        ...prevFormData,
        Name: dispatch(assignmentSlice.actions.setSelectedRowRoleEdit(null)),
        nProjectName: dispatch(
          assignmentSlice.actions.setSelectedRowProjectNameEdit(null)
        ),
      }));
      //console.log("set", dataAssignment.Name)
    } else if (selectedRow) {
      dispatch(mainSlice.actions.setIsEditMode(true));

      /////////////////////////////////////////////////
      const foundProject = dataRoles.find((item) => {
        return item?.nPostTypeID === selectedRow?.nPostTypeID;
      });

      const dataProjectSelected = foundProject ? foundProject : null;
      console.log("dataProjectSelected", dataProjectSelected);
      dispatch(
        assignmentSlice.actions.setSelectedRowRoleEdit(dataProjectSelected)
      );

      ///////////////////////////////////////////////////
      const foundProjectName = geaAllProjeccts.find((item) => {
        return item?.ID === selectedRow?.nProjectID;
      });

      console.log("foundProjectName", foundProjectName);

      const dataProjectNameSelected = foundProjectName
        ? foundProjectName
        : null;
      dispatch(
        assignmentSlice.actions.setSelectedRowProjectNameEdit(
          dataProjectNameSelected
        )
      );
      /////////////////////////////////////////////////

      setDataAssignment((prevState) => ({
        ...prevState,
        Name: selectedRowRoleEdit?.Name || "",
      }));
      console.log("set", selectedRowRoleEdit?.Name);
      dispatch(assignmentSlice.actions.setSelectedRowRole());
      dispatch(assignmentSlice.actions.setSelectedRowProjectName());
    }
  }, [isAddClicked, selectedRow, dataRoles, selectedRowRoleEdit]);

  useEffect(() => {
    dispatch(fetchRoles());
    dispatch(fetchAllProject());
  }, []);

  const isVisibleBox = useSelector((state) => state.isVisibleBox.isVisibleBox);
  const [dialogVisible, setDialogVisible] = useState(false);

  const DialoRole = () => {
    setDialogVisible(true);
    dispatch(assignmentSlice.actions.setDialogRole(true));
    dispatch(assignmentSlice.actions.setNameOfDialoRole("Role"));
  };

  const hideDialog = () => {
    setDialogVisible(false);
  };

  const addConfiguration = () => {
    console.log("ADD");
  };

  const editConfiguration = () => {
    console.log("Edit");
  };

  return (
    <>
      <Toast ref={toast} position="top-right" />
      {/* ////////////////////////Add Line//////////////////*/}
      <div>
        {isEditMode ? (
          <EditBar onClick={editConfiguration} />
        ) : (
          <AddBar onClick={addConfiguration} />
        )}
      </div>
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5">
          <DropdownComponentwithButton
            value={selectedRowRole ? selectedRowRole : selectedRowRoleEdit}
            options={dataRoles}
            optionLabel="Name"
            label="Role"
            onChange={(e) => {
              console.log("e", e.value);
              const selectedValue = e.value ? e.value.ID : null;
              handleChange("Name", selectedValue);
              dispatch(assignmentSlice.actions.setSelectedRowRole(e.value));
            }}
            onButtonClick={DialoRole}
            //   showDialog={}
            //   hideDialog={}
          />
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <DropdownComponentwithButton
            value={projectName ? projectName : projectNameEdit}
            options={geaAllProjeccts}
            optionLabel="ProjectName"
            label="Role"
            onChange={(e) => {
              console.log("aaaaaaaaaaaaaaa", e.value);
              const selectedValue = e.value ? e.value.ID : null;
              handleChange("ProjectName", selectedValue);
              dispatch(
                assignmentSlice.actions.setSelectedRowProjectName(e.value)
              );
            }}
            onButtonClick={DialoRole}
            //   showDialog={}
            //   hideDialog={}
          />
        </div>
      </div>

      {isVisibleBox && (
        <Dialog
          visible={dialogVisible}
          onHide={hideDialog}
          resizable={true}
          maximizable={true}
        >
          <TableBoxRole />
        </Dialog>
      )}
    </>
  );
};

export default AddAsignment;
