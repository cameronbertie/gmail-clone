import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Router, Routes, Route } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
        <Sidebar />
        <Routes>
          <Route path="/mail">
            <Mail />
          </Route>
          <Route path="/">
            <EmailList />
          </Route>
        </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
