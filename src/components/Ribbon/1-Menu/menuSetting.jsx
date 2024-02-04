import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Splitter, SplitterPanel } from "primereact/splitter";
import CustomInputText from "../../globalComponents/main/inputCom";

import "../../Ribbon/ribbon.css";

export default function MenuSetting() {
  const [products, setProducts] = useState([
    { code: "a", name: "a", category: "a", quantity: "a" },
    { code: "a", name: "a", category: "a", quantity: "a" },
  ]);

  return (
    <Splitter className="custom-splitter" style={{ overflow: "hidden" }}>
      <SplitterPanel style={{ minwidth: "10px" }}>
        {/* <div> */}
        <div
          className="card"
          style={{
            // position: "relative",
            height: "100vh",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <DataTable value={products} size="small">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
          </DataTable>
        </div>
        {/* <div style={{ marginTop: "30px", display: "flex", margin: "5px" }}>
          <div>
            <CustomInputText />
          </div>
          <div>
            <CustomInputText />
          </div>
        </div> */}
        {/* </div> */}
      </SplitterPanel>
      <SplitterPanel style={{ minWidth: "300px" }}></SplitterPanel>
    </Splitter>
  );
}
