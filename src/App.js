import React from "react";
import TopBar from "./components/TopBar";
import Calendar from "./components/Calendar";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import "./App.css";

export default function App() {
  return (
    <>
      <TopBar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calendar/:calendarId" element={<Calendar />} />
        </Routes>
      </Container>
    </>
  );
}
