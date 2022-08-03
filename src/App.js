import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./firstPage";
import Details from "./details";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/userdetals/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
};

export default App;
