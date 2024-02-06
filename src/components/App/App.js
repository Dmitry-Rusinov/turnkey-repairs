import React from "react";
import { Routes,Route } from "react-router-dom";
import Header from "../Header/Header";
import MainBlock from "../MainBlock/MainBlock";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <MainBlock />
    </div>
  );
}

export default App;
