import TableDynamic from "./TableDynamic/TableDynamic";
import { useEffect, useRef } from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { useSelector, useDispatch } from "react-redux";
import tabData from "../utils/tabData";
import AddConfiguration from "./configuration/Add-Edit/configurationAdd";
import AddCommands from "./commands/Add-Edit/AddCommands";
import AddUser from "./user/Add-Edit/AddUser";
import AddRoles from "./Roles/Add-Edit/Roles";
import AddAsignment from "./assignments/Add-Edit/AddAssignment";
import { mainSlice } from "../redux/mainSlice";
import MainRibbonTab from "../components/Ribbon/1-Menu/menuSetting";

function MainComponent() {
  const dispatch = useDispatch();

  let subTabName = useSelector((state) => state.subTabName.selectedSubTab);
  console.log("subTabName", subTabName);

  const prevSubTabName = usePrevious(subTabName);

  let splitterShow = useSelector(
    (state) => state.displaySplitter.valueSplitterShow
  );

  tabData.forEach((tab) => {
    if (tab.subTabs && Array.isArray(tab.subTabs)) {
      tab.subTabs.forEach((sub) => {
        if (subTabName === sub.name) {
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

  //showRoles
  const showRoles =
    handleAddComponent &&
    subTabName === "Roles" &&
    subTabName === prevSubTabName;

  //assignment
  const showAssignment =
    handleAddComponent &&
    subTabName === "Staffing" &&
    subTabName === prevSubTabName;

  return (
    <>
      {splitterShow && subTabName !== "Ribbon" && (
        <Splitter>
          <SplitterPanel style={{ minWidth: "200px" }}>
            <TableDynamic />
          </SplitterPanel>
          <SplitterPanel style={{ minWidth: "300px" }}>
            <div className="w-full h-full">
              {showConfiguration && <AddConfiguration />}
              {showCommands && <AddCommands />}
              {showUsers && <AddUser />}
              {showRoles && <AddRoles />}
              {showAssignment && <AddAsignment/>}
            </div>
          </SplitterPanel>
        </Splitter>
      )}

      {subTabName === "Ribbon" && <MainRibbonTab />}
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
