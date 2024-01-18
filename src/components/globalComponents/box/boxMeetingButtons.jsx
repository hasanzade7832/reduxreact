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
  selectedId,
}) => {
  const dispatch = useDispatch();

  const [updatedNames, setUpdatedNames] = useState([]);
  const [updatedId, setUpdatedId] = useState([]);

  useEffect(() => {
    setUpdatedNames(selectedNames);
    setUpdatedId(selectedId);
  }, [selectedNames, updatedId]);

  const dataMeetingButton = useSelector(
    (state) => state.selectedNameLetterButton.selectedNameLetterButton
  );

  const IdsMeetingButton = useSelector(
    (state) => state.selectedIdLetterButton.selectedIdLetterButton
  );

  const handleDoubleClick = (index) => {
    const updatedNamesMeetingCopy = [...dataMeetingButton];
    const updatedIdsMeetingCopy = [...IdsMeetingButton];
    updatedNamesMeetingCopy.splice(index, 1);
    updatedIdsMeetingCopy.splice(index, 1);
    setUpdatedNames(updatedNamesMeetingCopy);
    setUpdatedId(updatedIdsMeetingCopy);
    dispatch(
      mainSlice.actions.setSelectedNameMeetingButton(updatedNamesMeetingCopy)
    );
    dispatch(
      mainSlice.actions.setSelectedIdMeetingButton(updatedIdsMeetingCopy)
    );
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
                onDoubleClick={() => handleDoubleClick(index)}
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
