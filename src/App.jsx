import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Uploadpage from "./pages/Uploadpage.jsx";
import ValidationReport from "./pages/ValidationReport.jsx";
import CustomizeTemplate from "./pages/CustomizeTemplate.jsx";
import CustomTemplate from "./pages/CustomTemplate.jsx";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Uploadpage />} />
        <Route path="/validation-report" element={<ValidationReport />} />
        <Route path="/customizetemplate" element={<CustomizeTemplate />} />
        <Route path="/customtemplate" element={<CustomTemplate/>} />


        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}