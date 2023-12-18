// CustomInputText.tsx
import React, { FC } from "react";
import { InputText } from "primereact/inputtext";

interface CustomInputTextProps {
    id: string;
    label: string;
}

const CustomInputText: FC<CustomInputTextProps> = ({ id, label }) => {
    return (
        <span className="p-float-label" style={{ flex: "1", marginRight: "10px" }}>
            <InputText
                id={id}
                style={{ width: "80%" }}
                className="custom-input"
            />
            <label htmlFor={id}>{label}</label>
        </span>
    );
};

export default CustomInputText;





