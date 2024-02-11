import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { mainSlice } from "../../../redux/mainSlice";
import { fetchRoles } from "../../../redux/roles/rolesSlice";
import AddBar from "../../globalComponents/main/addBar";
import EditBar from "../../globalComponents/main/editBar";
import { Toast } from "primereact/toast";
import CustomInputText from "../../globalComponents/main/inputCom";
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
      }));
    } else if (selectedRow) {
      dispatch(mainSlice.actions.setIsEditMode(true));
      setRolesData((prevFormData) => ({
        ...prevFormData,
        Name: selectedRow.Name,
      }));
    }
  }, [isAddClicked, selectedRow]);

  const handleChange = (fieldName, value) => {
    setRolesData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
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
        }));
      })
      .catch(() => {});
  };

  const editRole = () => {
    const updatedSelectedRow = {
      ...selectedRow,
      Name: rolesData.Name,
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
        rolesData((prevFormData) => ({
          ...prevFormData,
          Name: "",
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
          <div
            className="grid"
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <div className="col-5">
              <div>
                <CustomInputText
                  label="Name"
                  value={rolesData.Name}
                  onChange={(e) => handleChange("Name", e.target.value)}
                />
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              {/* <CustomInputText label="ID" disabled={"disabled"} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RolesAdd;
