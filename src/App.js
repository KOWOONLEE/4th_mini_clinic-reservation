import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main";
import Reservation from "./pages/Reservation";
import Confirm from "./pages/Confirm";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
