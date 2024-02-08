import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Splitter, SplitterPanel } from "primereact/splitter";
import CustomInputText from "../../globalComponents/main/inputCom";
import { Accordion, AccordionTab } from "primereact/accordion";
import ribbonSlice from "../../../redux/ribbon/ribbonSlice";
import { fetchMenuSetting } from "../../../redux/ribbon/ribbonSlice";
import projectServices from "../../services/project.services";

import "../../Ribbon/ribbon.css";

export default function MenuSetting() {
  const dispatch = useDispatch();

  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRowTab, setSelectedRowTab] = useState(null);
  const [selectedRowGroup, setSelectedRowGroup] = useState(null);
  const [selectedRowItem, setSelectedRowItem] = useState(null);
  const [showAccardeon, setShowAccardeon] = useState(false);
  const [accordionDisabled1, setAccordionDisabled1] = useState(true);
  const [accordionDisabled2, setAccordionDisabled2] = useState(true);
  const [accordionDisabled3, setAccordionDisabled3] = useState(true);
  const [activeIndex, setActiveIndex] = useState([]);
  const [dataMenuTab, setDataMenuTab] = useState([]);
  const [dataMenuTabRes, setDataMenuTabRes] = useState([]);
  const [dataMenuGroup, setDataMenuGroup] = useState([]);
  const [dataMenuGroupRes, setDataMenuGroupRes] = useState([]);
  const [dataMenuItem, setDataMenuItem] = useState([]);
  const [dataMenuItemRes, setDataMenuItemRes] = useState([]);

  const selectedRowTable = useSelector(
    (state) => state.selectedRowDataRibbon.selectedRowDataRibbon
  );

  console.log("selectedRowTable", selectedRowTable);

  const dataMenuSetting = useSelector(
    (state) => state.dataMenuSetting.dataMenuSetting
  );

  const handleRowClick = (event) => {
    console.log("main");
  };

  const handleRowClickTab = (event) => {
    setSelectedRowTab(event.data);
  };

  const handleRowClickGroup = (event) => {
    setSelectedRowGroup(event.data);
  };

  const handleRowClickItem = (event) => {
    setSelectedRowItem(event.data);
  };

  const handleTab0 = (event) => {
    setShowAccardeon(false);
    setAccordionDisabled1(false);
    setAccordionDisabled2(false);
    setAccordionDisabled3(false);
    setSelectedRow(event.data);
    setActiveIndex([]);
    setTimeout(() => {
      setShowAccardeon(true);
      // setAccordionDisabled1(true);
      setAccordionDisabled2(true);
      setAccordionDisabled3(true);
      setDataMenuTabRes([]);
      setDataMenuGroupRes([]);
      setDataMenuItemRes([]);
    }, 50);
    setActiveIndex([0]);
  };

  const handleTab1 = (event) => {
    console.log("ffffff", event);
    setDataMenuGroup(event.data);
    setAccordionDisabled2(false);
    activeIndex.push(1);
  };

  const handleTab2 = (event) => {
    setDataMenuItem(event.data);
    setAccordionDisabled3(false);
    activeIndex.push(2);
  };

  useEffect(() => {
    dispatch(fetchMenuSetting());
  }, []);

  useEffect(() => {
    if (selectedRow?.ID) {
      projectServices
        .getMenuTabByMenuId({ id: selectedRow?.ID })
        .then((res) => {
          console.log("AAAAAAAAAAAA", res.data);
          setDataMenuTabRes(res.data);
        })
        .catch(() => {});
    }
  }, [selectedRow, dataMenuTab]);

  useEffect(() => {
    if (dataMenuGroup?.ID) {
      projectServices
        .getMenuGroupByMenuTabId({ id: dataMenuGroup?.ID })
        .then((res) => {
          console.log("BBBBBBBBBBB", res.data);
          setDataMenuGroupRes(res.data);
        })
        .catch(() => {});
    }
  }, [dataMenuGroup]);

  useEffect(() => {
    if (dataMenuItem?.ID) {
      projectServices
        .getMenuItemByMenuGroupID({ id: dataMenuItem?.ID })
        .then((res) => {
          console.log("CCCCCCCCC", res.data);
          setDataMenuItemRes(res.data);
        })
        .catch(() => {});
    }
  }, [dataMenuItem]);

  useEffect(() => {
    console.log("ac", activeIndex);
  }, [activeIndex]);

  const handleRowSelectionChange = (e) => {
    // setAccordionDisabled2(true);
    // setAccordionDisabled3(true);
  };
  return (
    <>
      <Splitter className="custom-splitter">
        <SplitterPanel style={{ minwidth: "100px", overflow: "hidden" }}>
          <div
            className="card"
            style={{
              height: "95vh",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <DataTable
              value={dataMenuSetting}
              size="small"
              showGridlines
              selectionMode="single"
              selection={selectedRow}
              onSelectionChange={handleRowSelectionChange}
              onRowClick={(event) => handleRowClick(event)}
              onRowDoubleClick={handleTab0}
              className="custom-datatable"
              rowClassName={(rowData) =>
                selectedRow && selectedRow.ID === rowData.ID
                  ? "selected-row"
                  : ""
              }
            >
              <Column field="Name" header="Name"></Column>
            </DataTable>
            <div style={{ display: "flex" }}>
              <div style={{ margin: "10px", width: "50%" }}>
                <CustomInputText />
              </div>
              <div style={{ margin: "10px", width: "50%" }}>
                <CustomInputText />
              </div>
            </div>
          </div>
        </SplitterPanel>
        <SplitterPanel
          style={{
            overflowY: "auto",
            whiteSpace: "nowrap",
            height: "100vh",
            maxHeight: "calc(100vh - 10rem)",
            minWidth: "300px",
          }}
        >
          {showAccardeon && (
            <Accordion
              onChange={(e) => console.log("Ddddddd", e)}
              multiple
              activeIndex={activeIndex}
            >
              <AccordionTab header="Header I" disabled={accordionDisabled1}>
                <DataTable
                  value={dataMenuTabRes}
                  size="small"
                  showGridlines
                  selectionMode="single"
                  selection={selectedRowTab}
                  onSelectionChange={(e) => {
                    console.log("eeeeee", e.value);
                    setSelectedRowTab(e.value);
                    dispatch(
                      ribbonSlice.actions.setSelectedRowDataRibbon(e.value)
                    );
                  }}
                  onRowClick={(event) => handleRowClickTab(event)}
                  onRowDoubleClick={handleTab1}
                  className="custom-datatable"
                  rowClassName={(rowData) =>
                    selectedRowTab && selectedRowTab.ID === rowData.ID
                      ? "selected-row"
                      : ""
                  }
                  scrollable
                  scrollHeight="200px"
                >
                  <Column field="Name" header="Name"></Column>
                  <Column field="Description" header="Description"></Column>
                  <Column field="Order" header="Order"></Column>
                </DataTable>
              </AccordionTab>
              <AccordionTab header="Header II" disabled={accordionDisabled2}>
                <DataTable
                  value={dataMenuGroupRes}
                  size="small"
                  showGridlines
                  selectionMode="single"
                  selection={selectedRowGroup}
                  onSelectionChange={(e) => {
                    console.log("eeeeee", e.value);
                    setSelectedRowGroup(e.value);
                    dispatch(
                      ribbonSlice.actions.setSelectedRowDataRibbon(e.value)
                    );
                  }}
                  onRowClick={(event) => handleRowClickGroup(event)}
                  onRowDoubleClick={handleTab2}
                  className="custom-datatable"
                  rowClassName={(rowData) =>
                    selectedRowGroup && selectedRowGroup.ID === rowData.ID
                      ? "selected-row"
                      : ""
                  }
                  scrollable
                  scrollHeight="200px"
                >
                  <Column field="Name" header="Name"></Column>
                  <Column field="Description" header="Description"></Column>
                  <Column field="Order" header="Order"></Column>
                </DataTable>
              </AccordionTab>
              <AccordionTab header="Header III" disabled={accordionDisabled3}>
                <DataTable
                  value={dataMenuItemRes}
                  size="small"
                  showGridlines
                  selectionMode="single"
                  selection={selectedRowItem}
                  onSelectionChange={(e) => {
                    console.log("eeeeee", e.value);
                    setSelectedRowItem(e.value);
                    dispatch(
                      ribbonSlice.actions.setSelectedRowDataRibbon(e.value)
                    );
                  }}
                  onRowClick={(event) => handleRowClickItem(event)}
                  className="custom-datatable"
                  rowClassName={(rowData) =>
                    selectedRowItem && selectedRowItem.ID === rowData.ID
                      ? "selected-row"
                      : ""
                  }
                  scrollable
                  scrollHeight="200px"
                >
                  <Column field="Name" header="Name"></Column>
                  <Column field="category" header="Category"></Column>
                  <Column field="quantity" header="Quantity"></Column>
                </DataTable>
              </AccordionTab>
            </Accordion>
          )}
        </SplitterPanel>
      </Splitter>
    </>
  );
}
