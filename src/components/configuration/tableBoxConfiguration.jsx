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

  const dispatch = useDispatch();

  const [selectedRow, setSelectedRow] = useState(null);
  

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

  const dataDefaultButton = useSelector((state) => state.selectedNameDefaultButton.selectedNameDefaultButton);
  const dataLetterButton = useSelector((state) => state.selectedNameLetterButton.selectedNameLetterButton);
  const dataMeetingButton = useSelector((state) => state.selectedNameMeetingButton.selectedNameMeetingButton);

  const IdsDefaultButton = useSelector((state) => state.selectedIdDefaultButton.selectedIdDefaultButton);
  const IdsLetterButton = useSelector((state)=>state.selectedIdLetterButton.selectedIdLetterButton);
  const IdsMeetingsButton =  useSelector((state) => state.selectedIdMeetingButton.selectedIdMeetingButton);

  const nameBox = useSelector((state)=>state.selectedBoxName.selectedBoxName);

  const handleRowDblClick = (event) => {

    console.log("doubleRow",event.data.ID);

    const selectedName = event.data.Name;
    const selectedId = event.data.ID;

    const newDataDefaultButton = [...dataDefaultButton];
    const newDataLetterButton = [...dataLetterButton];
    const newDataMeetingButton = [...dataMeetingButton];
    const newSelectedIdDefault = [...IdsDefaultButton];
    const newSelectedIdLetter = [...IdsLetterButton];
    const newSelectedIdMeeting = [...IdsMeetingsButton];

    if (!newDataDefaultButton.includes(selectedName) && nameBox == "DefaultButton") {
      newDataDefaultButton.push(selectedName);
      newSelectedIdDefault.push(selectedId);
      dispatch(mainSlice.actions.setSelectedNameDefaultButton(newDataDefaultButton));
      dispatch(mainSlice.actions.setelectedIdDefaultButton(newSelectedIdDefault));
    }

    if (!newDataLetterButton.includes(selectedName)  && nameBox == "LetterButton") {
      newDataLetterButton.push(selectedName);
      newSelectedIdLetter.push(selectedId);
      dispatch(mainSlice.actions.setselectedNameLetterButton(newDataLetterButton));
      dispatch(mainSlice.actions.setSelectedIdLetterButton(newSelectedIdLetter));
    }

    if (!newDataMeetingButton.includes(selectedName)  && nameBox == "MeetingButton") {
      newDataMeetingButton.push(selectedName);
      newSelectedIdMeeting.push(selectedId);
      dispatch(mainSlice.actions.setSelectedNameMeetingButton(newDataMeetingButton));
      dispatch(mainSlice.actions.setSelectedIdMeetingButton(newSelectedIdMeeting));
    }

    setSelectedRow(event.data);
    dispatch(mainSlice.actions.setIsVisibleBox(false));
  };

  const dataAfBtn = useSelector((state) => state.dataAfBtn.dataAfBtn);

  useEffect(() => {
    dispatch(fetchAfBtn());
  }, []);

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
    projectServices
      .insertAfBtn(formDataAfBtn)
      .then((res) => {
        console.log("AddRes", res.data);
        dispatch(fetchAfBtn());
      })
      .catch(() => {});
  };

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
        <InputCustopm
          label="Name"
          value={formDataAfBtn.Name}
          onChange={handleNameChange}
        />
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
          <CustomButton
            label="Add"
            className="p-button-secondary"
            onClick={addAfBtn}
          />
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
