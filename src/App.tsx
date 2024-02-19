import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import MainLayout from "./layout/MainLayout";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route index path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route Component={NotFound} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
