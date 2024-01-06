import React from "react";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css"; // ثبت تم PrimeReact
import "primereact/resources/primereact.min.css"; // ثبت استایل‌های PrimeReact
import "primeicons/primeicons.css"; // ثبت آیکون‌های PrimeIcons
import "../../assets/styles/global.css";

const CustomComponent = ({ dialogData, titleBox, selectedNames }) => {
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
          {Array.isArray(selectedNames) && selectedNames.length > 0 ? (
            selectedNames.map((name, index) => (
              <div style={{ padding: "2px", margin: "5px" }} key={index}>
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
