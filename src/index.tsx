import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/views/Home";
import "../src/assets/styles/global.css";
import { SubTabProvider } from "./contexts/TabContext";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import Box from "./components/box/box";

let root: ReactDOM.Root | null = null;

const rootElement = document.getElementById("root");

if (rootElement) {
  root = ReactDOM.createRoot(rootElement);
} else {
  console.error("Could not find root element with id 'root'.");
}

root!.render(
  <Provider store={store}>
    <SubTabProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/box" element={<Box />} />
        </Routes>
      </BrowserRouter>
    </SubTabProvider>
  </Provider>
);

// rfce
