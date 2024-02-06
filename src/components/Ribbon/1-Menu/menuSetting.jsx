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
  const [showAccardeon, setShowAccardeon] = useState(false);
  const [accordionDisabled1, setAccordionDisabled1] = useState(true);
  const [accordionDisabled2, setAccordionDisabled2] = useState(true);
  const [accordionDisabled3, setAccordionDisabled3] = useState(true);
  const [activeIndex, setActiveIndex] = useState([]);
  const [menuSettingIds, setMenuSettingIds] = useState([]);

  const [products, setProducts] = useState([
    { id: "1", name: "a", category: "a", quantity: "a" },
    { id: "2", name: "a", category: "a", quantity: "a" },
    { id: "3", name: "a", category: "a", quantity: "a" },
    { id: "4", name: "a", category: "a", quantity: "a" },
    { id: "5", name: "a", category: "a", quantity: "a" },
    { id: "6", name: "a", category: "a", quantity: "a" },
    { id: "7", name: "a", category: "a", quantity: "a" },
    { id: "8", name: "a", category: "a", quantity: "a" },
  ]);

  const selectedRowTable = useSelector(
    (state) => state.selectedRowDataRibbon.selectedRowDataRibbon
  );

  console.log("selectedRowTable", selectedRowTable);

  const handleRowClick = (event) => {
    setSelectedRow(event.data);
  };

  const handleTab0 = (event) => {
    setShowAccardeon(true);
    setAccordionDisabled1(false);
    activeIndex.push(0);
  };

  const handleTab1 = () => {
    setAccordionDisabled2(false);
    activeIndex.push(1);
  };

  const handleTab2 = () => {
    setAccordionDisabled3(false);
    activeIndex.push(2);
  };

  const dataMenuSetting = useSelector(
    (state) => state.dataMenuSetting.dataMenuSetting
  );

  console.log("dataMenuSetting", products);

  useEffect(() => {
    dispatch(fetchMenuSetting());
  }, []);

  // useEffect(() => {
  //   const extractedIds = products.map((item) => item.id);
  //   console.log("extractedIds", dataMenuSetting);
  //   setMenuSettingIds(extractedIds);
  // }, [dataMenuSetting]);

  return (
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
            onSelectionChange={(e) => {
              console.log("eeeeee", e.value);
              setSelectedRow(e.value);
              dispatch(ribbonSlice.actions.setSelectedRowDataRibbon(e.value));
            }}
            onRowClick={(event) => handleRowClick(event)}
            onRowDoubleClick={handleTab0}
            className="custom-datatable"
            rowClassName={(rowData) =>
              selectedRow && selectedRow.ID === rowData.ID ? "selected-row" : ""
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
          <Accordion multiple activeIndex={activeIndex}>
            <AccordionTab header="Header I" disabled={accordionDisabled1}>
              <DataTable
                value={products}
                size="small"
                showGridlines
                selectionMode="single"
                selection={selectedRow}
                onSelectionChange={(e) => {
                  console.log("eeeeee", e.value);
                  setSelectedRow(e.value);
                  dispatch(
                    ribbonSlice.actions.setSelectedRowDataRibbon(e.value)
                  );
                }}
                onRowClick={(event) => handleRowClick(event)}
                onRowDoubleClick={handleTab1}
                dataKey="id"
                className="custom-datatable"
                rowClassName={(rowData) =>
                  selectedRow && selectedRow.id === rowData.id
                    ? "selected-row"
                    : ""
                }
                scrollable
                scrollHeight="200px"
              >
                <Column field="id" header="id"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
              </DataTable>
            </AccordionTab>
            <AccordionTab header="Header II" disabled={accordionDisabled2}>
              <DataTable
                value={products}
                size="small"
                showGridlines
                selectionMode="single"
                selection={selectedRow}
                onSelectionChange={(e) => {
                  console.log("eeeeee", e.value);
                  setSelectedRow(e.value);
                  dispatch(
                    ribbonSlice.actions.setSelectedRowDataRibbon(e.value)
                  );
                }}
                onRowClick={(event) => handleRowClick(event)}
                onRowDoubleClick={handleTab2}
                dataKey="id"
                className="custom-datatable"
                rowClassName={(rowData) =>
                  selectedRow && selectedRow.id === rowData.id
                    ? "selected-row"
                    : ""
                }
                scrollable
                scrollHeight="200px"
              >
                <Column field="id" header="id"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
              </DataTable>
            </AccordionTab>
            <AccordionTab header="Header III" disabled={accordionDisabled3}>
              <p className="m-0">panel 3</p>
              <DataTable
                value={products}
                size="small"
                showGridlines
                selectionMode="single"
                selection={selectedRow}
                onSelectionChange={(e) => {
                  console.log("eeeeee", e.value);
                  setSelectedRow(e.value);
                  dispatch(
                    ribbonSlice.actions.setSelectedRowDataRibbon(e.value)
                  );
                }}
                onRowClick={(event) => handleRowClick(event)}
                dataKey="id"
                className="custom-datatable"
                rowClassName={(rowData) =>
                  selectedRow && selectedRow.id === rowData.id
                    ? "selected-row"
                    : ""
                }
                scrollable
                scrollHeight="200px"
              >
                <Column field="id" header="id"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
              </DataTable>
            </AccordionTab>
          </Accordion>
        )}
      </SplitterPanel>
    </Splitter>
  );
}
