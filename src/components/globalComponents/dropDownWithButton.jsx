import CustomDropdown from "./dropDownComp";
import CustomButton from "./buttonComp";
import { Dialog } from "primereact/dialog";
import { useSelector } from "react-redux";
import TableProgramTemplate from "../configuration/tableProgramTemplate";
import TableDefaultRibbon from "../configuration/tableDefaultRibbon";
import TableFormTemplate from "../configuration/tableFormTemplate";
import TableAfTemplate from "../configuration/tableAfTemplate";
import TableCommentForm from "../configuration/tableCommentForm";
import TableProcedureForm from "../configuration/tableProcedureForm";
import "../../assets/styles/global.css";

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
  console.log("nameOfDialogTable", nameOfDialogTable);

  return (
    <> 
      <CustomDropdown
        id="ID"
        value={value}
        options={options}
        optionLabel={optionLabel}
        label={label}
        onChange={onChange}
      />
      <CustomButton
        label="..."
        className="button-small"
        onClick={onButtonClick}
      />
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
