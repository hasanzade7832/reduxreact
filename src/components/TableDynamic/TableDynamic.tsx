import { useSubTab } from "../../contexts/TabContext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProgressSpinner } from "primereact/progressspinner";
import MainComponent from "../MainComponent";
import { useDispatch, useSelector } from "react-redux";
import { mainSlice } from "../../redux/mainSlice";
import { RootState } from "../../redux/store";

const TableDynamic = () => {
  // const {
  //   apiData,
  //   displayHeader,
  //   dynamicTableHeaders,
  //   dynamicTableFields,
  //   loading,
  // } = useSubTab();


  let displayHeader = useSelector((state:RootState)=>state.displayHeader.valueDisplayHeader);
  let subTabName = useSelector((state:RootState)=>state.subTabName.selectedSubTab);

  displayHeader = subTabName;

  // const headers = dynamicTableHeaders.split("|");
  // const fields = dynamicTableFields.split("|");

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <h1>{displayHeader}</h1>

      {/* {loading ? (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ProgressSpinner
            style={{ width: "50px", height: "50px" }}
            strokeWidth="8"
            fill="#EEEEEE"
            animationDuration=".5s"
          />
        </div>
      ) : (
        <DataTable scrollable scrollHeight="80vh" value={apiData}>
          {headers.map((header, index) => (
            <Column key={index} field={fields[index]} header={header}></Column>
          ))}
        </DataTable>
      )} */}
    </div>
  );
};

export default TableDynamic;
