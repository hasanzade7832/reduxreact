import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Splitter, SplitterPanel } from "primereact/splitter";
import CustomInputText from "../../globalComponents/main/inputCom";
import { Accordion, AccordionTab } from 'primereact/accordion';
import ribbonSlice from "../../../redux/ribbon/ribbonSlice";

import "../../Ribbon/ribbon.css";

export default function MenuSetting() {

  const dispatch = useDispatch();

  const [selectedRow, setSelectedRow] = useState(null);
  const [showAccardeon,setShowAccardeon] = useState(false);
  const [accordionDisabled1, setAccordionDisabled1] = useState(true);
  const [accordionDisabled2, setAccordionDisabled2] = useState(true);
  const [accordionDisabled3, setAccordionDisabled3] = useState(true);
  const [activeIndex,setActiveIndex] = useState([]);

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

  console.log("selectedRowTable",selectedRowTable);

  const handleRowClick = (event) => {
    setSelectedRow(event.data);
    setShowAccardeon(true);
    setAccordionDisabled1(false);
    activeIndex.push(0)
  };

  const handleTab1 = () => {
    setAccordionDisabled2(false);
    activeIndex.push(1)
  }

  const handleTab2 = () => {
    setAccordionDisabled3(false);
    activeIndex.push(2)
  }

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
           value={products}
           size="small"
           showGridlines
           selectionMode="single"
           selection={selectedRow}
           onSelectionChange={(e) => {
            console.log("eeeeee",e.value)
            setSelectedRow(e.value);
            dispatch(ribbonSlice.actions.setSelectedRowDataRibbon(e.value));
          }}
          onRowClick={(event) => handleRowClick(event)}
          dataKey="id"
          className="custom-datatable"
          rowClassName={(rowData) => selectedRow && selectedRow.id === rowData.id ? 'selected-row' : ''}
          >
            
            <Column field="id" header="id"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
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
      <SplitterPanel style={{ minWidth: "300px" }}>
        {showAccardeon && 
          <Accordion  multiple activeIndex={activeIndex}>
          <AccordionTab header="Header I" disabled={accordionDisabled1}>
            <p className="m-0" onClick={handleTab1}>
              panel 1
            </p>
          </AccordionTab>
          <AccordionTab header="Header II" disabled = {accordionDisabled2}>
            <p className="m-0" onClick={handleTab2}>
              panel 2
            </p>
          </AccordionTab>
          <AccordionTab header="Header III" disabled = {accordionDisabled3}>
            <p className="m-0">
              panel 3
            </p>
          </AccordionTab>
        </Accordion>
        }
      </SplitterPanel>
    </Splitter>
  );
}
