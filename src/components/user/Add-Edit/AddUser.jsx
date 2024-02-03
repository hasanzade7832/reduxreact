import { useSelector, useDispatch } from "react-redux";
import CustomInputText from "../../globalComponents/main/inputCom";
import { useEffect, useState, useRef } from "react";
import Cookies from "vue-cookies";
import { Toast } from "primereact/toast";
import AddBar from "../../globalComponents/main/addBar";
import EditBar from "../../globalComponents/main/editBar";
import { mainSlice } from "../../../redux/mainSlice";
import { fetchUsers } from "../../../redux/user/userSlice";
import projectServices from "../../services/project.services";

export default function AddUser() {
  const toast = useRef(null);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    LastModified: null,
    ModifiedById: null,
    Username: "",
    Password: "",
    confirmPassword: "",
    MaxWrongPass: 2,
    IsVisible: true,
    Name: "",
    Family: "",
    Email: "",
    Website: "",
    Mobile: "",
    CreateDate: null,
    LastLoginTime: null,
    UserImageId: null,
    userType: 0,
    Status: 0,
    Code: null,
    TTKK: Cookies.get("token"),
  });

  const handleChange = (fieldName, value) => {
    console.log("fildName", fieldName, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const isAddClicked = useSelector((state) => state.isAddClicked.isAddClicked);

  const selectedRow = useSelector(
    (state) => state.selectedRowData.selectedRowData
  );

  const isEditMode = useSelector((state) => state.isEditMode.isEditMode);

  console.log("selectedRow", selectedRow);

  useEffect(() => {
    if (isAddClicked) {
      dispatch(mainSlice.actions.setIsEditMode(false));
      setFormData((prevFormData) => ({
        ...prevFormData,
        Name: "",
        Family: "",
        Username: "",
        Email: "",
        Mobile: "",
        Password: "",
        confirmPassword: "",
      }));
    } else if (selectedRow) {
      dispatch(mainSlice.actions.setIsEditMode(true));
      setFormData((prevFormData) => ({
        ...prevFormData,
        Name: selectedRow.Name,
        Family: selectedRow.Family,
        Username: selectedRow.Username,
        Email: selectedRow.Email,
        Mobile: selectedRow.Mobile,
      }));
    }
  }, [isAddClicked, selectedRow]);

  const addUser = () => {
    if (formData.Password === formData.confirmPassword) {
      projectServices
        .insertUser(formData)
        .then((res) => {
          dispatch(fetchUsers());
          toast.current.show({
            severity: "success",
            summary: "Success",
            detail: "Item Added successfully",
          });
          setFormData((prevFormData) => ({
            ...prevFormData,
            Name: "",
            Family: "",
            Username: "",
            Email: "",
            Mobile: "",
            Password: "",
            confirmPassword: "",
          }));
        })
        .catch(() => {});
    } else {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Passwords do not match",
      });
    }
  };

  const editUser = () => {
    const updatedSelectedRow = {
      ...selectedRow,
      Name: formData.Name,
      Family: formData.Family,
      Username: formData.Username,
      Email: formData.Email,
      Mobile: formData.Mobile,
      Password: formData.Password,
      //   confirmPassword: formData.confirmPassword,
    };
    projectServices
      .updateUser(updatedSelectedRow)
      .then((res) => {
        dispatch(fetchUsers());
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Item Edited successfully",
        });
        setFormData((prevFormData) => ({
          ...prevFormData,
          Name: "",
          Family: "",
          Username: "",
          Email: "",
          Mobile: "",
          Password: "",
          confirmPassword: "",
        }));
      })
      .catch(() => {});
  };

  return (
    <>
      <div class="fadein animation-duration-300">
        <Toast ref={toast} position="top-right" />
        <div>
          {isEditMode ? (
            <EditBar onClick={editUser} />
          ) : (
            <AddBar onClick={addUser} />
          )}
        </div>
        <div
        // style={{
        //     overflowY: "auto",
        //     whiteSpace: "nowrap",
        //     height: "100vh",
        //     maxHeight: "calc(100vh - 12rem)",
        // }}
        >
          {/* ///////////////////////////LINE1///////////////////////////// */}
          <div
            className="grid"
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <div className="col-5">
              <div>
                <CustomInputText
                  label="User Name"
                  value={formData.Username}
                  onChange={(e) => handleChange("Username", e.target.value)}
                />
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <CustomInputText label="ID" disabled={"disabled"} />
            </div>
          </div>
          {/* ///////////////////////////LINE2///////////////////////////// */}
          <div
            className="grid"
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <div className="col-5">
              <div>
                <CustomInputText
                  label="Last Name"
                  value={formData.Family}
                  onChange={(e) => handleChange("Family", e.target.value)}
                />
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <CustomInputText
                label="First Name"
                value={formData.Name}
                onChange={(e) => handleChange("Name", e.target.value)}
              />
            </div>
          </div>
          {/* ///////////////////////////LINE3///////////////////////////// */}
          <div
            className="grid"
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <div className="col-5">
              <div>
                <CustomInputText
                  label="Email"
                  value={formData.Email}
                  onChange={(e) => handleChange("Email", e.target.value)}
                />
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <CustomInputText
                label="Mobile"
                value={formData.Mobile}
                onChange={(e) => handleChange("Mobile", e.target.value)}
              />
            </div>
          </div>
          {/* ///////////////////////////LINE4///////////////////////////// */}
          <div
            className="grid"
            style={{ marginLeft: "20px", marginTop: "20px" }}
          >
            <div className="col-5">
              <div>
                <CustomInputText
                  label="Password"
                  value={formData.Password}
                  onChange={(e) => handleChange("Password", e.target.value)}
                  type={"password"}
                />
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-5">
              <CustomInputText
                label="Confirm Password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleChange("confirmPassword", e.target.value)
                }
                type={"password"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
