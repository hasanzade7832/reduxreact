import CustomDropdown from "./dropDownComp";
import CustomButton from "./buttonComp";
import { Dialog } from "primereact/dialog";
import { useSelector } from "react-redux";
import TableProgramTemplate from "../../configuration/tableSelectOption/tableProgramTemplate";
import TableDefaultRibbon from "../../configuration/tableSelectOption/tableDefaultRibbon";
import TableFormTemplate from "../../configuration/tableSelectOption/tableFormTemplate";
import TableAfTemplate from "../../configuration/tableSelectOption/tableAfTemplate";
import TableCommentForm from "../../configuration/tableSelectOption/tableCommentForm";
import TableProcedureForm from "../../configuration/tableSelectOption/tableProcedureForm";
import "../../../assets/styles/global.css";

const CustomDropdownComponent = ({
  value,
  options,
  optionLabel,
  label,
  onChange,
  onButtonClick,
  showDialog,
  hideDialog,
}) => {
  const nameOfDialogTable = useSelector(
    (state) => state.nameofDialogTable.nameofDialogTable
  );
  ////console.log("nameOfDialogTable", nameOfDialogTable);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ width: "100%" }}>
          <CustomDropdown
            id="ID"
            value={value}
            options={options}
            optionLabel={optionLabel}
            label={label}
            onChange={onChange}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <CustomButton
            label="..."
            className="button-small"
            onClick={onButtonClick}
          />
        </div>
      </div>
      {showDialog && (
        <Dialog
          style={{ width: "30vw" }}
          visible={showDialog}
          onHide={hideDialog}
          resizable={true}
          maximizable={true}
        >
          {nameOfDialogTable == "programTemplate" && <TableProgramTemplate />}
          {nameOfDialogTable == "defaultRibbon" && <TableDefaultRibbon />}
          {nameOfDialogTable == "lessonForms" && <TableFormTemplate />}
          {nameOfDialogTable == "afTemplate" && <TableAfTemplate />}
          {nameOfDialogTable == "commentForm" && <TableCommentForm />}
          {nameOfDialogTable == "procedureForm" && <TableProcedureForm />}
        </Dialog>
      )}
    </>
  );
};

export default CustomDropdownComponent;
