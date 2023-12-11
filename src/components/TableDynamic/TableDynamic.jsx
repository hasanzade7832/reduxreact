import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProgressSpinner } from "primereact/progressspinner";
import MainComponent from "../MainComponent";
import { mainSlice } from "../../redux/mainSlice";
import { RootState } from "../../redux/store";
import { fetchConfiguration } from "../../redux/configurationSlice";
import { fetchComments } from "../../redux/commentsSlice";


const TableDynamic = () => {
  const dispatch = useDispatch();
  const subTabName = useSelector((state) => state.subTabName.selectedSubTab);

  useEffect(() => {
    if (subTabName === "Configuration") {
      dispatch(fetchConfiguration());
    } else if (subTabName === "Commands") {
      dispatch(fetchComments());
    }
  }, [subTabName]);


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
    Commands: {
      data: useSelector((state) => state.datacomments.data),
      headersString: useSelector((state) => state.datacomments.headersString),
      fieldsColumns: useSelector((state) => state.datacomments.fieldColumn),
    },
  };

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
