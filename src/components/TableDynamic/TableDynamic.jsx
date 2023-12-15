import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  fetchConfiguration,
  fetchAllMenu,
  fetchPrugTemplate,
} from "../../redux/configuration/configurationSlice";
import { fetchCommands } from "../../redux/commands/commandsSlice";
import { Button } from "primereact/button";

const TableDynamic = () => {
  const dispatch = useDispatch();
  const subTabName = useSelector((state) => state.subTabName.selectedSubTab);

  console.log("sub", subTabName);

  const dataConfiguration = useSelector(
    (state) => state.dataConfiguration.dataConfiguration
  );

  const headersStringConfiguration = useSelector(
    (state) => state.dataConfiguration.headersString
  );

  const fieldsColumnsConfiguration = useSelector(
    (state) => state.dataConfiguration.fieldColumn
  );

  const dataMenuForTable = useSelector(
    (state) => state.dataConfiguration.dataMenu
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
      dispatch(fetchAllMenu());
      dispatch(fetchPrugTemplate());
    }
  }, [subTabName]);

  useEffect(() => {
    if (subTabName === "Commands") {
      dispatch(fetchCommands());
    }
  }, [subTabName]);

  useEffect(() => {
    console.log("Data from fetchData4:", dataCommands);
  }, [dataCommands]);

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
            foundItems.length > 0 ? foundItems[0].Name : "Not Found";
          console.log("data22222222", data2);
          return <span>{data2}</span>;
        }}
      />,
      <Column
        key="Default Ribbon"
        field="data2"
        header="Default Ribbon"
        body={(rowData) => {
          const foundItems = dataMenuForTable.filter(
            (item) => item.ID === rowData.SelMenuIDForMain
          );
          const data2 =
            foundItems.length > 0 ? foundItems[0].Name : "Not Found";

          return <span>{data2}</span>;
        }}
      />
    );
  }
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
      <h1>{subTabName}</h1>
      <div style={{ textAlign: "right", marginTop: "10px" }}>
        <Button
          icon="pi pi-plus"
          className="p-button-rounded p-button-success"
          onClick={() => handleAdd(rowData)}
        />
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-warning"
          onClick={() => handleEdit(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => handleDelete(rowData)}
        />
      </div>
      <DataTable scrollable scrollHeight="80vh" value={data} showGridlines>
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
