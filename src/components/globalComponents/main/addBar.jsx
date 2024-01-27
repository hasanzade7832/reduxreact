import { Button } from "primereact/button";

const SaveComponent = ({ onClick }) => {
  return (
    <div>
      <div className="p-toolbar-group-left">
        <Button
          onClick={onClick}
          label="Save"
          size="small"
          icon="pi pi-check"
          style={{
            margin: "10px",
            backgroundColor: "#03C03C",
            color:"#28282B"            
          }}
        />
        <hr style={{marginTop:"-5px"}}/>
      </div>
    </div>
  );
};

export default SaveComponent;
