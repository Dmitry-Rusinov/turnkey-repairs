import React from "react";
import { Routes,Route } from "react-router-dom";
import Header from "../Header/Header";
import MainBlock from "../MainBlock/MainBlock";
import CallbackForm from "../CallbackForm/CallbackForm";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <MainBlock />
      <CallbackForm />
    </div>
  );
}

export default App;
