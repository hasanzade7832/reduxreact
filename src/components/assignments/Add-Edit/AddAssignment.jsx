import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../../redux/user/userSlice";
import { fetchRoles } from "../../../redux/roles/rolesSlice";
import { fetchAllProject } from "../../../redux/assignment/assignmentSlice";
import { fetchUsersToken } from "../../../redux/user/userSlice";
import assignmentSlice from "../../../redux/assignment/assignmentSlice";
import DropdownComponentwithButton from "../../globalComponents/main/dropDownWithButton";
import AddBar from "../../globalComponents/main/addBar";
import EditBar from "../../globalComponents/main/editBar";
import { Toast } from "primereact/toast";
import projectServices from "../../services/project.services";

const AddAsignment = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);

  const dataUsersToken = useSelector(
    (state) => state.dataUsersToken.dataUsersToken
  );

  function uuid() {
    var uuidValue = "",
      k,
      randomValue;
    for (k = 0; k < 32; k++) {
      randomValue = (Math.random() * 16) | 0;

      if (k == 8 || k == 12 || k == 16 || k == 20) {
        uuidValue += "-";
      }
      uuidValue += (
        k == 12 ? 4 : k == 16 ? (randomValue & 3) | 8 : randomValue
      ).toString(16);
    }
    return uuidValue;
  }

  const [dataAssignment, setDataAssignment] = useState({
    ID: uuid(),
    OwnerID: null,
    Name: null,
    nPostTypeID: null,
    nProjectID: null,
    nCompanyID: null,
    nMenuID: null,
    ParrentId: null,
    isStaticPost: false,
    isHaveAddressbar: false,
    isAccessCreateProject: false,
    CreateDate: new Date(),
    CreateById: dataUsersToken?.ID,
    ModifiedById: null,
    status: 1,
    PostCode: null,
    Responsibility: null,
    Authorization: null,
    Competencies: null,
    Grade: null,
    IsVisible: false,
    LastModified: null,
    Type: null,
    Description: null,
  });

  const isEditMode = useSelector((state) => state.isEditMode.isEditMode);

  const dataRoles = useSelector((state) => state.dataRoles.dataRoles);

  const dataUsers = useSelector((state) => state.dataUsers.dataUsers);

  const dataAllProjects = useSelector(
    (state) => state.dataAllProject.dataAllProject
  );

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchRoles());
    dispatch(fetchAllProject());
    dispatch(fetchUsersToken());
  }, []);

  const selectedRowRole = useSelector(
    (state) => state.selectedRowRole.selectedRowRole
  );

  const selectedRowProjectName = useSelector(
    (state) => state.selectedRowProjectName.selectedRowProjectName
  );

  const selectedRowUser = useSelector(
    (state) => state.selectedRowUser.selectedRowUser
  );

  console.log("selectedRowUser", selectedRowUser);

  const handleChange = (fieldName, value) => {
    console.log("fi", fieldName, value);
    setDataAssignment((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const addCommand = () => {
    console.log("add");
    projectServices.updatePost(dataAssignment).then((res) => {
      console.log("res", res.data);
    });
  };

  const editCommand = () => {
    console.log("edit");
  };

  return (
    <>
      <Toast ref={toast} position="top-right" />
      <div>
        {isEditMode ? (
          <EditBar onClick={editCommand} />
        ) : (
          <AddBar onClick={addCommand} />
        )}
      </div>
      {/* ///////////////////////////////////ردیف 1/////////////////////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5">
          <DropdownComponentwithButton
            value={selectedRowRole}
            options={dataRoles}
            optionLabel="Name"
            label="Role"
            onChange={(e) => {
              const selectedValue = e.value ? e.value.ID : null;
              handleChange("nPostTypeID", selectedValue);
              dispatch(assignmentSlice.actions.setSelectedRowRole(e.value));
            }}
            // onButtonClick={funcDialogDefaultRibbon}
            // showDialog={dialogDefaultRibbon}
            // hideDialog={hideDialog}
          />
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <DropdownComponentwithButton
            value={selectedRowProjectName}
            options={dataAllProjects}
            optionLabel="ProjectName"
            label="Project"
            onChange={(e) => {
              const selectedValue = e.value ? e.value.ID : null;
              handleChange("nProjectID", selectedValue);
              dispatch(
                assignmentSlice.actions.setSelectedRowProjectName(e.value)
              );
            }}
            // onButtonClick={funcDialogDefaultRibbon}
            // showDialog={dialogDefaultRibbon}
            // hideDialog={hideDialog}
          />
        </div>
      </div>
      {/* ///////////////////////////////////ردیف 2/////////////////////////////////////// */}
      <div className="grid" style={{ marginLeft: "20px", marginTop: "20px" }}>
        <div className="col-5">
          <DropdownComponentwithButton
            value={selectedRowUser}
            options={dataUsers}
            optionLabel="Name"
            label="User"
            onChange={(e) => {
              const selectedValue = e.value ? e.value.ID : null;
              handleChange("OwnerID", selectedValue);
              dispatch(assignmentSlice.actions.setSelectedRowUser(e.value));
            }}
            // onButtonClick={funcDialogDefaultRibbon}
            // showDialog={dialogDefaultRibbon}
            // hideDialog={hideDialog}
          />
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          {/* <DropdownComponentwithButton
          /> */}
        </div>
      </div>
    </>
  );
};

export default AddAsignment;
