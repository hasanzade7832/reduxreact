// CustomInputText.tsx
import { InputTextarea } from "primereact/inputtextarea";


const CustomInputText = ({ id, label ,onChange, value }) => {
  return (
    <span className="p-float-label" style={{ flex: "1", marginRight: "10px" }}>
      <InputTextarea value={value} id={id} style={{ width: "100%" }} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </span>
  );
};

export default CustomInputText;
