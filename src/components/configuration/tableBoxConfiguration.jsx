import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import InputCustopm from "../globalComponents/inputCom";

const TableDynamic = () => {
    const [data, setData] = useState([
        { name: "John Doe", command: "Edit", stateText: "Active", order: 1 },
    ]);

    const [selectedRow, setSelectedRow] = useState(null);

    const [ingredient, setIngredient] = useState('');
    const [ingredient1, setIngredient1] = useState('');


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
                <div style={{ display: "flex", alignItems: "center", width: "50%" }}>
                    <div style={{ whiteSpace: "nowrap" }}>
                        <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
                        <label htmlFor="ingredient1" style={{}}>Accept</label>
                    </div>
                    <div style={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
                        <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
                        <label htmlFor="ingredient2">Reject</label>
                    </div>
                    <div style={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
                        <RadioButton inputId="ingredient3" name="pizza" value="Pepper" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Pepper'} />
                        <label htmlFor="ingredient3">Close</label>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", marginTop: "30px" }}>
                <div style={{ width: "50%" }}>
                    <InputCustopm label="Name" />
                </div>
                <div style={{ display: "flex", alignItems: "center", width: "50%" }}>
                    <div style={{ whiteSpace: "nowrap" }}>
                        <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient1(e.value)} checked={ingredient1 === 'Cheese'} />
                        <label htmlFor="ingredient1" style={{}}>Accept</label>
                    </div>
                    <div style={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
                        <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e) => setIngredient1(e.value)} checked={ingredient1 === 'Mushroom'} />
                        <label htmlFor="ingredient2">Reject</label>
                    </div>
                    <div style={{ marginLeft: "10px", whiteSpace: "nowrap" }}>
                        <RadioButton inputId="ingredient3" name="pizza" value="Pepper" onChange={(e) => setIngredient1(e.value)} checked={ingredient1 === 'Pepper'} />
                        <label htmlFor="ingredient3">Close</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableDynamic;
