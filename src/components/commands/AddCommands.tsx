import React from 'react';
import CustomInputText from '../globalComponents/inputCom';
import "../../../src/App.scss"

const CommandsAdd = () => {
  return (
    <>
    {/* ///////////////////////////LINE1///////////////////////////// */}
      <div className="grid" style={{marginLeft:"20px",marginTop:"20px"}}>
        <div className="col-5">
          <div>
            <CustomInputText label='Name' id='Name'/>
          </div>
        </div>
        <div className="col-1">

        </div>
        <div className="col-5">
          <CustomInputText label='Description' id='Description'/>
        </div>
      </div>
      {/* ///////////////////////////LINE2///////////////////////////// */}
      <div className="grid" style={{marginLeft:"20px",marginTop:"20px"}}>
        <div className="col-5">
          <div>
            <CustomInputText label='Name' id='Name'/>
          </div>
        </div>
        <div className="col-1">

        </div>
        <div className="col-5">
          <CustomInputText label='Description' id='Description'/>
        </div>
      </div>
      {/* ///////////////////////////LINE3///////////////////////////// */}
      <div className="grid" style={{marginLeft:"20px",marginTop:"20px"}}>
        <div className="col-5">
          <div>
            <CustomInputText label='Name' id='Name'/>
          </div>
        </div>
        <div className="col-1">

        </div>
        <div className="col-5">
          <CustomInputText label='Description' id='Description'/>
        </div>
      </div>
      {/* ///////////////////////////LINE4///////////////////////////// */}
      {/* ///////////////////////////LINE5///////////////////////////// */}
      {/* ///////////////////////////LINE6///////////////////////////// */}
      {/* ///////////////////////////LINE7///////////////////////////// */}
      
    </>
  );
};

export default CommandsAdd;
