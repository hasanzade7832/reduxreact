import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  fetchConfiguration,
  fetchAllMenu,
} from "../../redux/configuration/configurationSlice";

const TableDynamic = () => {
  const dispatch = useDispatch();
  const subTabName = useSelector((state) => state.subTabName.selectedSubTab);
  const dataFromFetchData1 = useSelector(
    (state) => state.dataConfiguration.dataConfiguration
  );

  const dataFromFetchData2 = useSelector(
    (state) => state.dataConfiguration.dataMenu
  );

  useEffect(() => {
    if (subTabName === "Configuration") {
      dispatch(fetchConfiguration());
      dispatch(fetchAllMenu());
    }
  }, [dispatch]);

  useEffect(() => {
    console.log("Data from fetchData1:", dataFromFetchData1);
    console.log("Data from fetchData2:", dataFromFetchData2);
  }, [dataFromFetchData1, dataFromFetchData2]);

  const tabDataMap = {
    Configuration: {
      data: useSelector((state) => state.dataConfiguration.data),
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
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <h1>{subTabName}</h1>
      <DataTable scrollable scrollHeight="80vh" value={data}>
        {headersString.split("|").map((header, index) => (
          <Column
            key={header}
            field={columnsArray[index]}
            header={header}
          ></Column>
        ))}
      </DataTable>
    </div>
  );
};

export default TableDynamic;
