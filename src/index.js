import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThreeBasic from "./components/threeBasic";
import ThreeTwo from "./components/ThreeTwo";
import ThreeThree from "./components/ThreeThree";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/01" element={<ThreeBasic />}></Route>
        <Route path="/02" element={<ThreeTwo />}></Route>
        <Route path="/03" element={<ThreeThree />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
