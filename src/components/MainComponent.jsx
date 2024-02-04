import TableDynamic from "./TableDynamic/TableDynamic";
import { useEffect, useRef } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { useSelector, useDispatch } from "react-redux";
import tabData from "../utils/tabData";
import AddConfiguration from "./configuration/Add-Edit/configurationAdd";
import AddCommands from "./commands/Add-Edit/AddCommands";
import AddUser from "./user/Add-Edit/AddUser";
import { mainSlice } from "../redux/mainSlice";

function MainComponent() {
  const dispatch = useDispatch();

  let subTabName = useSelector((state) => state.subTabName.selectedSubTab);
  console.log("subTabName", subTabName);

  const prevSubTabName = usePrevious(subTabName);

  let splitterShow = useSelector(
    (state) => state.displaySplitter.valueSplitterShow
  );

  tabData.map((tab) => {
    if (tab.subTabs && Array.isArray(tab.subTabs)) {
      tab.subTabs.map((sub) => {
        if (subTabName == sub.name) {
          splitterShow = true;
        }
      });
    } else {
      splitterShow = false;
    }
  });

  const selectedRowData = useSelector(
    (state) => state.selectedRowData.selectedRowData
  );

  const handleAddComponent = useSelector(
    (state) => state.handleAddComponent.handleAddComponent
  );

  useEffect(() => {
    dispatch(mainSlice.actions.setHandleAddComponent(false));
    dispatch(mainSlice.actions.setIsAddClicked(false));
  }, [subTabName]);

  useEffect(() => {
    if (selectedRowData) {
      dispatch(mainSlice.actions.setHandleAddComponent(true));
    }
  }, [selectedRowData]);

  //showConfiguration
  const showConfiguration =
    handleAddComponent &&
    subTabName === "Configuration" &&
    subTabName === prevSubTabName;

  //showCommands
  const showCommands =
    handleAddComponent &&
    subTabName === "Commands" &&
    subTabName === prevSubTabName;

  //showUsers

  const showUsers = 
   handleAddComponent &&
   subTabName === "User" &&
   subTabName === prevSubTabName;

  return (
    <>
      {splitterShow && (
        <Splitter>
          <SplitterPanel style={{minWidth:"200px"}}>
              <TableDynamic />
          </SplitterPanel>
          <SplitterPanel style={{minWidth:"300px"}}>
            <div className="w-full h-full">
              {showConfiguration && <AddConfiguration />}
              {showCommands && <AddCommands />}
              {showUsers && <AddUser />}
            </div>
          </SplitterPanel>
        </Splitter>
      )}
    </>
  );
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default MainComponent;
