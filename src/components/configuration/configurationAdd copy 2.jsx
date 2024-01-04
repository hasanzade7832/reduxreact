import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const YourComponent = () => {
  return (
    <div>
      <div className="grid">
        <div className="col-3">
          <InputText
            placeholder="Input 1"
            style={{ marginRight: "5px", width: "100%" }}
          />
        </div>
        <div className="col-2">
          <Button label="..." size="small" style={{ width: "100%" }} />
        </div>
        <div className="col-1"></div>
        <div className="col-3">
          <InputText
            placeholder="Input 2"
            style={{ marginLeft: "10px", marginRight: "5px", width: "100%" }}
          />
        </div>
        <div className="col-2">
          <Button label="..." size="small" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
