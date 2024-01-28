import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../../../assets/styles/global.css";
import { mainSlice } from "../../../redux/mainSlice";
import { useDispatch, useSelector } from "react-redux";

const CustomComponent = ({
  dialogData,
  titleBox,
  selectedNames,
  selectedNamesEdit,
  selectedId,
  selectedIdEdit,
}) => {
  const dispatch = useDispatch();

  const [updatedNames, setUpdatedNames] = useState([]);
  const [updatedNamesEdit, setUpdatedNamesEdit] = useState([]);
  const [updatedId, setUpdatedId] = useState([]);
  const [updatedIdEdit, setUpdatedIdEdit] = useState([]);

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (selectedNamesEdit.length > 0 || selectedIdEdit.length > 0) {
      setIsEditMode(true);
    } else {
      setIsEditMode(false);
    }
  }, [selectedNamesEdit, selectedIdEdit]);

  useEffect(() => {
    setUpdatedNames(selectedNames);
    setUpdatedNamesEdit([...selectedNamesEdit, ...selectedNames]);
    setUpdatedId(selectedId);
    setUpdatedIdEdit([...selectedIdEdit, ...selectedId]);
  }, [selectedNames, selectedNamesEdit, selectedId, selectedIdEdit]);

  const dataDefaultButton = useSelector(
    (state) => state.selectedNameDefaultButton.selectedNameDefaultButton
  );

  const IdsDefaultButton = useSelector(
    (state) => state.selectedIdDefaultButton.selectedIdDefaultButton
  );

  const handleDoubleClick = (index) => {
    const updatedNamesCopy = [...dataDefaultButton];
    const updatedIdsCopy = [...IdsDefaultButton];
    updatedNamesCopy.splice(index, 1);
    updatedIdsCopy.splice(index, 1);
    setUpdatedNames(updatedNamesCopy);
    setUpdatedId(updatedIdsCopy);
    dispatch(mainSlice.actions.setSelectedNameDefaultButton(updatedNamesCopy));
    dispatch(mainSlice.actions.setelectedIdDefaultButton(updatedIdsCopy));
  };

  const handleDoubleClickEdit = (index) => {
    const updatedNamesEditCopy = [...selectedNamesEdit];
    const updatedIdsEditCopy = [...selectedIdEdit];
    updatedNamesEditCopy.splice(index, 1);
    updatedIdsEditCopy.splice(index, 1);
    setUpdatedNamesEdit(updatedNamesEditCopy);
    setUpdatedIdEdit(updatedIdsEditCopy);
    dispatch(
      mainSlice.actions.setSelectedNameDefaultButtonEdit(updatedNamesEditCopy)
    );
    dispatch(
      mainSlice.actions.setelectedIdDefaultButtonEdit(updatedIdsEditCopy)
    );
  };

  const selectedRow = useSelector(
    (state) => state.selectedRowData.selectedRowData
  );
  useEffect(() => {
    if (selectedRow) {
      dispatch(mainSlice.actions.setSelectedNameDefaultButton([]));
      dispatch(mainSlice.actions.setelectedIdDefaultButton([]));
    }
  }, [selectedRow, dispatch]);

  return (
    <>
      <div
        style={{
          background: "#C8C9CE",
          height: "100px",
          position: "relative",
          maxHeight: "200px",
          overflowY: "auto",
          overflowX: "auto",
          width: "100%",
        }}
      >
        <Button
          label="+"
          size="small"
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            backgroundColor: "#FF1D18",
            padding: "5px",
            height: "20%",
          }}
          onClick={dialogData}
          color="black"
        />
        <span style={{ margin: "10px", fontSize: "0.8rem", color: "black" }}>
          {titleBox}
        </span>
        <hr
          style={{
            position: "absolute",
            width: "100%",
            marginTop: "1px",
          }}
        />
        <div>
          {isEditMode
            ? updatedNamesEdit.map((name, index) => (
                <div
                  onDoubleClick={() => handleDoubleClickEdit(index)}
                  style={{ padding: "2px", margin: "5px", cursor: "pointer" }}
                  key={index}
                >
                  {name}
                </div>
              ))
            : updatedNames.map((name, index) => (
                <div
                  onDoubleClick={() => handleDoubleClick(index)}
                  style={{ padding: "2px", margin: "5px", cursor: "pointer" }}
                  key={index}
                >
                  {name}
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default CustomComponent;
