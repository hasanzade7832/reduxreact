import TableDynamic from "./TableDynamic/TableDynamic";
import { useEffect } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { useSelector, useDispatch } from "react-redux";
import tabData from "../utils/tabData";
import AddConfiguration from "../components/configuration/configurationAdd";
import EditConfiguration from "../components/configuration/configurationEdit";
import AddCommands from "../components/commands/AddCommands";
import EditCommands from "../components/commands/EditCommands";
import { mainSlice } from "../redux/mainSlice";

function MainComponent() {
  const dispatch = useDispatch();

  const isAddClicked = useSelector((state) => state.isAddClicked.isAddClicked);
  const handleAddComponent = useSelector(
    (state) => state.handleAddComponent.handleAddComponent
  );

  const isEditClicked = useSelector(
    (state) => state.isEditClicked.isEditClicked
  );

  let subTabName = useSelector((state) => state.subTabName.selectedSubTab);

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

  useEffect(() => {
    if (selectedRowData) {
      dispatch(mainSlice.actions.setHandleAddComponent(true));
      // dispatch(mainSlice.actions.setIsAddClicked(false));
    }
  }, [selectedRowData]);

  const shouldDisplayAddConfiguration =
    handleAddComponent && subTabName === "Configuration";

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

export default MainComponent;
