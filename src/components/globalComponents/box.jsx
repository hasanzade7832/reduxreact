import React from "react";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css"; // ثبت تم PrimeReact
import "primereact/resources/primereact.min.css"; // ثبت استایل‌های PrimeReact
import "primeicons/primeicons.css"; // ثبت آیکون‌های PrimeIcons
import "../../assets/styles/global.css";
import { useSelector } from "react-redux";

const CustomComponent = ({ dialogData, titleBox ,selectedNames }) => {
  console.log("aaaaaaaaaaaaa",selectedNames)
  return (
    <>
      <div
        style={{
          background: "#C8C9CE",
          height: "100px",
          position: "relative",
        }}
      >
        <Button
          label="+"
          className="button-small"
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            backgroundColor: "#FF1D18",
          }}
          onClick={dialogData}
          color="black"
        />
        <span style={{ margin: "10px" }}>{titleBox}</span>
        <hr
          style={{
            position: "absolute",
            width: "100%",
            marginTop: "10px",
          }}
        />
        <div style={{ marginTop: "10px" }}>
        {Array.isArray(selectedNames) && selectedNames.length > 0 ? (
          selectedNames.map((name, index) => (
            <span key={index}>{name}</span>
          ))
        ) : (
          <span>No selected names</span>
        )}
      </div>
      </div>
    </>
  );
};

export default CustomComponent;
