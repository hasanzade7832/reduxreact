import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import InputCustopm from "../globalComponents/inputCom";
import CustomRadioButtons from "../globalComponents/RadioButtonComp";
import CustomButton from "../globalComponents/buttonComp";

const TableDynamic = () => {
  const [data, setData] = useState([
    { name: "John Doe", command: "Edit", stateText: "Active", order: 1 },
  ]);

  const [selectedRow, setSelectedRow] = useState(null);

  const [ingredient, setIngredient] = useState("");
  const [ingredient1, setIngredient1] = useState("");

  const handleRowSelect = (event) => {
    setSelectedRow(event.data);
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          height: "20vh",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <DataTable
          scrollable
          scrollHeight="80vh"
          showGridlines
          selectionMode="single"
          value={data}
          onRowSelect={handleRowSelect}
          selection={selectedRow}
        >
          <Column field="name" header="Name"></Column>
          <Column field="command" header="Command"></Column>
          <Column field="stateText" header="State Text"></Column>
          <Column field="order" header="Order"></Column>
        </DataTable>
      </div>
      <div style={{ display: "flex" }}>
        <InputCustopm label="Name" />
        <InputCustopm label="State Text" />
      </div>
      <div style={{ display: "flex", marginTop: "30px" }}>
        <div style={{ width: "50%" }}>
          <InputCustopm label="Name" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "50%",
          }}
        >
          <CustomRadioButtons
            value={ingredient}
            onChange={(e) => setIngredient(e.value)}
            checked={ingredient}
            options={[
              { value: "Cheese", label: "Accept" },
              { value: "Mushroom", label: "Reject" },
              { value: "Pepper", label: "Close" },
            ]}
          />
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "30px" }}>
        <div style={{ width: "50%" }}>
          <InputCustopm label="Name" className="p-inputtext-sm" />
        </div>
        <div style={{ display: "flex", alignItems: "center", width: "50%" }}>
          <CustomRadioButtons
            value={ingredient1}
            onChange={(e) => setIngredient1(e.value)}
            checked={ingredient1}
            options={[
              { value: "Cheese", label: "Accept" },
              { value: "Mushroom", label: "Reject" },
              { value: "Pepper", label: "Close" },
            ]}
          />
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "60px" }}>
        <div style={{ display: "flex", width: "50%" }}></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "25%",
          }}
        >
          <span>image:</span>
          <CustomButton label="..." className="p-button-secondary" />
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div>
          <CustomButton label="Design" className="p-button-secondary" />
        </div>
        <div style={{ marginLeft: "5px" }}>
          <CustomButton label="Add" className="p-button-secondary" />
        </div>
        <div style={{ marginLeft: "5px" }}>
          <CustomButton label="Delete" className="p-button-secondary" />
        </div>
        <div style={{ marginLeft: "5px" }}>
          <CustomButton label="New" className="p-button-secondary" />
        </div>
      </div>
    </>
  );
};

export default TableDynamic;
