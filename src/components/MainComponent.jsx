import TableDynamic from "./TableDynamic/TableDynamic";
import { useEffect, useRef } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { useSelector, useDispatch } from "react-redux";
import tabData from "../utils/tabData";
import AddConfiguration from "./configuration/Add-Edit/configurationAdd";
import AddCommands from "./commands/Add-Edit/AddCommands";
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

  return (
    <>
      {splitterShow && (
        <Splitter>
          <SplitterPanel>
            <div style={{ width: "100%" }}>
              <TableDynamic />
            </div>
          </SplitterPanel>
          <SplitterPanel
            style={{
              height: "100vh",
              overflow: "auto",
              whiteSpace: "nowrap",
              maxHeight: "calc(100vh-300px)",
              height: "calc(100vh-500px)",
            }}
          >
            <div className="w-full h-full">
              {showConfiguration && <AddConfiguration />}
              {showCommands && <AddCommands />}
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
