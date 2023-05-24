import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import Home from "./pages/home/Home";
import Post from "./pages/post/Post";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
