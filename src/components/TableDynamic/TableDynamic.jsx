import { useSubTab } from "../../contexts/TabContext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProgressSpinner } from "primereact/progressspinner";
import MainComponent from "../MainComponent";
import { useDispatch, useSelector } from "react-redux";
import { mainSlice } from "../../redux/mainSlice";
import { RootState } from "../../redux/store";
import { fetchConfiguration } from "../../redux/configurationSlice";
import { fetchComments } from "../../redux/commentsSlice";
import { useEffect } from "react";

const TableDynamic = () => {
  let displayHeader = useSelector(
    (state) => state.displayHeader.valueDisplayHeader
  );
  let subTabName = useSelector((state) => state.subTabName.selectedSubTab);

  displayHeader = subTabName;

  let dataToDisplay;
  if (subTabName === "Configuration") {
    dataToDisplay = useSelector((state) => state.dataConfiguration.data);
  } else if (subTabName === "Commands") {
    dataToDisplay = useSelector((state) => state.datacomments.data);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    if (subTabName === "Configuration") {
      dispatch(fetchConfiguration());
    } else if (subTabName === "Commands") {
      dispatch(fetchComments());
    }
  }, [subTabName]);

  let headersString = "";
  let fieldsColumns = "";
  if (subTabName === "Configuration") {
    headersString = useSelector(
      (state) => state.dataConfiguration.headersString
    );
    fieldsColumns = useSelector((state) => state.dataConfiguration.fieldColumn);
  } else if (subTabName === "Commands") {
    headersString = useSelector((state) => state.datacomments.headersString);
    fieldsColumns = useSelector((state) => state.datacomments.fieldColumn);
  }

  const columnsArray = fieldsColumns.split("|");

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <h1>{displayHeader}</h1>
      <DataTable scrollable scrollHeight="80vh" value={dataToDisplay}>
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
