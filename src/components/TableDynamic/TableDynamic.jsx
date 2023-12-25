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
import { Button } from "primereact/button";
import { mainSlice } from "../../redux/mainSlice";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog"; // Add this import

const TableDynamic = () => {
  const dispatch = useDispatch();
  const [selectedRow, setSelectedRow] = useState(null);

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDelete = (rowData) => {
    setSelectedRow(rowData);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    setSelectedRow(null);
    setShowDeleteConfirmation(false);
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Item deleted successfully",
    });
  };

  const cancelDelete = () => {
    setSelectedRow(null);
    setShowDeleteConfirmation(false);
  };

  const toast = useRef(null);

  ///////////////////////All data to need this table dynamic////////////////////////////////////////////////
  const subTabName = useSelector((state) => state.subTabName.selectedSubTab);

  const isAddClicked = useSelector((state) => state.isAddClicked.isAddClicked);
  console.log("AAADDDDDD", isAddClicked);

  const isEditClicked = useSelector(
    (state) => state.isEditClicked.isEditClicked
  );
  console.log("Edittttttttt", isEditClicked);

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

  const headersStringCommands = useSelector(
    (state) => state.dataCommands.headersString
  );

  const fieldsColumnsCommands = useSelector(
    (state) => state.dataCommands.fieldColumn
  );

  useEffect(() => {
    if (subTabName === "Configuration") {
      dispatch(fetchConfiguration());
      dispatch(fetchAllRibbon());
      dispatch(fetchPrugTemplate());
    } else if (subTabName === "Commands") {
      dispatch(fetchCommands());
    }
  }, [subTabName]);

  useEffect(() => {}, [dataCommands]);

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
          const data2 =
            foundItems.length > 0 ? foundItems[0].Name : "";
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
          const data2 =
            foundItems.length > 0 ? foundItems[0].Name : "";

          return <span>{data2}</span>;
        }}
      />
    );
  }

  const isEditDisabled = selectedRow === null;

  //////////////////////////////////////////////////////////////////////////////////////

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Toast ref={toast} position="bottom-right" />

      {/* Delete Confirmation Dialog */}
      <Dialog
        visible={showDeleteConfirmation}
        onHide={cancelDelete}
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        position="top"
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

      <h3>{subTabName}</h3>
      <div style={{ textAlign: "right", marginTop: "10px" }}>
        <Button
          icon="pi pi-plus"
          size="small"
          className="p-button-rounded p-button-success "
          onClick={() => {
            dispatch(mainSlice.actions.setIsAddClicked(true));
            dispatch(mainSlice.actions.setIsEditClicked(false));
          }}
        />
        <Button
          icon="pi pi-pencil"
          size="small"
          className="p-button-rounded p-button-warning "
          onClick={() => {
            dispatch(mainSlice.actions.setIsEditClicked(true));
            dispatch(mainSlice.actions.setIsAddClicked(false));
          }}
          disabled={isEditDisabled}
        />
        <Button
          icon="pi pi-trash"
          size="small"
          className="p-button-rounded p-button-danger "
          onClick={() => handleDelete(selectedRow)}
        />
      </div>
      <DataTable
        scrollable
        scrollHeight="80vh"
        value={data}
        showGridlines
        selectionMode="single"
        selection={selectedRow}
        onSelectionChange={(e) => {
          setSelectedRow(e.value);
        }}
        onRowDoubleClick={() => {
          dispatch(mainSlice.actions.setIsEditClicked(true));
          dispatch(mainSlice.actions.setIsAddClicked(false));
        }}
      >
        {headersString.split("|").map((header, index) => (
          <Column
            key={header}
            field={columnsArray[index]}
            header={header}
          ></Column>
        ))}
        {/* configuration */}
        {/* Conditionally render the last two columns for subTabName === "Configuration" */}
        {additionalColumns}
      </DataTable>
    </div>
  );
};

export default TableDynamic;
