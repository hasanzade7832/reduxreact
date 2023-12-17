import TableDynamic from "./TableDynamic/TableDynamic";
import { useEffect } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import tabData from "../utils/tabData";
import AddConfiguration from "../components/configuration/configurationAdd";
import EditConfiguration from "../components/configuration/configurationEdit";
import AddCommands from "../components/commands/AddCommands";
import EditCommands from "../components/commands/EditCommands";
import { mainSlice } from "../redux/mainSlice";

function MainComponent() {
  const dispatch = useDispatch();

  const isAddClicked = useSelector(
    (state: RootState) => state.isAddClicked.isAddClicked
  );

  console.log("AAADDDDDDhOME", isAddClicked);

  const isEditClicked = useSelector(
    (state) => state.isEditClicked.isEditClicked
  );
  console.log("Edittttttthome", isEditClicked);

  let subTabName = useSelector(
    (state: RootState) => state.subTabName.selectedSubTab
  );

  let splitterShow = useSelector(
    (state: RootState) => state.displaySplitter.valueSplitterShow
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

  const shouldDisplayAddConfiguration =
    isAddClicked && subTabName === "Configuration";
  const shouldDisplayEditConfiguration =
    isEditClicked && subTabName === "Configuration";
  const shouldDisplayAddCommands = isAddClicked && subTabName === "Commands";
  const shouldDisplayEditCommands = isEditClicked && subTabName === "Commands";

  useEffect(() => {
    // اگر subTabName تغییر کرد، isAddClicked را به false تنظیم کنید
    dispatch(mainSlice.actions.setIsAddClicked(false));
    dispatch(mainSlice.actions.setIsEditClicked(false));
  }, [subTabName, dispatch]);

  return (
    <>
      {splitterShow && (
        <Splitter style={{ height: "100vh", overflow: "hidden" }}>
          <SplitterPanel className="flex align-items-center justify-content-center">
            <TableDynamic />
          </SplitterPanel>
          <SplitterPanel className="flex align-items-center justify-content-center">
            {shouldDisplayAddConfiguration && <AddConfiguration />}
            {shouldDisplayEditConfiguration && <EditConfiguration />}
            {shouldDisplayAddCommands && <AddCommands />}
            {shouldDisplayEditCommands && <EditCommands />}
          </SplitterPanel>
        </Splitter>
      )}
    </>
  );
}

export default MainComponent;
