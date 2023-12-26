import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import InputCustopm from "../globalComponents/inputCom";
import CustomRadioButtons from "../globalComponents/RadioButtonComp";
import CustomButton from "../globalComponents/buttonComp";
import { useDispatch, useSelector } from "react-redux";
import { fetchAfBtn } from "../../redux/configuration/configurationSlice";
import { mainSlice } from "../../redux/mainSlice";
import projectServices from "../services/project.services";

const TableDynamic = () => {
  const [dataTable, setDataTable] = useState([]);


  const dispatch = useDispatch();

  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedNames, setSelectedNames] = useState([]);

  const [ingredient, setIngredient] = useState("");
  const [ingredient1, setIngredient1] = useState("");

  const [formDataAfBtn, setFormDataAfBtn] = useState({
    IsVisible: true,
    LastModified: null,
    ID: 0,
    ModifiedById: null,
    Name: "",
    Tooltip: "",
    StateText: "",
    Order: 0,
    WFStateForDeemed: 0,
    WFCommand: 0,
    IconImageId: null,
  });

  const dataAfBtns = useSelector((state) => state.selectedNameDoubleBox.selectedNameDoubleBox);
  const handleRowDblClick = (event) => {
    const selectedName = event.data.Name;
    if (!selectedNames.includes(selectedName)) {
      console.log("dataaaaaaaaa", dataAfBtns)
      setSelectedNames((data) => {
        const newNames = [selectedName].push(dataAfBtn);
        console.log("preeeeeeee", newNames);
        dispatch(mainSlice.actions.setSelectedNameDoubleBox(newNames));
        return newNames;
      });
    }

    setSelectedRow(event.data);
    dispatch(mainSlice.actions.setIsVisibleBox(false));
  };




  const dataAfBtn = useSelector((state) => state.dataAfBtn.dataAfBtn);
  console.log("dataAfBtn", dataAfBtn);

  useEffect(() => {
    dispatch(fetchAfBtn());
  }, [])

  const mapWfcommandToLabel = (wfcommand) => {
    switch (wfcommand) {
      case 1:
        return "Accept";
      case 2:
        return "Reject";
      case 0:
        return "Unknown";
      default:
        return "";
    }
  };

  const handleNameChange = (e) => {
    setFormDataAfBtn((prevData) => ({
      ...prevData,
      Name: e.target.value,
    }));
  };

  const addAfBtn = () => {
    console.log("ADDDDDDDDD")
    console.log("formDataAfBtn", formDataAfBtn)
    projectServices
      .insertAfBtn(formDataAfBtn)
      .then((res) => {
        console.log("AddRes", res.data)
        dispatch(fetchAfBtn());
      })
      .catch(() => { });
  }

  return (
    <>
      <div>
        <DataTable
          scrollable
          scrollHeight="30vh"
          showGridlines
          selectionMode="single"
          value={dataAfBtn}
          onRowDoubleClick={handleRowDblClick}
          selection={selectedRow}
        >
          <Column field="Name" header="Name"></Column>
          <Column
            field="WFCommand"
            header="Command"
            body={(rowData) => mapWfcommandToLabel(rowData.WFCommand)}
          ></Column>
          <Column field="StateText" header="State Text"></Column>
          <Column field="Order" header="Order"></Column>

        </DataTable>
      </div>
      <div style={{ display: "flex", marginTop: "50px" }}>
        <InputCustopm label="Name" value={formDataAfBtn.Name} onChange={handleNameChange} />
        <InputCustopm label="State Text" />
      </div>
      <div style={{ display: "flex", marginTop: "30px" }}>
        <div style={{ width: "50%" }}>
          <InputCustopm label="ToolTip" />
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
          <InputCustopm label="Order" className="p-inputtext-sm" />
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
          <CustomButton label="Add" className="p-button-secondary" onClick={addAfBtn} />
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