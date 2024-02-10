import { RadioButton } from "primereact/radiobutton";

const CustomRadioButtons = ({ value, name, onChange, checked, options }) => {
  
  console.log("Hi")
  console.log("checked", checked)
  
  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        whiteSpace: "nowrap",
      }}
    >
      {options.map((option) => (
        <div
          key={option.value}
          style={{
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            marginLeft: "10px",
          }}
        >
          {checked} -
          {option.value}
          <RadioButton
            inputId={`${option.value}`}
            name={name}
            value={option.value}
            onChange={onChange}
            checked={checked == option.value}
          />
          <label htmlFor={`${option.label}`}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default CustomRadioButtons;
