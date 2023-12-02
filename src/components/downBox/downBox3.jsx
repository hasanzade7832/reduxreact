import { useSelector } from "react-redux";

const DownBox = () => {
  const counter = useSelector((state) => state.counter.value);
  return (
    <div
      style={{ backgroundColor: "#e1e1e1", padding: "20px", color: "black" }}
    >
      <h1>counter:{counter}</h1>
    </div>
  );
};

export default DownBox;
