import React from "react";

import logo from "./logo.svg";
import "./App.css";

import Navbar from "./Navbar";

import { BreakpointProvider, Breakpoint } from "react-socks";

function App() {
  return (
    <div className="App">
      <BreakpointProvider>
        <Navbar />
      </BreakpointProvider>
    </div>
  );
}

export default App;
