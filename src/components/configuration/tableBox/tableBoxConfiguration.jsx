import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import InputCustopm from "../../globalComponents/main/inputCom";
import CustomRadioButtons from "../../globalComponents/main/RadioButtonComp";
import CustomButton from "../../globalComponents/main/buttonComp";
import { FileUpload } from "primereact/fileupload";
import { Image } from "primereact/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchAfBtn } from "../../../redux/configuration/configurationSlice";
import { mainSlice } from "../../../redux/mainSlice";
import projectServices from "../../services/project.services";
import fileServices from "../../services/file.services";
import configurationSlice from "../../../redux/configuration/configurationSlice";

const TableDynamic = () => {
  const dispatch = useDispatch();

  const [selectedRow, setSelectedRow] = useState(null);

  const [ingredient, setIngredient] = useState(1);
  const [ingredient1, setIngredient1] = useState(1);

  const [formDataAfBtn, setFormDataAfBtn] = useState({
    IsVisible: true,
    LastModified: null,
    ID: 0,
    ModifiedById: null,
    Name: "",
    Tooltip: "",
    StateText: "",
    Order: 0,
    WFStateForDeemed: 1,
    WFCommand: 1,
    IconImageId: null,
  });

  const dataDefaultButton = useSelector(
    (state) => state.selectedNameDefaultButton.selectedNameDefaultButton
  );

  ////console.log("dataDefaultButton",dataDefaultButton);

  const dataLetterButton = useSelector(
    (state) => state.selectedNameLetterButton.selectedNameLetterButton
  );
  const dataMeetingButton = useSelector(
    (state) => state.selectedNameMeetingButton.selectedNameMeetingButton
  );

  const IdsDefaultButton = useSelector(
    (state) => state.selectedIdDefaultButton.selectedIdDefaultButton
  );
  const IdsLetterButton = useSelector(
    (state) => state.selectedIdLetterButton.selectedIdLetterButton
  );
  const IdsMeetingsButton = useSelector(
    (state) => state.selectedIdMeetingButton.selectedIdMeetingButton
  );

  const nameBox = useSelector((state) => state.selectedBoxName.selectedBoxName);

  const nameSelected = useSelector(
    (state) => state.selectedNames.selectedNames
  );
  // ////console.log("nameSelected",nameSelected);

  const handleRowDblClick = (event) => {
    //////console.log("doubleRow", event.data.ID);

    const selectedName = event.data.Name;
    const selectedId = event.data.ID;

    const newDataDefaultButton = [...dataDefaultButton];
    const newDataLetterButton = [...dataLetterButton];
    const newDataMeetingButton = [...dataMeetingButton];
    const newSelectedIdDefault = [...IdsDefaultButton];
    const newSelectedIdLetter = [...IdsLetterButton];
    const newSelectedIdMeeting = [...IdsMeetingsButton];

    if (
      !newDataDefaultButton.includes(selectedName) &&
      nameBox == "DefaultButton"
    ) {
      newDataDefaultButton.push(selectedName);
      newSelectedIdDefault.push(selectedId);

      dispatch(
        mainSlice.actions.setSelectedNameDefaultButton(newDataDefaultButton)
      );
      dispatch(
        mainSlice.actions.setelectedIdDefaultButton(newSelectedIdDefault)
      );
    } else if (
      !newDataLetterButton.includes(selectedName) &&
      nameBox == "LetterButton"
    ) {
      newDataLetterButton.push(selectedName);
      newSelectedIdLetter.push(selectedId);
      dispatch(
        mainSlice.actions.setselectedNameLetterButton(newDataLetterButton)
      );
      dispatch(
        mainSlice.actions.setSelectedIdLetterButton(newSelectedIdLetter)
      );
    } else if (
      !newDataMeetingButton.includes(selectedName) &&
      nameBox == "MeetingButton"
    ) {
      newDataMeetingButton.push(selectedName);
      newSelectedIdMeeting.push(selectedId);
      dispatch(
        mainSlice.actions.setSelectedNameMeetingButton(newDataMeetingButton)
      );
      dispatch(
        mainSlice.actions.setSelectedIdMeetingButton(newSelectedIdMeeting)
      );
    }

    setSelectedRow(event.data);
    dispatch(mainSlice.actions.setIsVisibleBox(false));
  };

  const dataAfBtn = useSelector((state) => state.dataAfBtn.dataAfBtn);

  useEffect(() => {
    dispatch(fetchAfBtn());
  }, []);

  const mapWfcommandToLabel = (WFCommand) => {
    switch (WFCommand) {
      case 1:
        return "Accept";
      case 2:
        return "Reject";
      case 3:
        return "Close";
      case 0:
        return "Unknown";
      default:
        return "";
    }
  };

  const handleNameChange = (fieldName, value) => {
    setFormDataAfBtn((prevFormDataAfBtn) => {
      const updatedFormDataAfBtn = {
        ...prevFormDataAfBtn,
        [fieldName]: value,
      };
      return updatedFormDataAfBtn;
    });
  };

  const handleFileUpload = (event) => {};

  const addAfBtn = () => {
    projectServices
      .insertAfBtn(formDataAfBtn)
      .then((res) => {
        //////console.log("AddRes", res.data);
        dispatch(fetchAfBtn());
      })
      .catch(() => {});
  };

  return (
    <>
      <div>
        <DataTable
          size="small"
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
          onChange={(e) => {
            handleNameChange("Name", e.target.value);
          }}
        />
        <InputCustopm
          label="State Text"
          value={formDataAfBtn.StateText}
          onChange={(e) => {
            handleNameChange("StateText", e.target.value);
          }}
        />
      </div>
      <div style={{ display: "flex", marginTop: "30px" }}>
        <div style={{ width: "50%" }}>
          <InputCustopm
            label="ToolTip"
            onChange={(e) => {
              handleNameChange("ToolTip", e.target.value);
            }}
          />
        </div>
        <div style={{ marginTop: "-10px" }}>
          <div>
            <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
              State:
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "50%",
              marginTop: "10px",
            }}
          >
            <CustomRadioButtons
              value={ingredient}
              onChange={(e) => {
                setIngredient(e.target.value);
                handleNameChange("WFStateForDeemed", e.target.value);
              }}
              checked={ingredient}
              options={[
                { value: 1, label: "Accept" },
                { value: 2, label: "Reject" },
                { value: 3, label: "Close" },
              ]}
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "30px" }}>
        <div style={{ width: "50%" }}>
          <InputCustopm
            label="Order"
            type="number"
            onChange={(e) => {
              handleNameChange("Order", e.target.value);
            }}
          />
        </div>
        <div style={{ marginTop: "-10px" }}>
          <div>
            <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
              Command:
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "50%",
              marginTop: "10px",
            }}
          >
            <CustomRadioButtons
              value={ingredient1}
              onChange={(e) => {
                setIngredient1(e.target.value);
                handleNameChange("WFCommand", e.target.value);
              }}
              checked={ingredient1}
              options={[
                { value: 1, label: "Accept" },
                { value: 2, label: "Reject" },
                { value: 3, label: "Close" },
              ]}
            />
          </div>
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
          <FileUpload
            mode="basic"
            chooseLabel="Choose"
            uploadLabel="Upload"
            cancelLabel="Cancel"
            customUpload
            uploadHandler={(e) => handleFileUpload(e)}
            className="p-button-secondary"
          />

          <div
            className="card flex justify-content-center"
            style={{ marginLeft: "20px" }}
          >
            <Image
              src="https://primefaces.org/cdn/primereact/images/galleria/galleria7.jpg"
              alt="Image"
              width="100"
            />
          </div>

          {/* <CustomButton label="..." className="p-button-secondary" /> */}
          <image />
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
