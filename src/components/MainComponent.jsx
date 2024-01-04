import TableDynamic from "./TableDynamic/TableDynamic";
import { useEffect, useRef } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { useSelector, useDispatch } from "react-redux";
import tabData from "../utils/tabData";
import AddConfiguration from "../components/configuration/configurationAdd";
import AddCommands from "../components/commands/AddCommands";
import { mainSlice } from "../redux/mainSlice";

function MainComponent() {
  const dispatch = useDispatch();

  let subTabName = useSelector((state) => state.subTabName.selectedSubTab);

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
    if (selectedRowData) {
      dispatch(mainSlice.actions.setHandleAddComponent(true));
    }
  }, [selectedRowData, dispatch]);

  const shouldDisplayAddConfiguration =
    handleAddComponent &&
    subTabName === "Configuration" &&
    subTabName === prevSubTabName;

  return (
    <>
      {splitterShow && (
        <Splitter>
          <SplitterPanel>
            <div
              style={{ width: "100%" }}
              className="flex align-items-center justify-content-center"
            >
              <TableDynamic />
            </div>
          </SplitterPanel>
          <SplitterPanel
            className="flex align-items-center justify-content-center"
            style={{ overflow: "auto" }}
          >
            <div className="w-full h-full">
              {shouldDisplayAddConfiguration && <AddConfiguration />}
            </div>
          </SplitterPanel>
        </Splitter>
      )}
    </>
  );
}

//وقتی زیرتبها عوض میشن قسمتهای add  , edit بسته میشن

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default MainComponent;
