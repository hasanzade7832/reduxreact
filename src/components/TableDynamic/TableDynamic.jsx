import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  fetchConfiguration,
  fetchAllRibbon,
  fetchPrugTemplate,
} from "../../redux/configuration/configurationSlice";
import { fetchCommands } from "../../redux/commands/commandsSlice";
import { fetchUsers } from "../../redux/user/userSlice";
import { fetchRoles } from "../../redux/roles/rolesSlice";
import { fetchAssignment } from "../../redux/assignment/assignmentSlice";
import { Button } from "primereact/button";
import { mainSlice } from "../../redux/mainSlice";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
import projectServices from "../services/project.services";

const TableDynamic = () => {
  const dispatch = useDispatch();
  const [selectedRow, setSelectedRow] = useState(null);
  // const [isEditDisabled, setIsEditDisabled] = useState(true);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const toast = useRef(null);

  ///////////////////////All data to need this table dynamic////////////////////////////////////////////////
  const subTabName = useSelector((state) => state.subTabName.selectedSubTab);

  const isEditDisabled = useSelector(
    (state) => state.modeSelectedRow.modeSelectedRow
  );

  const dataConfiguration = useSelector(
    (state) => state.dataConfiguration.dataConfiguration
  );

  const headersStringConfiguration = useSelector(
    (state) => state.dataConfiguration.headersString
  );

  const fieldsColumnsConfiguration = useSelector(
    (state) => state.dataConfiguration.fieldColumn
  );

  const dataRibbonForTable = useSelector(
    (state) => state.dataConfiguration.dataRibbon
  );

  const dataPrugTemplate = useSelector(
    (state) => state.dataConfiguration.dataPrugTemplate
  );
  const dataCommands = useSelector((state) => state.dataCommands.dataCommands);

  const dataUsers = useSelector((state) => state.dataUsers.dataUsers);

  const headersStringCommands = useSelector(
    (state) => state.dataCommands.headersString
  );

  const headersStringUsers = useSelector(
    (state) => state.dataUsers.headersString
  );

  const fieldsColumnsCommands = useSelector(
    (state) => state.dataCommands.fieldColumn
  );

  const fieldsColumnsUser = useSelector((state) => state.dataUsers.fieldColumn);

  const selectedRowData = useSelector(
    (state) => state.selectedRowData.selectedRowData
  );

  const dataRoles = useSelector((state) => state.dataRoles.dataRoles);

  const headersStringRoles = useSelector(
    (state) => state.dataRoles.headersString
  );

  const fieldsColumnsRole = useSelector((state) => state.dataRoles.fieldColumn);

  const dataAssignments = useSelector((state) => state.dataAssignment.dataAssignment);
  console.log("dataAssignments",dataAssignments);

  const headersStringAssignments = useSelector(
    (state) => state.dataAssignment.headersString
  );
  console.log("headersStringAssignments",headersStringAssignments);

  const fieldsColumnsAssignments = useSelector((state) => state.dataAssignment.fieldColumn);
  console.log("fieldsColumnsAssignments",fieldsColumnsAssignments);
  

  useEffect(() => {
    if (subTabName === "Configuration") {
      dispatch(fetchConfiguration());
      dispatch(fetchAllRibbon());
      dispatch(fetchPrugTemplate());
    } else if (subTabName === "Commands") {
      dispatch(fetchCommands());
    } else if (subTabName === "User") {
      dispatch(fetchUsers());
    } else if (subTabName === "Roles") {
      dispatch(fetchRoles());
    } else if(subTabName === "Staffing"){
      dispatch(fetchAssignment());
    }
  }, [subTabName]);

  useEffect(() => {}, [dataCommands]);

  useEffect(() => {
    // وقتی subTabName تغییر کرد، اقدام انجام شود
    setSelectedRow(null);
    // setIsEditDisabled(true);
    dispatch(mainSlice.actions.setModeSelectedRow(true));
  }, [subTabName]);

  /////////////////////////DATA FOR TABLE//////////////////////////////////////////////////////////////////////

  const tabDataMap = {
    Configuration: {
      data: dataConfiguration,
      headersString: headersStringConfiguration,
      fieldsColumns: fieldsColumnsConfiguration,
    },
    Commands: {
      data: dataCommands,
      headersString: headersStringCommands,
      fieldsColumns: fieldsColumnsCommands,
    },
    User: {
      data: dataUsers,
      headersString: headersStringUsers,
      fieldsColumns: fieldsColumnsUser,
    },
    Roles: {
      data: dataRoles,
      headersString: headersStringRoles,
      fieldsColumns: fieldsColumnsRole,
    },
    Staffing: {
      data: dataAssignments,
      headersString: headersStringAssignments,
      fieldsColumns: fieldsColumnsAssignments,
    },
  };

  const tabData = subTabName ? tabDataMap[subTabName] : null;

  if (!tabData) {
    return (
      <div>
        <h1>No data available</h1>
      </div>
    );
  }

  const { data, headersString, fieldsColumns } = tabDataMap[subTabName];

  const columnsArray = fieldsColumns.split("|");

  ///////////////////////////ADDITIONAL COLUMNS////////////////////////////////////////////////////

  const additionalColumns = [];

  if (subTabName === "Configuration") {
    additionalColumns.push(
      <Column
        key="Prg.Template"
        field="data2"
        header="Prg.Template"
        body={(rowData) => {
          const foundItems = dataPrugTemplate.filter(
            (item) => item.ID === rowData.FirstIDProgramTemplate
          );
          const data2 = foundItems.length > 0 ? foundItems[0].Name : "";
          return <span>{data2}</span>;
        }}
      />,
      <Column
        key="Default Ribbon"
        field="data2"
        header="Default Ribbon"
        body={(rowData) => {
          const foundItems = dataRibbonForTable.filter(
            (item) => item.ID === rowData.SelMenuIDForMain
          );
          const data2 = foundItems.length > 0 ? foundItems[0].Name : "";

          return <span>{data2}</span>;
        }}
      />
    );
  }

  const handleRowClick = (event) => {
    setSelectedRow(event.data);
    dispatch(mainSlice.actions.setModeSelectedRow(false));
  };

  const handleDelete = () => {
    setSelectedRow(selectedRowData);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    if (subTabName == "Configuration") {
      projectServices
        .deleteSetting({ id: selectedRowData.ID })
        .then((res) => {
          dispatch(fetchConfiguration());
          dispatch(mainSlice.actions.setIsAddClicked(true));
          dispatch(mainSlice.actions.setHandleAddComponent(true));
          dispatch(mainSlice.actions.setModeSelectedRow(true));
          setShowDeleteConfirmation(false);
          toast.current.show({
            severity: "success",
            summary: "Success",
            detail: "Item deleted successfully",
          });
        })
        .catch(() => {});
    } else if (subTabName == "Commands") {
      projectServices
        .deleteCommand({ id: selectedRowData.ID })
        .then((res) => {
          dispatch(fetchCommands());
          dispatch(mainSlice.actions.setIsAddClicked(true));
          dispatch(mainSlice.actions.setHandleAddComponent(true));
          dispatch(mainSlice.actions.setModeSelectedRow(true));
          setShowDeleteConfirmation(false);
          toast.current.show({
            severity: "success",
            summary: "Success",
            detail: "Item deleted successfully",
          });
        })
        .catch(() => {});
    } else if (subTabName == "User") {
      projectServices
        .deleteUser({ gid: selectedRowData.ID })
        .then((res) => {
          dispatch(fetchUsers());
          dispatch(mainSlice.actions.setIsAddClicked(true));
          dispatch(mainSlice.actions.setHandleAddComponent(true));
          dispatch(mainSlice.actions.setModeSelectedRow(true));
          setShowDeleteConfirmation(false);
          toast.current.show({
            severity: "success",
            summary: "Success",
            detail: "Item deleted successfully",
          });
        })
        .catch(() => {});
    } else if (subTabName == "Roles") {
      projectServices
        .deletePost({ gid: selectedRowData.ID })
        .then((res) => {
          dispatch(fetchRoles());
          dispatch(mainSlice.actions.setIsAddClicked(true));
          dispatch(mainSlice.actions.setHandleAddComponent(true));
          dispatch(mainSlice.actions.setModeSelectedRow(true));
          setShowDeleteConfirmation(false);
          toast.current.show({
            severity: "success",
            summary: "Success",
            detail: "Item deleted successfully",
          });
        })
        .catch(() => {});
    }
  };

  const cancelDelete = () => {
    setSelectedRow(null);
    setShowDeleteConfirmation(false);
  };

  //////////////////////////////////////////////////////////////////////////////////////

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        width: "100%",
      }}
      className="fadein animation-duration-300"
    >
      <Toast ref={toast} position="top-right" />

      {/* Delete Confirmation Dialog */}
      <Dialog
        visible={showDeleteConfirmation}
        onHide={cancelDelete}
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        position="center"
        footer={
          <div>
            <Button
              label="No"
              icon="pi pi-times"
              className="p-button-text"
              onClick={cancelDelete}
            />
            <Button
              label="Yes"
              icon="pi pi-check"
              className="p-button-text"
              onClick={confirmDelete}
            />
          </div>
        }
      >
        <div>Do you sure want to delete?</div>
      </Dialog>

      <div>
        <span style={{ fontWeight: "bold" }}>{subTabName}</span>
      </div>
      <div style={{ textAlign: "right", marginTop: "5px" }}>
        <Button
          style={{ backgroundColor: "white", marginRight: "10px" }}
          severity="success"
          onClick={() => {
            dispatch(mainSlice.actions.setIsAddClicked(true));
            dispatch(mainSlice.actions.setHandleAddComponent(true));
            dispatch(mainSlice.actions.setModeSelectedRow(true));
            setSelectedRow(null);
          }}
        >
          <i
            className="pi pi-plus"
            style={{
              cursor: "pointer",
              color: "#0E4F26",
              fontSize: "0.8rem",
            }}
            size="small"
          ></i>
        </Button>

        <Button
          disabled={isEditDisabled}
          style={{ backgroundColor: "white", marginRight: "10px" }}
          severity="warning"
        >
          <i
            className="pi pi-file-edit"
            style={{
              cursor: "pointer",
              color: "#EAB308",
              fontSize: "1rem",
            }}
          ></i>
        </Button>
        <Button
          disabled={isEditDisabled}
          style={{ backgroundColor: "white", marginRight: "10px" }}
          severity="danger"
          onClick={() => {
            handleDelete();
          }}
        >
          <i
            className="pi pi-trash"
            style={{
              cursor: "pointer",
              color: "#D9342B",
              fontSize: "1rem",
            }}
          ></i>
        </Button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <DataTable
          height={500}
          value={data}
          size="small"
          showGridlines
          selectionMode="single"
          selection={selectedRow}
          onSelectionChange={(e) => {
            setSelectedRow(e.value);
            dispatch(mainSlice.actions.setIsAddClicked(false));
            dispatch(mainSlice.actions.setSelectedRowData(e.value));
            dispatch(mainSlice.actions.setHandleAddComponent(true));
          }}
          onRowClick={(event) => handleRowClick(event)}
        >
          {headersString.split("|").map((header, index) => (
            <Column
              key={header}
              field={columnsArray[index]}
              header={header}
            ></Column>
          ))}
          {/* Conditionally render */}
          {additionalColumns}
        </DataTable>
      </div>
    </div>
  );
};

export default TableDynamic;
