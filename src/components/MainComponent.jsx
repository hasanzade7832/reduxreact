import TableDynamic from "./TableDynamic/TableDynamic";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import tabData from "../utils/tabData";

function MainComponent() {

  let subTabName = useSelector((state:RootState)=>state.subTabName.selectedSubTab);
  let splitterShow = useSelector((state:RootState)=>state.displaySplitter.valueSplitterShow);

  tabData.map((tab) => {
    if (tab.subTabs && Array.isArray(tab.subTabs)) {
     tab.subTabs.map((sub) => { 
        if(subTabName==sub.name){
          splitterShow=true;
        }
       });
    } else {
      splitterShow=false;
    }
  });
  
  return (
    <>
      {splitterShow && (
        <Splitter style={{ height: "100vh" }}>
          <SplitterPanel className="flex align-items-center justify-content-center">
            <TableDynamic />
          </SplitterPanel>
          <SplitterPanel className="flex align-items-center justify-content-center">
            Panel 2
          </SplitterPanel>
        </Splitter>
      )}
    </>
  );
}

export default MainComponent;
