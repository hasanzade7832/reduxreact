import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { mainSlice } from "../../../redux/mainSlice";
import { fetchRoles } from "../../../redux/roles/rolesSlice";
import AddBar from "../../globalComponents/main/addBar";
import EditBar from "../../globalComponents/main/editBar";
import { Toast } from "primereact/toast";
import { InputSwitch } from "primereact/inputswitch";
import CustomInputText from "../../globalComponents/main/inputCom";
import CustomTextArea from "../../globalComponents/main/inputTextAreaComp";
import projectServices from "../../services/project.services";

const RolesAdd = () => {
  const [rolesData, setRolesData] = useState({
    ID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    LastModified: "2022-08-24T08:00:11.021Z",
    ModifiedById: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    Name: "",
    Description: "",
    IsVisible: true,
    Type: "",
    Grade: "",
    Competencies: "",
    Authorization: "",
    Responsibility: "",
    PostCode: "",
    isStaticPost: false,
  });

  const dispatch = useDispatch();

  const toast = useRef(null);

  const isAddClicked = useSelector((state) => state.isAddClicked.isAddClicked);

  const selectedRow = useSelector(
    (state) => state.selectedRowData.selectedRowData
  );

  const isEditMode = useSelector((state) => state.isEditMode.isEditMode);

  useEffect(() => {
    if (isAddClicked) {
      dispatch(mainSlice.actions.setIsEditMode(false));
      setRolesData((prevFormData) => ({
        ...prevFormData,
        Name: "",
        PostCode: "",
        Description: "",
        Responsibility: "",
        Authorization: "",
        Competencies: "",
        Grade: "",
        Type: "",
        isStaticPost: false,
      }));
    } else if (selectedRow) {
      dispatch(mainSlice.actions.setIsEditMode(true));
      setRolesData((prevFormData) => ({
        ...prevFormData,
        Name: selectedRow?.Name || "",
        PostCode: selectedRow?.PostCode || "",
        Description: selectedRow?.Description || "",
        Responsibility: selectedRow?.Responsibility || "",
        Authorization: selectedRow?.Authorization || "",
        Competencies: selectedRow?.Competencies || "",
        Grade: selectedRow?.Grade || "",
        Type: selectedRow?.Type || "",
        isStaticPost: selectedRow?.isStaticPost,
      }));
    }
  }, [isAddClicked, selectedRow]);

  useEffect(() => {
    dispatch(fetchRoles());
  }, []);

  const handleChange = (fieldName, value) => {
    setRolesData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleStaticPostChange = (e) => {
    console.log("eeeeee", e.value);
    setRolesData((prevFormData) => ({
      ...prevFormData,
      isStaticPost: e.value,
    }));
  };

  const addRole = () => {
    projectServices
      .insertPost(rolesData)
      .then((res) => {
        dispatch(fetchRoles());
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item Added successfully",
        });
        setRolesData((prevFormData) => ({
          ...prevFormData,
          Name: "",
          PostCode: "",
          Description: "",
          Responsibility: "",
          Authorization: "",
          Competencies: "",
          Grade: "",
          Type: "",
          isStaticPost: false,
        }));
      })
      .catch(() => {});
  };

  const editRole = () => {
    const updatedSelectedRow = {
      ...selectedRow,
      Name: rolesData.Name,
      PostCode: rolesData.PostCode,
      Description: rolesData.Description,
      Responsibility: rolesData.Responsibility,
      Authorization: rolesData.Authorization,
      Competencies: rolesData.Competencies,
      Grade: rolesData.Grade,
      Type: rolesData.Type,
      isStaticPost: rolesData.isStaticPost,
    };
    projectServices
      .updatePost(updatedSelectedRow)
      .then((res) => {
        dispatch(fetchRoles());
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item Edited successfully",
        });
        setRolesData((prevFormData) => ({
          ...prevFormData,
          Name: "",
          PostCode: "",
          Description: "",
          Responsibility: "",
          Authorization: "",
          Competencies: "",
          Grade: "",
          Type: "",
          isStaticPost: false,
        }));
      })
      .catch(() => {});
  };

  return (
    <>
      <div className="fadein animation-duration-300">
        <Toast ref={toast} position="top-right" />
        <div>
          {isEditMode ? (
            <EditBar onClick={editRole} />
          ) : (
            <AddBar onClick={addRole} />
          )}
        </div>
        <div
          style={{
            overflowY: "auto",
            whiteSpace: "nowrap",
            height: "100vh",
            maxHeight: "calc(100vh - 12rem)",
          }}
        >
          {/* /////////////////////////Line 1///////////////////////////////////// */}
          <div
            className="grid"
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <div className="col-5">
              <div>
                <CustomInputText
                  label="Role"
                  value={rolesData.Name}
                  onChange={(e) => handleChange("Name", e.target.value)}
                />
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <div>
                <CustomInputText
                  label="Role Code"
                  value={rolesData.PostCode}
                  onChange={(e) => handleChange("PostCode", e.target.value)}
                />
              </div>
            </div>
          </div>
          {/* /////////////////////////Line 2///////////////////////////////////// */}
          <div
            className="grid"
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <div className="col-5">
              <div>
                <CustomTextArea
                  label="Job Description"
                  value={rolesData.Description}
                  onChange={(e) => handleChange("Description", e.target.value)}
                />
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <CustomTextArea
                label="Responsibilities"
                value={rolesData.Responsibility}
                onChange={(e) => handleChange("Responsibility", e.target.value)}
              />
            </div>
          </div>
          {/* /////////////////////////Line 3///////////////////////////////////// */}
          <div
            className="grid"
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <div className="col-5">
              <div>
                <CustomTextArea
                  label="Authorities"
                  value={rolesData.Authorization}
                  onChange={(e) =>
                    handleChange("Authorization", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <CustomTextArea
                label="Competencies"
                value={rolesData.Competencies}
                onChange={(e) => handleChange("Competencies", e.target.value)}
              />
            </div>
          </div>
          {/* /////////////////////////Line 4///////////////////////////////////// */}
          <div
            className="grid"
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <div className="col-5">
              <div>
                <CustomInputText
                  label="Grade"
                  value={rolesData.Grade}
                  onChange={(e) => handleChange("Grade", e.target.value)}
                />
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <CustomInputText
                label="Type"
                value={rolesData.Type}
                onChange={(e) => handleChange("Type", e.target.value)}
              />
            </div>
          </div>
          {/* /////////////////////////Line 4///////////////////////////////////// */}
          <div
            className="grid"
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <div className="col-5">
              <div style={{ display: "flex", alignItems: "center" }}>
                <InputSwitch
                  id="staticRole"
                  value={rolesData.isStaticPost}
                  checked={rolesData.isStaticPost}
                  onChange={handleStaticPostChange}
                  size="small"
                />
                <label style={{ marginLeft: "5px" }} htmlFor="staticRole">
                  Static Role
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RolesAdd;
