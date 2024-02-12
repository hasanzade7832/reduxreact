import DropdownComponentwithButton from "../../globalComponents/main/dropDownWithButton";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRoles } from "../../../redux/roles/rolesSlice";
import { mainSlice } from "../../../redux/mainSlice";
import assignmentSlice from "../../../redux/assignment/assignmentSlice"

const AddAsignment = () => {

    const dispatch = useDispatch();

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
        isAccessCreateProject: false
    })

    const handleChange = (fieldName, value) => {
        console.log("fi", fieldName, value);
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

    const selectedRowRole = useSelector((state) => state.selectedRowRole.selectedRowRole);
    const selectedRowRoleEdit = useSelector((state) => state.selectedRowRoleEdit.selectedRowRoleEdit);

    useEffect(() => {
        if (isAddClicked) {
            setDataAssignment(prevFormData => ({
                ...prevFormData,
                Name: dispatch(assignmentSlice.actions.setSelectedRowRoleEdit(null))
            }));
            console.log("set", dataAssignment.Name)
        } else if (selectedRow) {

            const foundProject = dataRoles.find((item) => {
                return item?.ID === selectedRow?.ID;
            });

            const dataProjectSelected = foundProject ? foundProject : null;
            console.log("dataProjectSelected", dataProjectSelected?.Name);
            dispatch(assignmentSlice.actions.setSelectedRowRoleEdit(dataProjectSelected))

            setDataAssignment(prevState => ({
                ...prevState,
                Name: selectedRowRoleEdit 
            }));
            console.log("set", dataAssignment.Name)
        }
    }, [isAddClicked, selectedRow, dataRoles]);


    useEffect(() => {
        dispatch(fetchRoles());
    }, [])

    return (
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
                        dispatch(assignmentSlice.actions.setSelectedRowRole(e.value))
                    }}
                //   onButtonClick={}
                //   showDialog={}
                //   hideDialog={}
                />
            </div>
            <div className="col-1"></div>
            {/* <div className="col-5">
                <DropdownComponentwithButton
                    //   value={}
                    //   options={}
                    optionLabel="Name"
                    label="ProjectName"
                    onChange={(e) => {
                        // const selectedValue = e.value ? e.value.ID : null;
                        // handleChange("SelMenuIDForMain", selectedValue);
                        // dispatch(
                        //   mainSlice.actions.setDefaultRibbonSelectedRow(e.value)
                        // );
                    }}
                //   onButtonClick={funcDialogDefaultRibbon}
                //   showDialog={dialogDefaultRibbon}
                //   hideDialog={hideDialog}
                />
            </div> */}
        </div>
    )
};

export default AddAsignment;

