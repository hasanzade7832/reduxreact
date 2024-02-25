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

  // function uuid() {
  //   var uuidValue = "",
  //     k,
  //     randomValue;
  //   for (k = 0; k < 32; k++) {
  //     randomValue = (Math.random() * 16) | 0;

  //     if (k == 8 || k == 12 || k == 16 || k == 20) {
  //       uuidValue += "-";
  //     }
  //     uuidValue += (
  //       k == 12 ? 4 : k == 16 ? (randomValue & 3) | 8 : randomValue
  //     ).toString(16);
  //   }
  //   return uuidValue;
  // }

  const [dataAssignment, setDataAssignment] = useState({
    // ID: uuid(),
    ID: "d1b9f42d-9f3f-4e40-b676-0f95041c9842",
    Name: "",
    ParrentId: null,
    CreateDate: new Date(),
    CreateById: dataUsersToken?.ID,
    ModifiedById: "d36eda78-5de1-4f70-bc99-d5a2c26a5f8c",
    isStaticPost: false,
    isAccessCreateProject: false,
    isHaveAddressbar: false,
    OwnerID: null,
    nProjectID: null,
    nCompanyID: null,
    nPostTypeID: null,
    status: 1,
    nMenuID: null,
    PostCode: null,
    Responsibility: null,
    Description: null,
    Authorization: null,
    Competencies: null,
    Grade: null,
    Type: null,
    IsVisible: true,
    LastModified: "2023-10-24T17:52:46.76",
  });

  const [isProjectDropdownDisabled, setIsProjectDropdownDisabled] =
    useState(false);

  const selectedRowRole = useSelector(
    (state) => state.selectedRowRole.selectedRowRole
  );

  useEffect(() => {
    if (selectedRowRole) {
      setDataAssignment((prevFormData) => ({
        ...prevFormData,
        Name: selectedRowRole?.Name,
        nPostTypeID: selectedRowRole?.nPostTypeID,
        nProjectID: selectedRowRole?.nProjectID,
      }));
    }
  }, [selectedRowRole]);

  const isEditMode = useSelector((state) => state.isEditMode.isEditMode);

  const dataRoles = useSelector((state) => state.dataRoles.dataRoles);
  console.log("dataRoles", dataRoles);

  const rolesWithNullOwnerID = dataRoles.filter(
    (role) => role.OwnerID === null
  );
  console.log("rolesWithNullOwnerID", rolesWithNullOwnerID);

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

  const selectedRowProjectName = useSelector(
    (state) => state.selectedRowProjectName.selectedRowProjectName
  );

  const selectedRowUser = useSelector(
    (state) => state.selectedRowUser.selectedRowUser
  );

  const handleChange = (fieldName, value) => {
    console.log("fi", fieldName, value);
    setDataAssignment((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };
  console.log("AAAAAAAAAAA", selectedRowRole?.isStaticPost);

  useEffect(() => {
    // بررسی آیا rolesWithNullOwnerID انتخاب شده و مقدار isStatic آن true است یا خیر
    if (selectedRowRole?.isStaticPost) {
      setIsProjectDropdownDisabled(true); // در صورتی که شرط برقرار باشد، سلکت آپشن Project دیزیبل می‌شود
    } else {
      setIsProjectDropdownDisabled(false); // در غیر این صورت، سلکت آپشن Project فعال خواهد بود
    }
  }, [selectedRowRole]); // وابستگی به وضعیت selectedRowRole

  const addCommand = () => {
    console.log("add");

    if (selectedRowRole) {
      setDataAssignment((prevFormData) => ({
        ...prevFormData,
        Name: selectedRowRole?.Name,
        nPostTypeID: selectedRowRole?.nPostTypeID,
        nProjectID: selectedRowRole?.nProjectID,
        // OwnerID: selectedRowRole?.OwnerID
      }));

      projectServices.updatePost(dataAssignment).then((res) => {
        console.log("res", res.data);
      });
    } else {
      console.error("selectedRowRole does not exist");
    }
  };

  console.log("selectedRowRole", selectedRowRole);

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
            options={rolesWithNullOwnerID}
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
            disabledDropDown={isProjectDropdownDisabled}
            diabledButton={isProjectDropdownDisabled}
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
              console.log("IDDDDDDD", e.value.ID);
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
