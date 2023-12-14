import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  fetchConfiguration,
  fetchAllMenu,
  fetchPrugTemplate,
} from "../../redux/configuration/configurationSlice";

const TableDynamic = () => {
  const dispatch = useDispatch();
  const subTabName = useSelector((state) => state.subTabName.selectedSubTab);
  const dataFromFetchData1 = useSelector(
    (state) => state.dataConfiguration.dataConfiguration
  );

  const dataConfigurationForTable = useSelector(
    (state) => state.dataConfiguration.dataMenu
  );

  const dataPrugTemplate = useSelector(
    (state) => state.dataConfiguration.dataPrugTemplate
  );

  useEffect(() => {
    if (subTabName === "Configuration") {
      dispatch(fetchConfiguration());
      dispatch(fetchAllMenu());
      dispatch(fetchPrugTemplate());
    }
  }, [dispatch]);

  useEffect(() => {
    console.log("Data from fetchData1:", dataFromFetchData1);
    console.log("Data from fetchData2:", dataConfigurationForTable);
    console.log("Data from fetchData3:", dataPrugTemplate);
  }, [dataFromFetchData1, dataConfigurationForTable, dataPrugTemplate]);

  const tabDataMap = {
    Configuration: {
      data: useSelector((state) => state.dataConfiguration.dataConfiguration),
      headersString: useSelector(
        (state) => state.dataConfiguration.headersString
      ),
      fieldsColumns: useSelector(
        (state) => state.dataConfiguration.fieldColumn
      ),
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
      <DataTable scrollable scrollHeight="80vh" value={data} showGridlines>
        {headersString.split("|").map((header, index) => (
          <Column
            key={header}
            field={columnsArray[index]}
            header={header}
          ></Column>
        ))}
        {/* configuration */}
        <Column
          field="data2"
          header="Prg.Template"
          body={(rowData) => {
            const foundItem = dataPrugTemplate?.find(
              (item) => item.ID == rowData.FirstIDProgramTemplate
            );
            const data2 = foundItem ? foundItem.Name : "Not Found";
            return <span>{data2}</span>;
          }}
        ></Column>
        <Column
          field="data2"
          header="Default Ribbon"
          body={(rowData) => {
            const foundItem = dataConfigurationForTable?.find(
              (item) => item.ID == rowData.SelMenuIDForMain
            );
            const data2 = foundItem ? foundItem.Name : "Not Found";
            return <span>{data2}</span>;
          }}
        ></Column>
        {/* configuration */}
      </DataTable>
    </div>
  );
};

export default TableDynamic;
