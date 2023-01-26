import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Link, Navigate, useNavigate, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
function App() {
  return (
    <div className="">
    <Routes>


      <Route path="/" element={<Home />}></Route>

    </Routes>
    </div>
  );
}

export default App;
