import { useSubTab } from "../../contexts/TabContext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProgressSpinner } from "primereact/progressspinner";
import MainComponent from "../MainComponent";
import { useDispatch, useSelector } from "react-redux";
import { mainSlice } from "../../redux/mainSlice";
import { RootState } from "../../redux/store";
import { fetchTodos } from "../../redux/configurationSlice";
import { useEffect } from "react";

const TableDynamic = () => {
  // const {
  //   apiData,
  //   displayHeader,
  //   dynamicTableHeaders,
  //   dynamicTableFields,
  //   loading,
  // } = useSubTab();

  let displayHeader = useSelector(
    (state) => state.displayHeader.valueDisplayHeader
  );
  let subTabName = useSelector((state) => state.subTabName.selectedSubTab);

  displayHeader = subTabName;

  const dispatch = useDispatch();
  const dataConfiguration = useSelector(
    (state) => state.dataConfiguration.data
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <h1>{displayHeader}</h1>
      <DataTable scrollable scrollHeight="80vh" value={dataConfiguration}>
        <Column field="title" header="title"></Column>
      </DataTable>
    </div>
  );
};

export default TableDynamic;
