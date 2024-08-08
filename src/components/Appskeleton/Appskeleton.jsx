import "./Appskeleton.css";
import React from "react";
import Sidebar from '../Sidebar/Sidebar.jsx';
import Topbar from '../Topbar/Topbar.jsx';


export default function Rootshell() {
  return (
    <header className="App-header">
      <Topbar />
      <Sidebar />
    </header>
  );
}
