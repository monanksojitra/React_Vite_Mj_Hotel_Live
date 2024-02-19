import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import MainLayout from "./layout/MainLayout";
import "./App.css";
function App() {
 
  return <Home />;
}

export default App;
