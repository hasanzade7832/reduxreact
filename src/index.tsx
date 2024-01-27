import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/views/Home";
import Login from "./views/login";
import "../src/assets/styles/global.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "primeicons/primeicons.css";
import "../src/App.scss"

let root: ReactDOM.Root | null = null;

const rootElement = document.getElementById("root");

if (rootElement) {
  root = ReactDOM.createRoot(rootElement);
} else {
  ////console.error("Could not find root element with id 'root'.");
}

root!.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </BrowserRouter>
  </Provider>
);

// rfce
