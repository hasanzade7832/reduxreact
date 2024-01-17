import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../../assets/styles/global.css";
import configurationSlice from "../../redux/configuration/configurationSlice";
import { mainSlice } from "../../redux/mainSlice";
import { useDispatch, useSelector } from "react-redux";

const CustomComponent = ({
  dialogData,
  titleBox,
  selectedNames,
  selectedId,
}) => {
  const dispatch = useDispatch();

  const [updatedNames, setUpdatedNames] = useState([]);
  const [updatedId, setUpdatedId] = useState([]);
  const [updatedId1, setUpdatedId1] = useState([]);

  useEffect(() => {
    setUpdatedNames(selectedNames);
  }, [selectedNames]);

  const dataDefaultButton = useSelector(
    (state) => state.selectedNameDefaultButton.selectedNameDefaultButton
  );

  const IdsDefaultButton = useSelector(
    (state) => state.selectedIdDefaultButton.selectedIdDefaultButton
  );

  const dataLetterButton = useSelector(
    (state) => state.selectedNameLetterButton.selectedNameLetterButton
  );

  const IdsLetterButton = useSelector(
    (state) => state.selectedIdLetterButton.selectedIdLetterButton
  );

  const boxName = useSelector((state) => state.selectedBoxName.selectedBoxName);

  const handleDoubleClick = (index, boxName) => {
    const updatedNamesCopy = [...dataDefaultButton];
    const updatedIdsCopy = [...IdsDefaultButton];
    updatedNamesCopy.splice(index, 1);
    updatedIdsCopy.splice(index, 1);
    setUpdatedNames(updatedNamesCopy);
    setUpdatedId(updatedIdsCopy);
    dispatch(mainSlice.actions.setSelectedNameDefaultButton(updatedNamesCopy));
    dispatch(mainSlice.actions.setelectedIdDefaultButton(updatedIdsCopy));

    const updatedNamesLetterCopy = [...dataLetterButton];
    const updatedIdsLetterCopy = [...IdsLetterButton];
    updatedNamesLetterCopy.splice(index, 1);
    updatedIdsLetterCopy.splice(index, 1);

    setUpdatedNames(updatedNamesLetterCopy);
    setUpdatedId1(updatedIdsLetterCopy);

    dispatch(
      mainSlice.actions.setselectedNameLetterButton(updatedNamesLetterCopy)
    );
    dispatch(mainSlice.actions.setSelectedIdLetterButton(updatedIdsLetterCopy));
  };

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
          {Array.isArray(updatedNames) && updatedNames.length ? (
            updatedNames.map((name, index) => (
              <div
                onDoubleClick={() => handleDoubleClick(index, boxName)}
                style={{ padding: "2px", margin: "5px", cursor: "pointer" }}
                key={index}
              >
                {name}
              </div>
            ))
          ) : (
            <span> </span>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomComponent;
