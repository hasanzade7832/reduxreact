import { Button } from "primereact/button";

const SaveComponent = ({ onClick }) => {
  return (
    <div>
      <div className="p-toolbar-group-left">
        <Button
          onClick={onClick}
          label="Edit"
          size="small"
          icon="pi pi-file-edit"
          className="green-800"
          style={{
            margin: "10px",
            backgroundColor: "#FEBE10",
            color:"black"
          }}
        />
        <hr style={{marginTop:"-5px"}}/>
      </div>
    </div>
  );
};

export default SaveComponent;
